<template>
    <div>
        <input type="text" :value="value" @[nativeEventType]="onFire" placeholder="値保持">
        <h3>{{ value }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: false,
        },
        nativeEventType: {
            type: String,
            required: false,
            default: 'input',
        }
    },
    methods: {
        onFire: function(event) {
            console.log("onFire() was called", event);
            this.$emit('input-completion', event.target.value);
        },
    }
}
</script>
