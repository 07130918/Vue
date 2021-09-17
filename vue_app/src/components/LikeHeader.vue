<template>
    <div>
        <slot name="title">フォールバックコンテンツ(何もない時に表示されるコンテンツ)</slot>
        <slot name="num"></slot>
        <slot name="num"></slot>
        <p>{{ headerText }}</p>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ["headerText"]
    }
</script>

<style>
</style>
