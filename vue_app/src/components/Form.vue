<template>
    <div id="event-form">
        <h3>イベントフォーム</h3>
        <EventTitle v-model="eventData.title"></EventTitle>
        <EventMaxNumber v-model="eventData.maxNumber"></EventMaxNumber>
        <EventHost v-model="eventData.host"></EventHost>
        <EventWeather v-model="eventData.checked"></EventWeather>

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
import EventWeather from './form_material/EventWeather.vue'

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
        EventHost,
        EventWeather
    }
}
</script>

<style scoped>
    #event-form {
        background-color: rgba(100, 10, 185, 0.5);
        margin-bottom: 20vh;
    }
</style>
