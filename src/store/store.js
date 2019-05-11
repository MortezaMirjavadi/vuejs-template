import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [],
        categories: [],

        pageSize: 5,
        activePage: 1,
        articlesCount: 0,
        pageCount: 0,
        pagesAvailable: null
    },
    getters: {
        latestPosts: state => {
            return state.articles[0];
        },
        articles: state => {
            return state.articles[state.activePage - 1];
        },
        categories: state => {
            return state.categories;
        },
        activePage: state => {
            return state.activePage;
        },
        articlesCount: state => {
            return state.articlesCount;
        },
        pageCount: state => {
            return Math.ceil(state.articlesCount / state.pageSize);
        },
        pagesAvailable: state => {
            return state.pagesAvailable;
        }
    },
    mutations: {
        createArticle: (state, payload) => {
            state.articles.push(payload);
        },
        getArticles: (state, payload) => {
            // Vue is unable to react to mutations on state arrays (by index)
            Vue.set(state.articles, state.activePage - 1, payload);
            // state.articles.splice(index, 1, payload)
        },
        setCategories: (state, payload) => {
            state.categories = [...state.categories, ...payload];
        },
        setArticlesCount: (state, payload) => {
            state.pageCount = Math.ceil(payload / state.pageSize);
            state.pagesAvailable = _.range(1, state.pageSize + 1);
            state.articlesCount = payload;
        },
        setPageAvailable: (state, payload) => {
            const {value, moveType} = payload;
            if ((moveType === null || moveType === 'next') && state.pagesAvailable[state.pagesAvailable.length - 1] === state.pageCount) {
                return;
            }
            if (value + state.pageSize - 1 <= state.pageCount) {
                state.pagesAvailable = _.range(value, value + state.pageSize);
            }
            else {
                if ((state.pageCount - value + 1) < state.pageSize) {
                    const temp = state.pageSize - (state.pageCount - value + 1);
                    state.pagesAvailable = _.range(temp, temp + state.pageSize);
                }
                else {
                    state.pagesAvailable = _.range(value, state.pageCount + 1);
                }
            }
        },
        setActivePage: (state, payload) => {
            state.activePage = payload;
        }
    },
    actions: {
        asyncCreateArticle: ({commit}, payload) => {
            Vue.http.post('articles').then(response => {
                commit('createArticle', response.body)
            });
        },
        asyncGetCats: ({commit}) => {
            Vue.http.get('articles/categories')
                .then(response => {
                    commit('setCategories', response.body.cats)
                })
        },
        asyncGetArticles: ({commit, state}) => {
            const {pageSize} = state;
            Vue.http.get(`articles?limit=${pageSize}&offset=0`)
                .then(response => {
                    const _articles = response.body.articles;
                    commit('getArticles', _articles);
                    commit('setArticlesCount', response.body.articlesCount)
                });
        },
        asyncGetSpecificPage: ({commit, state}, info) => {
            const {value, moveType} = info;
            if (state.articles[value - 1] !== undefined) {
                commit('setPageAvailable', {value, moveType});
                commit('setActivePage', value);
                return;
            }
            const {pageSize} = state;
            const offset = value * pageSize - pageSize;
            Vue.http.get(`articles?limit=${pageSize}&offset=${offset}`)
                .then(response => {
                    const _articles = response.body.articles;
                    commit('setPageAvailable', {value, moveType});
                    commit('setActivePage', value);
                    commit('getArticles', _articles);
                });
        }
    },
    modules: {}
});
