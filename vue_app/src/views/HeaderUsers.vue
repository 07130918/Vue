<template>
    <div>
        <h2>UsersHeader</h2>
        <p>store.jsのstate.count up!</p>
        <button @click=incrementStoreCount>+1</button>
    </div>
</template>

<script>
export default {
    methods: {
        incrementStoreCount() {
            return this.$store.state.count++;
        }
    }
}
</script>
