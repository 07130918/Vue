<template>
<!-- template内は必ず1つの要素をルートとしなければならない -->
    <div>
        <p>いいね: {{ count / 2 }}</p>
        <button @click="increment">+1</button>
    </div>
    <!-- <div></div>  <= これはエラー起こる -->
</template>

<script>
    export default {
        // 親から渡ってきた属性(プロパティはコンポーネントに登録できるカスタム属性)
        props: ['count'],
        methods: {
            increment() {
                this.count++;
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
