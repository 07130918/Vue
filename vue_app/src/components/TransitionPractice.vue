<template>
    <div class="main">
        <!-- <transition name="v"> <-デフォルト -->
        <transition name="fade">
            <h4 v-if="show">Hello</h4>
        </transition>
        <button @click="show = !show">切り替え</button>
        <!-- animationとtransitionの効果時間が異なる時どちらに合わせるかをtypeで指定 -->
        <transition name="slide" type="animation" appear>
            <p v-if="show">bye</p>
        </transition>
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
    .slide-enter, .slide-leave-to {
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in .5s;
        transition: opacity 1s;
    }
    .slide-leave-active{
        animation: slide-in .5s reverse;
        transition: opacity 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateX(100px);
        }
        to {
            transform: translateX(0);
        }
    }
    .main {
        width: 70%;
        margin: 3vh auto;
        text-align: center;
    }
</style>
