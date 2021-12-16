<!-- 子コンポーネントは全てpsets配下にある-->
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
        <input type="text" v-model="message" placeholder="普通のv-model">
        <h3>{{ message }}</h3>
        <button type="submit" @click="addTag">Tag追加</button>
        <button type="submit" @click="tags.shift()">先頭Tag削除</button>
        <table>
            <thead>
                <tr>
                    <th>Tag Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody v-for="tag in tags" :key="tag.num">
                <tr>
                    <td>{{tag.num}}. </td>
                    <td>
                        <InputChild :value="tag.inputVal" @input-completion="reflectValue(tag, $event)"></InputChild>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import InputChild from '../components/psets/Pset2InputChild.vue'

export default {
    data() {
        return {
            message: '',
            xPosition: null,
            yPosition: null,
            ensureMsg: 'ページをリロードしますか?',
            tags: [{num: 1, inputVal: ''}],
        }
    },
    components: {
        InputChild,
    },
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
        addTag: function() {
            console.log("addTag() was called", this.tags);
            // 削除されて再度追加するとバグる
            // インプットタイプ分けしたい
            this.tags.push({num: this.tags.length + 1, inputVal: ''});
        },
        reflectValue: function(tag, event) {
            console.log("reflectValue() was called", tag);
            tag.inputVal = event;
        },
    },
}
</script>

<style scoped>
#mouse-h3 {
    background-color: #0085C9;
}
</style>
