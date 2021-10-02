<template>
    <div>
        <label for="title">タイトル</label>
        <input type="text" id="title" :value="value" @input="$emit('input', $event.target.value)">
        <h4>タイトル: {{ value }}</h4>
    </div>
</template>

<script>
    export default {
        props: ["value"],
    }
</script>
