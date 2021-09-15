<template>
<!-- template内は必ず1つの要素をルートとしなければならない -->
    <div>
        <div>
            こんにちは
        </div>
        <p>いいね: {{ number }}</p>
        <button @click="increment">+1</button>
    </div>
    <!-- <div></div>  <= これはエラー起こる -->
</template>

<script>
    export default {
        data() {
            return {
                number: 5
            };
        },
        methods: {
            increment() {
                this.number++;
            }
        }
    }
</script>

<style>
</style>
