<template>
    <div>
        <!-- slotにSlotPractice内要素をぶちこめる 名前付きが好ましい -->
        <SlotPractice headerText="hello">
            <h5>私は名前指定がされていないデフォルトスロット、離れていても他の"デフォルトスロット"とくっつけられてしまう</h5>
            <template #[dynamicSlotName]="slotProps">
                <h2>トータルの良いいね数</h2>
                <h4>{{ slotProps }}</h4>
                <h4>last name: {{ slotProps.user.lastName }}</h4>
            </template>
            <h5>デフォルトスロット</h5>
            <template v-slot:num>
                <h4>{{ number }}</h4>
            </template>
        </SlotPractice>
        <!-- このように親から子に渡す値を定義する, 属性として渡してあげる -->
        <!-- カスタムイベント名はケバブケースで -->
        <DataFlow :totalNumber="number" @my-click="incrementNumber" @my-popup="popup"></DataFlow>
        <DataFlow v-bind:total-number="number" v-on:my-click="incrementNumber" @my-popup="popup"></DataFlow>
        <KeepAlive></KeepAlive>
        <FilterPractice></FilterPractice>
        <Form></Form>
        <TransitionPractice></TransitionPractice>
    </div>
</template>

<script>
import SlotPractice from '../components/SlotPractice.vue'
import KeepAlive from '../components/KeepAlive.vue'
import FilterPractice from '../components/FilterPractice.vue'
import Form from '../components/Form.vue'
import TransitionPractice from '../components/TransitionPractice.vue'

    export default {
        data() {
            return{
                number: 10,
                dynamicSlotName: 'title',
                message: '',
            }
        },
        // ローカル登録
        components: {
            // SlotPractice: SlotPractice 短縮できる
            SlotPractice,
            KeepAlive,
            FilterPractice,
            Form,
            TransitionPractice,
        },
        methods: {
            // valには$emitの第2引数が来る
            incrementNumber(val) {
                this.number = val;
            },
            popup(value) {
                this.message = value;
                alert(this.message);
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid red;
    }
</style>
