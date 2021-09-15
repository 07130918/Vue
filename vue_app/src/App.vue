<template>
<!-- シングルファイルコンポーネントはtemplate, script, styleの３つに別れている -->
    <div>
        <LikeHeader></LikeHeader>
        <LikeNumber></LikeNumber>
    </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
    export default {
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
