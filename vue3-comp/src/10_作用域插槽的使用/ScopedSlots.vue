<template>
  <div class="comp2">
    <div>子组件</div>
    <slot :data="computedData"></slot>
  </div>
</template>
<script>
/**
 * Scoped Slots 可以看做是一种插槽, 其中可以插入数据.
 * 子组件可以将数据插入到 Scoped Slots 中, 并将数据暴露给父组件.
 * 父组件可以使用插槽中的数据,并进行处理
 *
 * 1. 该实例中, 子组件有两个数据属性 foo和bar, 以及一个计算属性 computedData, 用于将这两个属性组合成一个字符串.
 * 2. <slot> 标签中  :data="computedData" 表示将计算属性传递到 Scoped Slots 中
 */
export default {
  data() {
    return {
      // 子组件的数据
      foo: "Hello",
      bar: "World",
    };
  },
  computed: {
    computedData() {
      return `${this.foo} ${this.bar}`;
    },
  },
};
</script>
<style>
.comp2 {
  width: 50px;
  height: 50px;
  background-color: red;
  color: rgb(31, 110, 48);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
