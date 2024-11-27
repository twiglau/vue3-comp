<template>
  <!-- <ul>
    <li>{{ list[0] }}</li>
    <recursive-comp v-if="list.length > 1" :list="list.slice(1)" />
  </ul> -->
  <div>
    <slot v-bind:item="list[0]">{{ list[0] }}</slot>
    <recursive-comp v-if="list.length > 1" :list="list.slice(1)">
      <template v-slot="{ item }">
        <slot v-bind:item="item"></slot>
      </template>
    </recursive-comp>
  </div>
</template>
<script>
/**
 * 1. 递归组件, 需要给个 name - 组件名称. 然后在模版中直接使用该 name 就是调用自身
 * 2. 如果需要对 list 内容进行一些样式上的包装, 现在这种写法是满足不了的,因为,在外面用户拿不到当前 list[0] 的内容, 也没对应的坑位.
 * 3. 提供一个默认插槽的功能,同时把当前的 list[0] 的值暴露出去. 这个时候需要使用作用域插槽功能.
 *
 * 3.1 为了让 list[0] 在父级 插槽内容可用, 我们可以将 list[0] 作为 <slot> 元素 attribute 绑定上去.
 * 3.2 绑定在 <slot> 元素上的 attribute 被称为 插槽 prop. 现在在父级作用域中, 我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字.
 */
export default {
  name: "RecursiveComp",
  props: { list: Array },
};
</script>
