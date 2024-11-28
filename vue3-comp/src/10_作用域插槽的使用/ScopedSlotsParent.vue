<template>
  <div class="comp1">
    <div class="comp1-title">父组件</div>
    <scoped-slots>
      <template v-slot="{ data }">
        {{ data }}
      </template>
    </scoped-slots>
  </div>
</template>
<script>
/**
 * 在父组件中, 我们引入子组件. 并使用 <template> 标签定义Scoped Slot.
 * v-slot="{data}" 表示将子组件中传递的数据存储在 data 变量中.
 */
import ScopedSlots from "./ScopedSlots.vue";
export default {
  components: { ScopedSlots },
};
</script>
<style>
.comp1 {
  width: 100px;
  height: 100px;
  font-size: 15px;
  color: #fff;
  background-color: orange;
}
</style>
