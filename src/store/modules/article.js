const state = {
    articles: [{title: "Test1"}, {title: "Test2"}],
};
const getters = {
    articles: state => {
        return state.articles;
    }
};
const mutations = {
    createArticle: (state, payload) => {
        state.articles.push(payload);
    },
    getArticles: (state, payload) => {
        state.articles = payload;
    }
};
const actions = {
    asyncCreateArticle: ({commit}, payload) => {
        Vue.http.post('http://localhost:3000/api/articles').then(response => {
            commit('createArticle', response.body)
        });
    },
    asyncGetArticles: ({commit}) => {
        debugger;
        // Vue.http.get('http://localhost:3000/api/articles').then(response => {
        //     commit('getArticles', response.body)
        // });
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}
