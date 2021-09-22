<template>
    <div>
        <h3>Users</h3>
        <button @click="toHome">Homeのページへ行く</button>
        <hr>
        <router-link to="/users/1">ユーザー1</router-link>
        <router-link to="/users/2">ユーザー2</router-link>
        <hr>
        <h1>User No. {{ id }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ["id"],
    methods: {
        toHome() {
            this.$router.push({path: "/home"});
        }
    },
    watch: {
        $route(to, from) {
            console.log(to);
            console.log(from);
        }
    }
}
</script>
