<template>
    <div>
        <transition name="why" mode="in-out" :appear="true">
            <component :is="isShow? 'HomeM' : 'AboutM'"></component>
        </transition>
        <button @click="toggle">显示/隐藏</button>
    </div>
</template>
<script>
import HomeM from './pages/HomeM.vue';
import AboutM from './pages/AboutM.vue';
export default {
    components: {HomeM, AboutM},
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
.why-enter-from,
.why-leave-to {
    opacity: 0;
}
.why-enter-active,
.why-leave-active {
    transition: opacity 1s ease;
}
.why-enter-active {
    animation: bounce 1s ease;
}
.why-leave-active {
    animation: bounce 1s ease reverse;
}

@keyframes bounce {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>