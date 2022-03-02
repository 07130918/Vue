<template>
    <div>
        {{ fruits[0] }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fruits: ['apple', 'orange', 'banana'],
            }
        },
    }
</script>
