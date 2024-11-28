<script setup>
import { ref } from "vue";

const data = ref([]);
const isLoading = ref(true);

await new Promise((r) => setTimeout(r, 10000));

try {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  data.value = await res.json();
} catch (error) {
  console.error(error);
} finally {
  isLoading.value = false;
}
</script>
<template>
  <div class="flex flex-col gap-4 border rounded-md p-4 bg-white">
    <span v-if="isLoading">Loading data...</span>
    <span v-else>Loaded data via async/await fetch</span>
  </div>
</template>
