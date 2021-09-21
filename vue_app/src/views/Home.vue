<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">Usersのページへ行く</button>
    </div>
</template>

<script>
export default {
    methods: {
        toUsers() {
            this.$router.push('users/1');
        }
    }
}
</script>
