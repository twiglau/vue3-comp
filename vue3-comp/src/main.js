import { createApp } from "vue";
import App from "./06_Provide和Inject使用/App.vue";

const app = createApp(App);

/**
 * 添加一个自定义的错误处理程序, 对记录错误很有用
 * 更优雅的处理错误信息
 */
app.config.errorHandler = (err, instance, info) => {
  console.error(err, instance, info);
  alert(err);
};

// 自定义警告处理(只在开发环境有用)
app.config.warnHandler = (warn) => {
  console.warn(`[CUSTOM WARNING] ${warn}`);
};

app.mount("#app");
