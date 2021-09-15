<template>
<!-- シングルファイルコンポーネントはtemplate, script, styleの３つに別れている -->
    <div>
        <LikeHeader></LikeHeader>
        <LikeNumber></LikeNumber>
    </div>
</template>

<script>
import LikeHeader from './LikeHeader.vue'
    export default {
        components: {
            // LikeHeader: LikeHeader
            // 短縮できる
            LikeHeader
        }
    }
</script>

<style>
</style>
