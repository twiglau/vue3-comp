<template>
  <div>Widget 元数据: {{ $options.columns }}</div>
</template>
<script>
/**
 * 为组件添加元数据, 可以给其他组件提供更多信息
 */
export default {
  name: "Widget",
  columns: 3,
  data() {
    return {};
  },
  created() {
    console.log(`Using ${this.$options.columns} columns`);
  },
};
</script>
