<template>
    <div class="main">
        <!-- <transition name="v"> <-デフォルト -->
        <transition name="fade">
            <h4 v-if="show">Hello</h4>
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
    .fade-enter { /*現れるときの最初の状態*/
        opacity: 0;
    }
    .fade-enter-active { /*現れるときのトランジションの状態*/
        transition: opacity .3s;
    }
    .fade-enter-to { /*現れるときの最後の状態*/
        opacity: 1;
    }
    .fade-leave { /*消えるときの最初の状態*/
        opacity: 1;
    }
    .fade-leave-active { /*消えるときのトランジションの状態*/
        transition: opacity .3s;
    }
    .fade-leave-to { /*消えるときの最後の状態*/
        opacity: 0;
    }
    .main {
        width: 70%;
        margin: 3vh auto;
        text-align: center;
    }
</style>
