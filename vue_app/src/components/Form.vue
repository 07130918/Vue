<template>
    <div id="event-form">
        <h3>イベントフォーム</h3>
        <EventTitle v-model="eventData.title"></EventTitle>
        <EventMaxNumber v-model="eventData.maxNumber"></EventMaxNumber>
        <EventHost v-model="eventData.host"></EventHost>


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
import EventTitle from './form_material/EventTitle.vue'
import EventMaxNumber from './form_material/EventMaxNumber.vue'
import EventHost from './form_material/EventHost.vue'

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
        EventTitle,
        EventMaxNumber,
        EventHost
    }
}
</script>

<style scoped>
    #event-form {
        background-color: rgba(100, 10, 185, 0.5);
        margin-bottom: 20vh;
    }
</style>
