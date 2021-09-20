<template>
    <div class="main">
        <button @click="myAnimation = 'slide'">Slide</button>
        <button @click="myAnimation = 'fade'">Fade</button>
        <p>{{myAnimation}}</p>
        <br>
        <button @click="add">追加</button>
        <ul style="width: 200px; margin: auto;">
            <transition-group :name="myAnimation">
                <li style="cursor: pointer;"
                    v-for="(number, index) in numbers" :key="number"
                    @click="remove(index)">
                    {{ number }}
                </li>
            </transition-group>
        </ul>
        <button @click="show = !show">切り替え</button>
        <br><br>
        <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div class="circle" v-if="show"></div>
        </transition>
        <br>
        <!-- <transition name="v"> <-デフォルト -->
        <transition
            enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__shakeX" appear>
            <h4 v-if="show">Hello</h4>
        </transition>
        <!-- animationとtransitionの効果時間が異なる時どちらに合わせるかをtypeで指定 -->
        <transition :name="myAnimation" appear>
            <p v-if="show">bye</p>
        </transition>
        <!-- mode="out-in"で要素が完全に出きってから切り替わる -->
        <transition :name="myAnimation" mode="out-in">
            <p v-if="show" key="bye">さよなら</p>
            <p v-if="!show" key="hello">こんにちは</p>
        </transition>

        <button @click="myComponent = 'ComponentA'">ComponentA</button>
        <button @click="myComponent = 'ComponentB'">ComponentB</button>
        <transition :name="myAnimation" mode="out-in">
            <component :is="myComponent"></component>
        </transition>
    </div>
</template>

<script>
import ComponentA from './transition_material/ComponentA.vue'
import ComponentB from './transition_material/ComponentB.vue'

export default {
    data() {
        return {
            show: true,
            myAnimation: "fade",
            myComponent: "ComponentA",
            numbers: [0, 1, 2],
            nextNumber: 3,
        };
    },
    components: {
        ComponentA,
        ComponentB
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.numbers.length)
        },
        add(){
            this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
            this.nextNumber += 1;
        },
        remove(index) {
            this.numbers.splice(index, 1);
        },
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
    transition: opacity .5s;
}
.slide-leave-active{
    animation: slide-in .5s reverse;
    transition: opacity .5s;
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
    margin: 3vh auto 20vh;
    text-align: center;
}
</style>
