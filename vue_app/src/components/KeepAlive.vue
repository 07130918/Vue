<template>
    <div>
        <keep-alive>
            <component :is="currentComponent"></component>
        </keep-alive>
        <button @click="currentComponent = 'Home'">Home</button>
        <button @click="currentComponent = 'About'">About</button>
        <p>componentタグとv-bind:isでコンポーネントを動的に切り替える</p>
    </div>
</template>

<script>
import About from './About.vue'
import Home from './Home.vue'
export default {
    data() {
        return {
            currentComponent: 'Home'
        }
    },
    components: {
        About,
        Home
    }
}
</script>
