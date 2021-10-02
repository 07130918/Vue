import Vue from "vue";
import Router from "vue-router";
// import IndexApp from './views/IndexApp.vue'
// import Home from './views/Home.vue'
// import Users from './views/Users.vue'
// import UsersProfile from './views/UsersProfile.vue'
// import UsersPosts from './views/UsersPosts.vue'
// import HeaderUsers from './views/HeaderUsers.vue'
// import HeaderHome from './views/HeaderHome.vue'

// 動的import
const IndexApp = () => import(/* webpackChunkName: "Index" */ './views/IndexApp.vue');
const Home = () => import(/* webpackChunkName: "Home" */ './views/Home.vue');
const Users = () => import(/* webpackChunkName: "Users" */'./views/Users.vue');
const UsersProfile = () => import(/* webpackChunkName: "UsersProfile" */ './views/UsersProfile.vue');
const UsersPosts = () => import(/* webpackChunkName: "UsersPosts" */ './views/UsersPosts.vue');
const HeaderUsers = () => import(/* webpackChunkName: "HeaderUsers" */ './views/HeaderUsers.vue');
const HeaderHome = () => import(/* webpackChunkName: "HeaderHome" */ './views/HeaderHome.vue');

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/index", component: IndexApp },
        {
            path: "/home", components: {
                default: Home,
                header: HeaderHome
            },
            beforeEnter(to, from, next) {
                console.log("This is views/Home.vue!!!")
                next();
            }
        },
        {
            path: "/users/:id",
            components:{
                default: Users,
                header: HeaderUsers
            },
            // props: true,
            // propsをオブジェクトにしないと名前付きviewにidが渡せなくなる
            props: {
                default: true,
                header: false,
            },
            children: [
                { path: "posts", component: UsersPosts },
                { path: "profile", component: UsersProfile, name: "users-id-profile" }
            ]
        },
        { path: '*', redirect: '/index' }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        console.log("scrollBehavior")
    }
})
