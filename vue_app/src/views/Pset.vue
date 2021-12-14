<template>
    <div>
        <h1>Pset1</h1>
        <h3 @mousemove="displayMousePosition">マウスを乗せてください</h3>
        <p>X: {{ x }}, Y: {{ y }}</p>

        <h1>Pset2</h1>
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
            x: null,
            y: null,
        }
    },
    // components: {

    // },
    methods: {
        displayMousePosition: function(event) {
            console.log(event);
            this.x = event.clientX;
            this.y = event.clientY;
        }
    },
}
</script>
