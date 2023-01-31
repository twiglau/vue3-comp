<template>
    <div>
        <button @click="toggle">显示/隐藏</button>
        <transition
        @enter="enter"
        @leave="leave"
        :css="false"
        >
            <h2 v-if="isShow">Hello World</h2>
        </transition>
    </div>
</template>
<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            isShow: false,
            distance: 2
        }
    },
    methods: {
        toggle() {
            this.isShow = !this.isShow;
        },
        beforeEnter() {},
        enter(el, done) {
            gsap.from(el, {
                scale: 0,
                x: 200,
                onComplete: done
            })
        },
        afterEnter() {},
        beforeLeave() {},
        leave(el, done) {
            gsap.to(el, {
                scale: 0,
                x: 200,
                onComplete: done
            })
        },
        afterLeave() {}
    }
}
</script>
<style scoped>
.title {
    display: inline-block;
}
</style>