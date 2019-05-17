import Vue from "vue";
import Router from "vue-router";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard/Dashboard";
import CreatePost from "./components/Dashboard/CreatePost";
import Statistics from "./components/Dashboard/Statistics";

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
        },
        {
            path: '/dashboard', name: 'dashboard',
            components: {
                'main-content': Dashboard,
            },
            children: [
                {path: "statistics", component: Statistics},
                {path: "create", component: CreatePost}
            ]
        }
    ]
});
