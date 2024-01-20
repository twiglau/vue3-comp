## TypeScript

- 需要再 script 标签加上一个配置 `lang="ts"`, 来标记当前组件使用了 TypeScript, 然后代码内部使用 defineComponent 定义组件即可

```js
<script lang="ts">
  import {defineComponent} from 'vue'; export default defineComponent(
  {
    // 已启用类型推断
  })
</script>
```

## ESlint

1. npm i eslint -D
2. npx eslint --init
3. npx eslint src

## husky

```
npm install -D husky # 安装husky
npx husky install    # 初始化husky
# 新增commit msg钩子
npx husky add .husky/commit-msg "node scripts/verifyCommit.js"

npx husky add .husky/pre-commit "npm run lint"
```

## Jest

1. `vue-jest` 和 `@vue/test-utils` 是测试 Vue 组件必备的库, 然后安装 babel 相关的库, 最后安装 Jest 适配 TypeScript 的库

```bash
npm install -D jest@26 vue-jest@next @vue/test-utils@next
npm install -D babel-jest@26 @babel/core @babel/preset-env
npm install -D ts-jest@26 @babel/preset-typescript @types/jest
```

2. 安装完毕后, 在根目录下新建 `babel.config.js`. 下面的配置目的是让 babel 解析到 Node 和 TypeScript 环境下.

```js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
```

3. 我们还需要新建 `jest.config.js`, 用来配置 jest 的测试行为. 不同格式的文件需要使用不同命令来配置, 对于 .vue 文件我们使用 `vue-jest`, 对于 .js 或者 .jsx 结果的文件, 我们就要使用 `babel-jest `, 而对于 .ts 结尾的文件我们使用 `ts-jest`, 然后匹配文件名是 `xx.spect.js`. 这里请注意, Jest 只会执行 `.spec.js` 结尾的文件.

```js
module.exports = {
  transform: {
    // .vue文件用 vue-jest 处理
    "^.+\\.vue$": "vue-jest",
    // .js 或者 .jsx 用 babel-jest 处理
    "^.+\\.jsx?$": "babel-jest",
    // .ts 文件用 ts-jest 处理
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(spec).[jt]s?(x)"],
};
```

4. 然后配置 `package.json`, 在 scripts 配置下面新增 test 命令, 即可启动 Jest.

```json
"scripts": {
  "dev": "vite",
  "build": "vue-tsc --noEmit && vite build",
  "serve": "vite perview",
  "lint": "eslint --fix --ext .js,vue src/",
  "test": "jest"
}
```

## Form 表单设计

1. 职责划分

- el-form 组件负责最外层的表单容器 : model 提供数据绑定, rules 提供输入校验规则,规范用户的输入内容;
- el-form-item 组件负责每个输入项的 label 和 校验管理: 作为输入项的容器,对输入进行校验,显示错误信息;
- 内部的 el-input 或者 el-switch 负责具体的输入组件
