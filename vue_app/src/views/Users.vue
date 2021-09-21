<template>
    <div>
        <h3>Users</h3>
        <button @click="toHome">Homeのページへ行く</button>
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push('home');
        }
    }
}
</script>
