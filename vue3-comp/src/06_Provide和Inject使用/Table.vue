<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import { provide, ref, readonly } from "vue";
export default {
  setup() {
    const columns = ref([]);

    function register(column) {
      columns.value.push(column);
      console.log("columns:", columns.value);
    }

    provide("TableKey", {
      columns: readonly(columns),
      register,
    });
  },
};
</script>
