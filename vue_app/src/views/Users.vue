<template>
    <div>
        <h3>Users</h3>
        <button @click="toHome">Homeのページへ行く</button>
        <h1>User No. {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push({path: "/home"});
        }
    }
}
</script>
