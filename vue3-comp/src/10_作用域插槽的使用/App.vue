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
  </div>
</template>

<script>
// import ChildCpn from "./ChildCpn.vue";
import ShowNames from "./ShowNames.vue";
export default {
  components: { ShowNames },
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
