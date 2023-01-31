<template>
    <div>
        <input type="text" v-model="keyword">
        <transition-group tag="ul" name="why" :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave">
            <li v-for="(item, index) in showNames" :key="item" :data-index="index"> {{ item }}</li>
        </transition-group>
    </div>
</template>
<script>
// import _ from 'lodash';
import gsap from 'gsap';
export default {
    data() {
        return {
            names: ["lily","lau","laucy","kobe","james","local"],
            keyword: ""
        }
    },
    computed: {
        showNames() {
            return this.names.filter(item => item.indexOf(this.keyword) !== -1)
        }
    },
    watch: {},
    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter(el, done) {
            gsap.to(el, {
                opacity: 1,
                height: "1.5em",
                delay: el.dataset.index * 0.5,
                onComplete: done
            })
        },
        leave(el, done) {
            gsap.to(el, {
                opacity: 0,
                height: 0,
                delay: el.dataset.index * 0.5,
                onComplete: done
            })
        }
    }
}
</script>
<style scoped>
/* .why-enter-from,
.why-leave-to {
    opacity: 0;
}
.why-enter-active,
.why-leave-active {
    transition: opacity 1s ease;
} */
</style>