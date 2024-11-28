# 结构

```lua
<Dashborad>
|── <profile> -- async component
|── <FetchComponent> -- component with async setup()
```

## 如果没有<Suspense>

- 则它们每个都需要自己的加载, 报错和完成状态.
- 在最坏情况下, 我们可能会在页面上看到三个旋转的加载态, 在不同的时间显示出内容

## suspense

- 组件使我们能够在等待整个多层级组件树中各个异步依赖获取结果时, 在顶层展示出加载中火加载失败的状态.

### 可以等待的异步依赖有两种:

1. 带有异步 setup() 钩子的组件. 这也包含了使用 <script setup> 时有 顶层 await 表达式的组件.
2. 异步组件.

### 特点:

- <Suspense> 有两个插槽: #default 和 #fallback. 这两个插槽都只允许有一个直接的子节点.
- <Suspense> 组件有两种状态: pending 和 resolve.
- 当 <Suspense> 首次渲染时, 它会在内存显示其默认插槽的内容. 如果遇到任意异步依赖项, 它将转变为待定状态.在待定状态时, 将会显示备用内容.一旦 所有遇到的异步依赖项都得到解决, <Suspense> 便进入解决状态,并显示已解决的默认插槽内容.
- 目前 <Suspense> 本身不提供错误处理功能. 但是, 你可以使用 errorCaptured 选项 或 onErrorCaptured() 钩子在 <Suspense> 的父组件中捕获和处理异步错误.
