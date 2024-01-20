<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="add">加一</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(1);
const color = ref("red");
const add = () => {
  count.value++;
  color.value = Math.random() > 0.5 ? "blue" : "red";
};
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>
