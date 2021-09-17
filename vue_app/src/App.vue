<template>
    <div>
        <!-- slotにLikeHeader内要素をぶちこめる 名前付きが好ましい -->
        <LikeHeader headerText="hello">
            <h5>私は名前指定がされていないデフォルトスロット、離れていてもh5とくっつけられてしまう</h5>
            <template #[dynamicSlotName]="slotProps">
                <h2>トータルの良いいね数</h2>
                <h4>{{ slotProps }}</h4>
                <!-- <h4>last name: {{ slotProps.user.lastName }}</h4> -->
            </template>
            <h5>デフォルトスロット</h5>
            <template v-slot:num>
                <h4>{{ number }}</h4>
            </template>
        </LikeHeader>
        <!-- このように親から子に渡す値を定義する -->
        <!-- 属性として渡してあげる -->
        <!-- カスタムイベント名はケバブケースで -->
        <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
        <LikeNumber v-bind:total-number="number"></LikeNumber>
        <button>Home</button>
        <button>About</button>
    </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'
    export default {
        data() {
            return{
                number: 10,
                dynamicSlotName: 'title'
            }
        },
        // ローカル登録
        components: {
            // LikeHeader: LikeHeader 短縮できる
            LikeHeader
        },
        methods: {
            // valには$emitの第2引数が来る
            incrementNumber(val) {
                this.number = val;
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
