<template>
    <div>
        <h1>Pset1</h1>
        <h3 id="mouse-h3" @mousemove="displayMousePosition">マウスを乗せてください</h3>
        <p>X: {{ xPosition }}, Y: {{ yPosition }}</p>
        <button @click="confirmPageReload(ensureMsg, $event)">
            Page Reload
        </button>
        <hr>
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
            message: '',
            xPosition: null,
            yPosition: null,
            ensureMsg: 'ページをリロードしますか?',
        }
    },
    // components: {

    // },
    methods: {
        // v-onで実行される関数は自動で$eventが渡される(DOMイベントを参照したい場合は仮引数eventで受けてあげる)
        displayMousePosition: function(event) {
            console.log(event);
            this.xPosition = event.clientX;
            this.yPosition = event.clientY;
        },
        confirmPageReload: function(ensureMsg, event) {
            console.log(event);
            if (confirm(ensureMsg)) {
                location.reload();
            }
        },
    },
}
</script>

<style scoped>
#mouse-h3 {
    background-color: #0085C9;
}
</style>
