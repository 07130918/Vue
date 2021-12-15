<template>
    <div>
        <input type="text" :value="value" @change="onChange">
        <h3>{{ value }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true,
        }
    },
    methods: {
        onChange: function(event) {
            this.$emit('input', event.target.value)
        },
    }
}
</script>
