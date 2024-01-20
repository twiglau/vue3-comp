import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElContainer from "./components/container";
import ELButton from "./components/button";

const app = createApp(App);
app.config.globalProperties.$AILEMENTE = {
  size: "large",
};
app.use(ElContainer).use(ELButton).mount("#app");
