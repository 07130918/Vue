<template>
<!-- シングルファイルコンポーネントはtemplate, script, styleの３つに別れている -->
    <div>
        <LikeHeader></LikeHeader>
        <h2>{{number}}</h2>
        <!-- このように親から子に渡す値を定義する -->
        <!-- 属性として渡してあげる -->
        <LikeNumber :totalNumber='number'></LikeNumber>
        <LikeNumber v-bind:total-number='number'></LikeNumber>
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
            // LikeHeader: LikeHeader
            // 短縮できる
            LikeHeader
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
