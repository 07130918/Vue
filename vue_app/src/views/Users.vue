<template>
    <div>
        <h3>Users</h3>
        <button @click="toHome">Homeのページへ行く</button>
        <h1>User No. {{ userId }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userId: this.$route.params.id,
        }
    },
    methods: {
        toHome() {
            this.$router.push({path: "/home"});
        }
    }
}
</script>
