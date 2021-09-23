<template>
    <div>
        <h2>UsersHeader</h2>
        <p>store.jsのstate.count up!</p>
        <button @click=increment(1)>+1</button>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
// import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapMutations(["increment"]),
        // dispatch, actionを使った書き方
        // ...mapActions(["increment"])
        // increment() {
        //     this.$store.dispatch("increment", 2)
        // },

        // increment() {
        //     // commit()でmutationsにある関数を実行
        //     this.$store.commit('increment', 1);
        // }
    }
};
</script>
