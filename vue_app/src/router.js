import Vue from "vue";
import Router from "vue-router";
import IndexApp from './views/IndexApp.vue'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import UsersProfile from './views/UsersProfile.vue'
import UsersPosts from './views/UsersPosts.vue'
import HeaderUsers from './views/HeaderUsers.vue'
import HeaderHome from './views/HeaderHome.vue'

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
