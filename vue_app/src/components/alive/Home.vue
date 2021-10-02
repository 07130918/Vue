<template>
    <div>
        <!-- v-border引数solidは../../main.jsの32行目binding.argになる -->
        <p v-border:solid.round.shadow="{width: '5px', color: 'gray'}">This is Home.vue</p>
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
