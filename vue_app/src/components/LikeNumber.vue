<template>
<!-- template内は必ず1つの要素をルートとしなければならない -->
    <div>
        <p>いいね: {{ number / 2 }}</p>
        <button @click="increment">+1</button>
    </div>
    <!-- <div></div>  <= これはエラー起こる -->
</template>

<script>
    export default {
        props: ['number'],
        methods: {
            increment() {
                this.number++;
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
