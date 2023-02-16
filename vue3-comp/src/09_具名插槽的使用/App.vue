<template>
  <div>
    <nav-bar :slotN="slotName">
      <template v-slot:left> <button>左边的按钮</button></template>
      <template v-slot:center><h2>标题</h2></template>
      <template v-slot:right><button>右边的按钮</button></template>
      <template v-slot:[slotName]><i>additional插槽</i></template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      slotName: "additional",
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
