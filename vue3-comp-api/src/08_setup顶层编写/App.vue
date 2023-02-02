<template>
    <div class="main">
        <p>{{ counter }}</p>
        <button @click="increment">+1</button>
        <hello-world :message="`😭`"></hello-world>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue';
const counter = ref(0);
const increment = () => counter.value++;
</script>

<style scoped>
</style>