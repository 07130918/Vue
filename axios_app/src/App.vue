<template>
    <div id="app">
        <h3>掲示板に投稿する</h3>
        <label for="name">ニックネーム</label>
        <input id="name" type="text" v-model="name">
        <br><br>
        <label for="comment">コメント:</label>
        <textarea id="comment" v-model="comment"></textarea>
        <h2>掲示板</h2>

    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            comment: "",
        }
    }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
