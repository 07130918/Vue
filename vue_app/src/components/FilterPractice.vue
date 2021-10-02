<template>
    <div>
        <h2>{{ head }}</h2>
        <h3>{{ title | upperCase }}</h3>
        <p>{{ subTitle | upperCase}}</p>
        <p>{{ subTitle | lowerCase | addExclamation}}</p>
        <p>{{ number }}</p>
        <button @click="number++">+1</button>
        <MixinPractice></MixinPractice>
    </div>
</template>

<script>
import MixinPractice from './MixinPractice.vue'
import { tokyoNumber } from "@/tokyoNumber"

export default {
    mixins: [tokyoNumber],
    data() {
        return {
            head: "Mixin↓"
        }
    },
    components: {
        MixinPractice
    }
}
</script>
