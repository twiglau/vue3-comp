<template>
  <div>
    <my-slot-cpn></my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from "./MySlotCpn.vue";
export default {
  components: { MySlotCpn },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
