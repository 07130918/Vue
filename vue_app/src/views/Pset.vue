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

        <h4>v-onイベントの選択</h4>
        <label for="event-type-change">
            <input type="radio" id="event-type-change" value="change" v-model="eventType">
            @change
        </label>
        <label for="event-type-input">
            <input type="radio" id="event-type-input" value="input" v-model="eventType">
            @input
        </label>

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
                        <InputChild :nativeEventType="eventType" :value="tag.inputVal" @input-completion="reflectValue(tag, $event)"></InputChild>
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
            tags: [],
            eventType: 'input',
        }
    },
    components: {
        InputChild,
    },
    created: function() {
        this.tags.push({num: 1, inputVal: ''});
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
            // v-forで回しているtag.numはユニークである必要がある
            if (this.tags.length === 0) {
                this.tags.push({num: 1, inputVal: ''});
                return
            }

            this.tags.push({num: this.tags[this.tags.length - 1].num + 1, inputVal: ''});
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
