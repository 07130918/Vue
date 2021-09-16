<template>
<!-- シングルファイルコンポーネントはtemplate, script, styleの３つに別れている -->
    <div>
        <LikeHeader></LikeHeader>
        <h2>{{number}}</h2>
        <LikeNumber :number='number'></LikeNumber>
        <LikeNumber v-bind:number='number'></LikeNumber>
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
