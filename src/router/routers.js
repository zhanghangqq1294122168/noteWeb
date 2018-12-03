import Vue from "vue";
import VueRouter from "vue-router";

//使用路由
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: 'home',
        component: () => import("../modules/home/Home"),
        hidden: true
    }, {
        path: "/article",
        component: () => import("../modules/home/Article"),
        hidden: true
    }, {
        path: "/book",
        component: () => import("../modules/home/Book"),
        hidden: true
    }, {
        path: "/other",
        component: () => import("../modules/home/Other"),
        hidden: true
    },{
        path: "/editor",
        component: () => import("../modules/home/Editor"),
        hidden: true
    }
];

const router = new VueRouter({
    routes: routes
});

export default router;
