<template>
  <div class="wrapper">
    <p>包装组件</p>
    <slots-comp v-bind="$attrs">
      <!-- 暴露第三方组件的所有插槽 -->
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps || {}"></slot>
      </template>
    </slots-comp>
  </div>
</template>
<script>
/**
 * 1. 插入第三方组件, 并通过 $attrs 组件实例对象绑定属性.
 * 2. 使用 $slots 组件实例对象循环浏览所有可用的槽, 并通过 #[name]="slotProps" 将槽的 props 与槽的名称绑定.
 * 3. 在 slot 中, 我们使用 v-bind 来绑定所有的第三方 slot 属性 (slotProps), 以传递给父方.
 */
import slotsComp from "./slotsComp.vue";
export default {
  components: {
    slotsComp,
  },
};
</script>
