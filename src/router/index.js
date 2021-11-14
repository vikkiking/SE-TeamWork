import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import JoinUs from "../components/JoinUs";
import Login from "../components/Login";
import SearchResult from "../components/SearchResult/SearchResult";
import Detail from "../components/Detail";
import Sample from "../components/Samples/Samples";

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/joinus',
        component: JoinUs
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/search',
        component: SearchResult
    }, {
        path: '/detail',
        component: Detail
    }, {
        path: '/sample',
        component: Sample
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
