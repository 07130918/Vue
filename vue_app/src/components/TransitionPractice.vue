<template>
    <div class="main">
        <transition name="fade">
            <p v-if="show">Hello</p>
        </transition>
        <button @click="show = !show">切り替え</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    }
}
</script>

<style scoped>
    .fade-enter{
        
    }
    .fade-enter-active{
        
    }
    .fade-to{
        
    }
    .fade-leave{
        
    }
    .fade-leave-active{
        
    }
    .fade-leave-to{
        
    }
    .main {
        width: 70%;
        margin: 3vh auto;
        text-align: center;
    }
</style>
