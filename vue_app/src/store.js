import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 2,
        message: "",
    },
    getters: {
        doubleCount: state => state.count * 2,
        tripleCount: state => state.count * 3,
        message: state => state.message
    },
    mutations: {
        increment(state, number) {
            state.count += number
        },
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
        increment({ commit }, number) {
            commit("increment", number)
        },
        updateMessage({ commit }, newMessage) {
            commit("updateMessage", newMessage)
        }
    }
});
