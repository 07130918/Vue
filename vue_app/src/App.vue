<template>
    <div>
        <LikeHeader headerText="hello">
            <!-- slotにLikeHeader内要素をぶちこめる 名前付きが好ましい -->
            <template v-slot:title>
                <h1>トータルの良いいね数</h1>
            </template>
            <template v-slot:num>
                <h2>{{ number }}</h2>
            </template>
        </LikeHeader>
        <!-- このように親から子に渡す値を定義する -->
        <!-- 属性として渡してあげる -->
        <!-- カスタムイベント名はケバブケースで -->
        <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
        <LikeNumber v-bind:total-number="number"></LikeNumber>
    </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
    export default {
        data() {
            return{
                number: 10
            }
        },
        // ローカル登録
        components: {
            // LikeHeader: LikeHeader 短縮できる
            LikeHeader
        },
        methods: {
            // valには$emitの第2引数が来る
            incrementNumber(val) {
                this.number = val;
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
