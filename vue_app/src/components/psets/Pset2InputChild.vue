<template>
    <div>
        <input type="text" :value="value" @change="onChange" placeholder="値保持">
        <h3>{{ value }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: false,
        }
    },
    methods: {
        onChange: function(event) {
            console.log("onChange() was called", event);
            this.$emit('input-completion', event.target.value);
        },
    }
}
</script>
