import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// axiosのdefault設定はmain.jsで行う
axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-b5001/databases/(default)/documents";
// axios.defaults.headers.common['Authorization'] = 'tekitou';
// axios.defaults.headers.get['Accept'] = 'app/json';

// interceptorsでリクエストとthen(もしくはcatch)の間に処理を挟む
// サーバーに送った段階で処理を挟むのがrequest
// サーバーからのレスポンスが来たで処理を挟むのがresponse
const interceptorsRequest = axios.interceptors.request.use(
    config => {
        console.log('request');
        console.log(config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

const interceptorsResponse = axios.interceptors.response.use(
    // App.vueのcreatedのthenのresponseと同じもの
    response => {
        console.log('response');
        console.log(response);
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

// ejectでuseの処理を無効化
axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

new Vue({
  render: h => h(App),
}).$mount('#app')
