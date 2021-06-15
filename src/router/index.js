import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../views/Home/Home.vue')
const CateGory = () =>
    import ('../views/categore/CateGory.vue')
const ProFile = () =>
    import ('../views/profile/ProFile.vue')
const ShopCar = () =>
    import ('../views/shopcar/ShopCar.vue')

Vue.use(VueRouter)

const routes = [{
        path: '',
        // name: 'Home',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },
    // {
    // //     path: '/about',
    // //     name: 'About',
    // //     // route level code-splitting
    // //     // this generates a separate chunk (about.[hash].js) for this route
    // //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
    {
        path: '/categore',
        name: 'CateGory',
        component: CateGory
    },
    {
        path: '/profile',
        name: 'ProFile',
        component: ProFile
    },
    {
        path: '/shopcar',
        name: 'ShopCar',
        component: ShopCar
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router