<template>
    <div>
        <button @click="add">追加</button>
            <ul style="width: 200px; margin: auto;">
            <transition-group :name="animationType">
                <li style="cursor: pointer;"
                    v-for="(number, index) in numbers" :key="number"
                    @click="remove(index)">
                    {{ number }}
                </li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
export default {
    props: ["animationType"],
    data() {
        return {
            numbers: [0, 1, 2],
            nextNumber: 3,
        }
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
    }
}
</script>
