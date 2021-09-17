<template>
    <div id="event-form">
        <h3>イベントフォーム</h3>
        <EventTitle v-model="eventData.title"></EventTitle>

        <label for="maxNumber">最大人数</label>
        <input type="number" id="maxNumber" v-model.number="eventData.maxNumber">
        <h4>最大人数: {{ eventData.maxNumber }}</h4>

        <label for="host">主催者</label>
        <input type="text" id="host" v-model.trim="eventData.host">
        <h4>主催者: {{ eventData.host }}</h4>

        <label for="checkbox">雨天参加</label>
        <input type="checkbox" id="checkbox" v-model="eventData.checked">
        <label for="checkbox">{{ eventData.checked }}</label>

        <div>
            <select v-model="eventData.selectedLocation">
                <option disabled value="">Please select one location</option>
                <option v-for="location in eventData.locations" :key="location">{{ location }}</option>
            </select>
            <span>Selected: {{ eventData.selectedLocation }}</span>
        </div>
    </div>
</template>

<script>
import EventTitle from './EventTitle.vue'
export default {
    data() {
        return {
            eventData: {
                title: '',
                maxNumber: '',
                host: '',
                checked: false,
                locations: ["北海道", "東北", "関東", "沖縄"],
                selectedLocation: '',
            }
        }
    },
    components: {
        EventTitle
    }
}
</script>

<style scoped>
    #event-form {
        background-color: rgba(100, 10, 185, 0.5);
        margin-bottom: 20vh;
    }
</style>
