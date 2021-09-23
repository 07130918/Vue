<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">Usersのページへ行く</button>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    methods: {
        toUsers() {
            this.$router.push('users/1');
        }
    }
}
</script>
