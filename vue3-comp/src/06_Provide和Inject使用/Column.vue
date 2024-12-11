<template>
  <div>
    <div>{{ desc }}</div>
    <div>{{ label }}</div>
    <div>{{ sortable }}</div>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  props: ["desc", "label", "sortable"],
  setup(props) {
    const table = inject("TableKey");
    table?.register(props);
  },
};
</script>
