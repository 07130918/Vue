<template>
    <div>
        <label for="checkbox">雨天参加</label>
        <input type="checkbox" id="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)">
        <label for="checkbox">{{ checked }}</label>
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: { checked: Boolean }
    }
</script>
