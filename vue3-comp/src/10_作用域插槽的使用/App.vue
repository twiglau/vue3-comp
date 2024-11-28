<template>
  <div>
    <!-- 编译作用域 -->
    <!-- <child-cpn>
      <button>App中的Btn</button>
    </child-cpn> -->
    <show-names :names="names">
      <template v-slot="slotProps">
        <button>{{ slotProps.item }} - {{ slotProps.index }}</button>
      </template>
    </show-names>
    <!-- 如果是默认插槽的话,也可以这样: 独占默认插槽 -->
    <show-names :names="names" v-slot="slotProps">
      <button>{{ slotProps.item }} - {{ slotProps.index }}</button>
    </show-names>

    <hr />
    <h5>1. scoped slots 基本使用</h5>
    <scoped-slots-parent />
  </div>
</template>

<script>
// import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";
import ScopedSlotsParent from "./ScopedSlotsParent.vue";
export default {
  components: { ShowNames, ScopedSlotsParent },
  data() {
    return {
      names: ["why", "jojo", "curry"],
    };
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
