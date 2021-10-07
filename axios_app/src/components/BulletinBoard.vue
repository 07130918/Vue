<template>
<div> <!-- post.nameはユニーク -->
    <div v-for="post in posts" :key="post.name">
        <div>名前: {{post.fields.name.stringValue}}</div>
        <div>コメント: {{post.fields.commennt.stringValue}}</div>
        <br>
    </div>
</div>
</template>

<script>
export default {
    props: ["posts"]
}
</script>
