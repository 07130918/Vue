<template>
    <div>
        <label for="checkbox">雨天参加</label>
        <input type="checkbox" id="checkbox" :checked="join = checked" @change="$emit('change', $event.target.checked)">
        <label for="checkbox">{{ join }}</label>
    </div>
</template>

<script>
    export default {
        // checkedの場合はこのように宣言する必要がある
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            checked: Boolean
        }
    }
</script>
