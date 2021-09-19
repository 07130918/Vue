<template>
    <div>
        <p v-border="'5px'">This is Home.vue</p>
        <input type="text" placeholder="keep alive!!!">
    </div>
</template>

<script>
export default {
    deactivated() {
        console.log("Home: deactivated")
    },
    activated() {
        console.log("Home: activated")
    }
}
</script>
