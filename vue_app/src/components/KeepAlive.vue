<template>
    <div>
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive>
        <button @click="currentComponent = 'Home'">Home</button>
        <button @click="currentComponent = 'About'">About</button>
        <p>componentタグとv-bind:isでコンポーネントを動的に切り替える</p>
        <h2>{{ title | upperCase }}</h2>
        <p>{{ subTitle | upperCase }}</p>
    </div>
</template>

<script>
import About from './About.vue'
import Home from './Home.vue'
export default {
    data() {
        return {
            currentComponent: 'Home',
            tmpData: "hello",
            title: "welcome to Tokyo",
            subTitle: "Tokyo is a great city"
        }
    },
    components: {
        About,
        Home
    }
}
</script>
