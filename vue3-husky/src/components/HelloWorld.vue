<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ msg1 }}</h2>
    <h3>{{ course.name }}</h3>
  </div>
</template>
<script lang="ts" setup>
interface 课程 {
  name: string;
  price: number;
}
import { ref, reactive, computed } from "vue";

const msg = ref(""); // 根据输入参数推到字符串类型
const msg1 = ref<string>(""); // 可以通过泛型显式约束

const obj = reactive({});
const course = reactive<课程>({ name: "Vue3", price: 129 });

const msg2 = computed(() => ""); // 默认参数推导
const course2 = computed<课程>(() => {
  return { name: "数学", price: 400 };
});
</script>

<style scoped></style>
