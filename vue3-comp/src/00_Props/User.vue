<template>
  <div>
    <p @click="handleUserName">姓名: {{ name }}</p>
    <p>职业: {{ job }}</p>
    <p @click="handleUserAge">年龄: {{ age }}</p>
    <p>count: {{ count }}</p>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  name: String,
  job: String,
  age: [String, Number],
});

const emit = defineEmits(["updateUserName", "updateUserAge"]);

const handleUserName = () => {
  emit("updateUserName", props.name);
};
const handleUserAge = () => {
  emit("updateUserAge", props.age);
};

const count = ref(0);
</script>
