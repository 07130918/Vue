<template>
    <div id="event-form">
        <h3>イベントフォーム</h3>
        <label for="title">タイトル</label>
        <input type="text" id="title" v-model.lazy="eventData.title">
        <h4>タイトル: {{ eventData.title }}</h4>
        <label for="maxNumber">最大人数</label>
        <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
        <h4>最大人数: {{ eventData.maxNumber }}</h4>
        <label for="host">主催者</label>
        <input type="text" id="host" v-model.trim="eventData.host">
        <h4>主催者: {{ eventData.host }}</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            eventData: {
                title: '',
                maxNumber: '',
                host: '',
            }
        }
    }
}
</script>

<style scoped>
    #event-form {
        background-color: rgba(100, 10, 185, 0.5);
    }
</style>
