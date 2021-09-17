<template>
    <div>
        <p>This is About.vue</p>
        <input type="text" placeholder="keep alive!!!">
    </div>
</template>

<script>
export default {
    // keep-aliveによって生まれる新たなライフサイクル
    deactivated() {
        console.log("About: deactivated")
    },
    activated() {
        console.log("About: activated")
    }
}
</script>
