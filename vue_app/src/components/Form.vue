<template>
    <div id="event-form">
        <h3>イベントフォーム</h3>
        <EventTitle v-model="eventData.title"></EventTitle>
        <!-- v-modelを分解して考えると以下のことをやっている -->
        <!-- <EventTitle :value="eventData.title" @input="eventData.title = $event.target.value"></EventTitle> -->
        <EventMaxNumber v-model="eventData.maxNumber"></EventMaxNumber>
        <EventHost v-model="eventData.host"></EventHost>
        <EventWeather v-model="eventData.checked"></EventWeather>
        <EventLocation v-model="eventData.selectedLocation" :options="eventData.locations"></EventLocation>
    </div>
</template>

<script>
import EventTitle from './form_material/EventTitle.vue'
import EventMaxNumber from './form_material/EventMaxNumber.vue'
import EventHost from './form_material/EventHost.vue'
import EventWeather from './form_material/EventWeather.vue'
import EventLocation from './form_material/EventLocation.vue'

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
        EventWeather,
        EventLocation
    }
}
</script>

<style scoped>
    #event-form {
        background-color: rgba(100, 10, 185, 0.5);
        margin-bottom: 5vh;
    }
</style>
