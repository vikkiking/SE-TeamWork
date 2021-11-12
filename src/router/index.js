import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Consult from "../components/Consult";
import About from "../components/About";
import JoinUs from "../components/JoinUs";
import Login from "../components/Login";
import SearchResult from "../components/SearchResult/SearchResult";
import Detail from "../components/Detail";
import Database from "../components/Database/Database";

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/consult',
        component: Consult
    },
    {
        path: '/about',
        component: About
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
        path: '/database',
        component: Database
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
