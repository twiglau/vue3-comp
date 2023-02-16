<template>
  <div class="child-cpn">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "child Title",
    };
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
