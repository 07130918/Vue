import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
// Vue.directive("border", {
    // bind(el, binding, vnode) {
        //ディレクティブが初めて対象の要素に紐付いた時
    // },
    // inserted(el, binding, vnode) {
        //親Nodeに挿入された時
    // },
    // update(el, binding, vnode, oldVnode) {
        //コンポーネントが更新される度。子コンポーネントが更新される前
    // },
    // componentUpdated(el, binding, vnode, oldVnode) {
        //コンポーネントが更新される度。子コンポーネントが更新された後
    // },
    // unbind(el, binding, vnode) {
        //ディレクティブが紐付いている要素から取り除かれた時
    // }
// });

// このように書くとbindとupdateに適用することになる
Vue.directive("border", function (el, binding) {
    // el.style.border = "solid black 2px";
    el.style.borderWidth = binding.value.width;
    el.style.borderColor = binding.value.color;
    el.style.borderStyle = binding.arg;

    if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem"
    }
    if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgb(0, 0, 0)"
    }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
