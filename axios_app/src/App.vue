<template>
    <div id="app">
        <h3>掲示板に投稿する</h3>
        <label for="name">ニックネーム</label>
        <input id="name" type="text" v-model="name">
        <br><br>
        <label for="comment">コメント:</label>
        <textarea id="comment" v-model="comment"></textarea>
        <br><br>
        <button @click="createComment">コメント送信</button>
        <h2>掲示板</h2>
        <BulletinBoard :posts="posts"></BulletinBoard>
    </div>
</template>

<script>
// import axios from "axios";
// カスタムインスタンスをimportする場合
import axios from './axios-auth'
import BulletinBoard from './components/BulletinBoard.vue'

export default {
    data() {
        return {
            name: "",
            comment: "",
            posts: [],
        }
    },
    components: {
        BulletinBoard
    },
    //インスタンスが読み込まれたら実行したいのでcreatedを採用
    created() { // getは, 第1引数: URL, 第2引数: リクエストの設定(なくても良い)
        axios.get("/comments").then(response => {
            this.posts = response.data.documents;
            console.log(response);
        })
    },
    methods: {
        createComment() {
            // postは, 第1引数: URL, 第2引数: データ, 第3引数: header等詳細
            axios.post("/comments", { // cloud firestoreでの書き方
                    fields: {
                        name: {
                            stringValue:this.name,
                        },
                        commennt: {
                            stringValue:this.comment,
                        }
                    }
                },
            ) //postメソッドはPromiseオブジェクトを返してくる
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
            this.name = '';
            this.comment = '';
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
