import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Consult from "../components/Consult";
import About from "../components/About";
import JoinUs from "../components/JoinUs";
import Login from "../components/Login";
Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        component:Home
    },
    {
        path:'/consult',
        component: Consult
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/joinus',
        component: JoinUs
    },{
    path: '/login',
        component: Login
    }
]
const router=new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})
export default router
