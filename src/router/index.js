import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home/Home";
import JoinUs from "../components/JoinUs";
import SearchResult from "../components/SearchResult/SearchResult";//应当保留
import Samples from "../components/Samples/Samples";//不应当保留

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/joinus',
        component: JoinUs
    },{
        path: '/search',
        component: SearchResult
    }, {
        path: '/sample',
        component: Samples
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
