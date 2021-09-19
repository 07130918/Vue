<template>
    <div>
        <h2>{{ title | upperCase }}</h2>
        <p>{{ subTitle | upperCase }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tmpData: "hello",
            title: "welcome to Tokyo",
            subTitle: "Tokyo is a great city"
        }
    }
}
</script>
