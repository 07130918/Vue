<template>
<!-- template内は必ず1つの要素をルートとしなければならない -->
    <div>
        <p>いいね÷2 = {{ halfNumber }}</p>
        <button @click="increment">+1</button>
        <div>
            <button @click="popup(10)">alert発動</button>
        </div>
    </div>
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
            },
        },
        computed: {
            halfNumber() {
                return this.totalNumber / 2;
            }
        },
        methods: {
            increment() {
                // 第1引数に任意の命名, (第2引数にオブジェクト)
                // $emitはカスタムイベントを作る
                this.$emit("my-click", this.totalNumber + 1);
            },
            random_num(max) {
                console.log(this.$parent.$data);
                console.log(this.$parent.$data.dynamicSlotName);
                return String(Math.floor(Math.random() * max));
            },
            popup(max) {
                this.$emit("my-popup", this.random_num(max));
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }
</style>
