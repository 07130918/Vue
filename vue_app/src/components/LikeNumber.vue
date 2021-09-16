<template>
<!-- template内は必ず1つの要素をルートとしなければならない -->
    <div>
        <p>いいね: {{ halfNumber }}</p>
        <button @click="increment">+1</button>
    </div>
    <!-- <div></div>  <= これはエラー起こる -->
</template>

<script>
    export default {
        // 親から渡ってきた属性(プロパティはコンポーネントに登録できるカスタム属性)
        // プロパティに型などのバリデーションをかける事ができる(コメント例: 型のみのとき簡潔に書ける)
        // props: ['totalNumber'],
        // props: {'totalNumber': Number},
        props: {
            totalNumber: {
                type: Number,
                required: true
            }
        },
        computed: {
            halfNumber() {
                return this.totalNumber / 2;
            }
        },
        methods: {
            increment() {
                this.totalNumber++;
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
