<template>
    <div>
        <transition name="why" 
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__flipInY"
        >
            <h2 v-if="isShow">Hello World</h2>
        </transition>
        <button @click="toggle">显示/隐藏</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        toggle() {
            this.isShow = !this.isShow;
        }
    }
}
</script>
<style scoped>
.title {
    display: inline-block;
}
.animate__flipInY {
    animation-direction: reverse;
}
/* .why-enter-active {
    animation: bounceInUp 0.5s ease-in;
}
.why-leave-active {
    animation: bounceInUp 0.5s ease-in reverse;
} */
</style>