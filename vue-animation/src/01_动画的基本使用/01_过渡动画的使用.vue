<template>
    <div>
        <transition name="why">
            <h2 v-if="isShow">Hello world</h2>
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
.why-enter-from,
.why-leave-to {
    opacity: 0;
}

.why-enter-to,
.why-leave-from {
    opacity: 1;
}

.why-enter-active,
.why-leave-active {
    transition: opacity 2s ease;
}
</style>