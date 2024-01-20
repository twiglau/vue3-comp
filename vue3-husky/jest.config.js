module.exports = {
  transform: {
    //  用 `vue-jest` 处理 `*.vue` 文件
    "^.+\\.vue$": "vue-jest", //vuejest 处理.vue
    "^.+\\.jsx?$": "babel-jest", // babel jest处理js or jsx
    "^.+\\.tsx?$": "ts-jest", // ts-jest 处理.ts .tsx
  },
  testMatch: ["**/?(*.)+(spec).[jt]s?(x)"],
  // 需要收集代码测试覆盖率
  // 执行 npm run test 后, 项目的根目录下就会出现一个 coverage 目录
  // 打开 index.html 后, 就可以在浏览器中看到测试覆盖率的报告
  collectCoverage: true,
  coverageReporters: ["json", "html"],
};
