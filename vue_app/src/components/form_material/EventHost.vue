<template>
    <div>
        <label for="host">主催者</label>
        <input type="text" id="host" :value="value" @input="$emit('input', $event.target.value)">
        <h4>主催者: {{ value }}</h4>
    </div>
</template>


<script>
    export default {
        props: ["value"],
    }
</script>
