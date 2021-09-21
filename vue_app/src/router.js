import Vue from "vue";
import Router from "vue-router";
import IndexApp from './views/IndexApp.vue'
import Home from './views/Home.vue'
import Users from './views/Users.vue'

Vue.use(Router);

export default new Router({
    routes: [
        { path: "/", component: IndexApp },
        { path: "/home", component: Home },
        { path: "/users", component: Users },
    ]
})
