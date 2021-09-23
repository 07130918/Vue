import Vue from 'vue';
import Vuex from 'vuex';
import count from './modules/count';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        message: "",
    },
    getters: {
        message: state => state.message
    },
    mutations: {
        updateMessage(state, newMessage) {
            state.message = newMessage;
        }
    },
    // dispatch, actionを使った書き方
    // actions: {
    //     increment(context, number) {
    //         context.commit("increment", number)
    //     }
    // }
    actions: {
        updateMessage({ commit }, newMessage) {
            commit("updateMessage", newMessage)
        }
    },
    modules: {
        count
    }
});
