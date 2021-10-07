import axios from 'axios';

// axios.createでカスタムインスタンスを作れる
// これによりbaseURLなどをそれぞれ複数存在させる事ができる(vueでどれをimportするか決めるため)
const instance = axios.create({
    baseURL: "https://firestore.googleapis.com/v1/projects/vuejs-http-b5001/databases/(default)/documents"
});

export default instance;
