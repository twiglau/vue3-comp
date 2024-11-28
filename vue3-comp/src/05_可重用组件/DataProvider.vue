<script setup>
/**
 * Data Provider 是一个直接组件, 它根据提供的类别属性从 API 中检索数据,
 * 并将其与加载指示器一起作为默认 slot 返回
 */
import { ref, defineProps } from "vue";

const props = defineProps({
  category: { type: String, required: true },
});

const data = ref([]);
const loaded = ref(false);

async function fetchProducts() {
  const res = await fetch(
    `https://dummyjson.com/products/category/${props.category}`
  ).then((res) => res.json());
  console.log("res:", res);
  data.value = res.products;
  loaded.value = true;
}

fetchProducts();
</script>
<template>
  <slot :data="data" :loading="!loaded" />
</template>
