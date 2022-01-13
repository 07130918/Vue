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
const Pset = () => import(/* webpackChunkName: "Pset" */ './views/Pset.vue');
const Home = () => import(/* webpackChunkName: "Home" */ './views/home/Home.vue');
const HeaderHome = () => import(/* webpackChunkName: "HeaderHome" */ './views/home/HeaderHome.vue');
const Users = () => import(/* webpackChunkName: "Users" */'./views/users/Users.vue');
const HeaderUsers = () => import(/* webpackChunkName: "HeaderUsers" */ './views/users/HeaderUsers.vue');
const UsersProfile = () => import(/* webpackChunkName: "UsersProfile" */ './views/users/UsersProfile.vue');
const UsersPosts = () => import(/* webpackChunkName: "UsersPosts" */ './views/users/UsersPosts.vue');

// useはプラグイン導入キーワード:
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/index", component: IndexApp },
        { path: "/pset", component: Pset },
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
