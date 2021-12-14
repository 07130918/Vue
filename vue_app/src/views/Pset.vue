<template>
    <div>
        <h1>Pset</h1>
        <!-- v-forを回すときはkey属性を忘れずに -->
        <input type="text" v-model="message">
        <h3>{{ message }}</h3>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "",
        }
    },
    // components: {

    // },
    // methods: {

    // },
}
</script>
