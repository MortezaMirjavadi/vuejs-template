import Vue from "vue";
import Router from "vue-router";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAcccount";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "index",
            components: {
                'main-content': MainContent,
                'header': Header,
                'footer': Footer,
            }
        },
        {path: '/index', redirect: '/'},
        {
            path: '/register', name: 'register',
            components: {
                'main-content': CreateAccount,
                'header': Header,
            }
        }
        // {
        //   path: "/about",
        //   name: "about",
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () =>
        //     import(/* webpackChunkName: "about" */ "./views/About.vue")
        // }
    ]
});
