<template>
    <div>
        <label for="maxNumber">最大人数</label>
        <input type="number" id="maxNumber" :value="value" @input="$emit('input', $event.target.value)">
        <h4>最大人数: {{ value }}</h4>
    </div>
</template>


<script>
    export default {
        props: ["value"],
    }
</script>
