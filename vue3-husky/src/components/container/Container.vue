<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>
<!-- 开发组件库的时候, 我们要确保每个组件都有自己的名字, script setup
中没法返回组件的名字. 所以我们需要一个单独的标签,使用 options 的语法设置组件的
name 属性. -->
<script lang="ts">
export default {
  name: "ElContainer",
};
</script>
<script lang="ts" setup>
// VNode 是一个类型声明,需要在ts环境下才能使用
import { useSlots, computed, VNode, Component } from "vue";

interface Props {
  direction?: string;
}

const props = defineProps<Props>();
const slots = useSlots();

const isVertical = computed(() => {
  if (slots && slots.default) {
    const is_ver = slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name;
      return tag === "ElHeader" || tag === "ElFooter";
    });
    console.log("is_ver:", is_ver);
    return is_ver;
  } else {
    return props.direction === "vertical";
  }
});
</script>

<style lang="scss">
@import "../styles/mixin";
@include b(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  @include when(vertical) {
    flex-direction: column;
  }
}

/*
.el-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
.el-container.is-vertical {
  flex-direction: column;
}
*/
</style>
