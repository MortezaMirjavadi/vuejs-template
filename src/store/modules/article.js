const state = {
    posts: [{title: "Test1"}, {title: "Test2"}],
};
const getters = {
    posts: state => {
        return state.posts;
    }
};
const mutations = {
    createArticle: (state, payload) => {
        state.posts.push(payload);
    },
    getArticles: (state, payload) => {
        state.articles = payload;
    }
};
const actions = {
    asyncCreateArticle: ({commit}, payload) => {
        Vue.http.post('http://localhost:3000/api/posts').then(response => {
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
