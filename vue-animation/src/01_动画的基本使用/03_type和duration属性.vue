<template>
    <div>
        <transition name="why" type="transition" :duration="1000">
            <h2 class="title" v-if="isShow">Hello world</h2>
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