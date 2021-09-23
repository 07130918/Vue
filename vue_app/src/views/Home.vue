<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">Usersのページへ行く</button>
        <p>doubleCount: {{ doubleCount }}</p>
        <p>tripleCount: {{ tripleCount }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        doubleCount() {
            return this.$store.getters.doubleCount
        },
        tripleCount() {
            return this.$store.getters.tripleCount
        },
    },
    methods: {
        toUsers() {
            this.$router.push('users/1');
        }
    }
}
</script>
