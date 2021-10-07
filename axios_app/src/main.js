import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// axiosのdefault設定はmain.jsで行う
axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-b5001/databases/(default)/documents";
// axios.defaults.headers.common['Authorization'] = 'tekitou';
// axios.defaults.headers.get['Accept'] = 'app/json';

new Vue({
  render: h => h(App),
}).$mount('#app')
