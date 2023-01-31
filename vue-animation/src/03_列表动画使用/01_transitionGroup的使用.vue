<template>
    <div>
        <button @click="addNum">添加数字</button>
        <button @click="removeNum">删除数字</button>
        <button @click="shuffleNum">数字洗牌</button>
        <transition-group name="why">
            <span v-for="item in numbers" :key="item">{{ item }}</span>
        </transition-group>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    data() {
        return {
            numbers: [0,1,2,3,4,5,6,7,8,9],
            counter: 10
        }
    },
    computed: {},
    watch: {},
    methods: {
        addNum() {
            this.numbers.splice(this.randomIndex(), 0, this.counter++)
        },
        removeNum() {
            this.numbers.splice(this.randomIndex(), 1);
        },
        shuffleNum() {
            this.numbers = _.shuffle(this.numbers);
        },
        randomIndex() {
            return Math.floor(Math.random() * this.numbers.length)
        }
    }
}
</script>
<style scoped>
span {
    margin: 0px 10px;
    display: inline-block;
}
.why-enter-from,
.why-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.why-enter-active,
.why-leave-active {
    transition: all 1s ease;
}
.why-leave-active {
    position:absolute;
}
.why-move {
    transition: transform 1s ease;
}
</style>