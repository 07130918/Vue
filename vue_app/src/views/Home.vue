<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">Usersのページへ行く</button>
        <p>doubleCount: {{ doubleCount }}</p>
        <p>tripleCount: {{ tripleCount }}</p>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    // computed: mapGetters({
    //     myComponentDoubleCount: "doubleCount",
    //     myComponentTripleCount: "tripleCount"
    // }),
    computed: {
        ...mapGetters("count", ["doubleCount", "tripleCount"]),
        // message() {
        //     return this.$store.getters.message;
        // },
        message: {
            get () {
                return this.$store.getters.message;
            },
            set(value) {
                this.$store.dispatch("updateMessage", value);
            }
        }
    },
    // computed: {
    //     doubleCount() {
    //         return this.$store.getters.doubleCount
    //     },
    //     tripleCount() {
    //         return this.$store.getters.tripleCount
    //     },
    // },
    methods: {
        toUsers() {
            this.$router.push('users/1');
        }
    }
}
</script>
