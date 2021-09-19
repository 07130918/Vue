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
// このように書くとnindとupdateに適用することになる
Vue.directive("border", function (el, binding) {
    el.style.border = "solid black 2px"
});

new Vue({
  render: h => h(App),
}).$mount('#app')
