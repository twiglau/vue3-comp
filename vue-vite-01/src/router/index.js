import { createRouter, createWebHashHistory } from "vue-router";
// import { createRouter, createWebHashHistory } from "./grouter";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
