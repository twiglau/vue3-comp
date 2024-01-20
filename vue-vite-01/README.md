# 初始化项目

> `npm create vite@latest`

# 响应式

1.  Proxy

- 是针对对象来监听, 而不是针对某个具体属性,所以不仅可以代理那些定义时不存在的属性, 还可以代理更丰富的数据结构, 比如 Map, Set 等. 并且我们也能通过 deleteProperty 实现对删除操作的代理.

2. Vue3 的 reactive 函数可以把一个对象变成响应式数据,而 reactive 就是基于 Proxy 实现的. 我们还可以通过 watchEffect, 在 obj.count 修改之后,执行数据的打印.

```js
import { reactive, computed, watchEffect } from "vue";
let obj = reactive({ count: 1 });
let double = computed(() => obj.count * 2);
obj.count = 2;

watchEffect(() => {
  console.log("数据被修改了", obj.count, double.value);
});
```

3. Vue3 ref - 利用对象的 get 和 set 函数来进行监听, 这种响应式的实现方式,只能拦截某一个属性的修改

```js
const getDouble = (n) => n * 2;
let _value = 1;
let double = getDouble(_value);

let count = {
  get value() {
    return _value;
  },
  set value(val) {
    _value = val;
    double = getDouble(_value);
  },
};

console.log(count.value, double);
count.value = 2;
console.log(count.value, double);
```

# JSX 使用

- JSX 本质就是下面代码的语法糖, h 函数内部也是 createVnode 来返回虚拟 DOM.

```js
const element = createVnode("h1", { id: "app" }, "hello Geek");
```

- 从 `JSX` 到 `createVNode` 函数的转化过程中, 我们需要安装一个 `JSX` 插件.

```bash
npm install @vitejs/plugin-vue-jsx -D
```

- 插件安装完成后, 我们进入根目录下, 打开 `vite.config.js` 文件去修改 vite 配置. 在 vite.config.js 文件中, 我们加入
- 下面的代码, 这样, 在加载 `JSX` 插件后, 现在的页面中就可以支持 JSX 插件了.

```js
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
});
```

- 相比于我们自己去写 h 函数, 在 `template` 解析的结果中, 有以下几个性能优化的方面.

1. 静态的标签和属性会放在 `_hoisted` 变量中, 并且放在 render 函数之外. 这样, 重复执行 render 的时候, 代理里的 h1 这个纯静态的标签,就
   不需要进行额外地计算, 并且静态标签在虚拟 DOM 计算的时候, 会直接越过 Diff 过程.
2. @click 函数增加了一个 cache 缓存层, 这样实现出来的效果也是和静态提升类似, 尽可能高效地利用缓存.
3. 在下面代码中的属性中, 那些带冒号的属性是动态属性, 因而存在使用一个数字去标记标签的动态情况.
   > 比如在 p 标签上, 使用 8 这个数字标记当前标签时, 只有 props 是动态的. 而在虚拟 DOM 计算 Diff 过程中, 可以忽略掉 class 和 文本的计算.
   > 这也是 Vue3 的 虚拟 DOM 能够比 Vue2 块的一个重要原因.

```js
<div id="app">
  <div @click="()=>console.log(xx)" name="hello">{{name}}</div>
  <h1>技术摸鱼</h1>
  <p :id="name" class="app">极客时间</p>
</div>
```

```js
import {
  toDisplayString as _toDisplayString,
  createElementVNode as _createElementVNode,
  openBlock as _openBlock,
  createElementBlock as _createElementBlock,
} from "vue";
const _hoisted_1 = { id: "app" };
const _hoisted_2 = /*#__PURE__*/ _createElementVNode(
  "h1",
  null,
  "技术摸鱼",
  -1 /* HOISTED */
);
const _hoisted_3 = ["id"];
export function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    _openBlock(),
    _createElementBlock("div", _hoisted_1, [
      _createElementVNode(
        "div",
        {
          onClick: _cache[0] || (_cache[0] = () => _ctx.console.log(_ctx.xx)),
          name: "hello",
        },
        _toDisplayString(_ctx.name),
        1 /* TEXT */
      ),
      _hoisted_2,
      _createElementVNode(
        "p",
        {
          id: _ctx.name,
          class: "app",
        },
        "极客时间",
        8 /* PROPS */,
        _hoisted_3
      ),
    ])
  );
}
// Check the console for the AST
```
