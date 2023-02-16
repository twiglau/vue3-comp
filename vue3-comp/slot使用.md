# 插槽 slot

## 定义插槽 slot:

- 插槽的使用过程其实是 抽取共性, 预留不同;
- 我们会将 共同的元素, 内容依然在组件内 进行封装;
- 同时会将 不同的元素使用 slot 作为占位, 让外部决定到底显示什么样的元素;

## 如何使用 slot

- Vue 中将 <slot> 元素作为承载分发内容 的出口;
- 在封装组件中, 使用 特殊的元素<slot>就可以为封装组件开启一个插槽;
- 该插槽插入什么内容取决于父组件如何使用;

## 具名插槽

## 动态名插槽: 外部传值

- 目前我们使用的插槽名称都是固定的;
- 比如 v-slot:left, v-slot:center 等
- 我们可以通过 v-slot:[dynamicSlotName]方式动态绑定一个名称;

```
<div><slot :name="slotN"></slot></div>

<template v-slot:[slotName]><i>additional插槽</i></template>

import NavBar from "./NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      slotName: "additional",
    };
  },
```

## 具名插槽的缩写

```
<template #left>
<button>按钮</button>
</template>
```

## 渲染作用域

- 在 Vue 中有渲染作用域的概念
  > 父级模板里的所有内容都是 `在父级作用域中编译`的;
  > 子模板里的所有内容都是 `在子作用域中编译`的;
- 如何理解这句话?案例:
  > 在我们的案例中 ChildCpn 自然是可以让访问自己作用域中的 title 内容的;
  > 但是在 App 中, 是访问不了 ChildCpn 中的内容的, 因为它们是跨作用域的访问;

## 作用域插槽

```
<template v-for="(item, index) in names" :key="index">
    <slot :item="item" :index="index"></slot>
</template>
```

```
show-names :names="names">
    <template v-slot="slotProps">
    <button>{{ slotProps.item }} - {{ slotProps.index }}</button>
    </template>
</show-names>
```
