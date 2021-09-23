<template>
    <div>
        <h2>UsersHeader</h2>
        <button @click=incrementStoreCount>+1</button>
    </div>
</template>

<script>
export default {
    methods: {
        incrementStoreCount() {
            this.$store.state.count++;
        }
    }
}
</script>
