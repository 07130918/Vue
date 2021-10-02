<template>
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="circle" v-if="show"></div>
    </transition>
</template>

<script>
export default {
    props: ["show"],
    methods: {
        beforeEnter(el) { //現れる前
            el.style.scale = 'scale(0)'
        },
        enter(el, done) { //現れるとき
            let scale = 0;
            const interval = setInterval(() => {
                el.style.transform = `scale(${scale})`
                scale += 0.1
                if (scale > 1) {
                    clearInterval(interval);
                    done();
                }
            }, 10)
        },
        // afterEnter(el) { //現れた後
        // },
        // enterCancelled(el) { //現れるアニメーションがキャンセルされた時
        // },
        // beforeLeave(el) { //消える前
        // },
        leave(el, done) { //消えるとき
            let scale = 1;
            const interval = setInterval(() => {
                el.style.transform = `scale(${scale})`
                scale -= 0.1
                if (scale < 0) {
                    clearInterval(interval);
                    done();
                }
            }, 10)
        },
        // afterLeave(el) { //消えた後
        // },
        // leaveCancelled(el) { //消えるアニメーションがキャンセルされたとき
        // },
    }
}
</script>

<style scoped>
.circle {
    width: 200px;
    height: 200px;
    margin: auto;
    background-color: deeppink;
    border-radius: 100px;
}
</style>
