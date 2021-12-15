<template>
    <div>
        <input type="text" :value="value" @input="$emit('input', $event.target.value)">
        <h3>{{ value }}</h3>
    </div>
</template>

<script>
export default {
    props: ["value"],
    // props: {
    //     value: {
    //         type: String,
    //         // required: true,
    //     }
    // },
    // methods: {
    //     onChange: function(event) {
    //         this.$emit('');
    //     },
    // }
}
</script>
