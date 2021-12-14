<template>
    <div>
        <h3>{{ title | upperCase }}</h3>
        <p>{{ subTitle | upperCase}}</p>
        <p>{{ subTitle | lowerCase | addExclamation}}</p>
        <p>{{ number }}</p>
        <button @click="number++">+1</button>
    </div>
</template>

<script>
import mixinObject from "@/mixinObject"

export default {
    mixins: [mixinObject]
}
</script>
