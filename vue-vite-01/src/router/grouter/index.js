import { ref, inject } from "vue";
import RouterLink from "./RouterLink.vue";
import RouterView from "./RouterView.vue";
const ROUTER_KEY = "__router__";

const createRouter = (options) => {
  return new Router(options);
};
const useRouter = () => {
  return inject(ROUTER_KEY);
};

const createWebHashHistory = () => {
  const bindEvents = (fn) => {
    window.addEventListener("hashchange", fn);
  };
  return {
    bindEvents,
    url: window.location.hash.slice(1) || "/",
  };
};

class Router {
  constructor(options) {
    this.history = options.history;
    this.routes = options.routes;
    this.current = ref(this.history.url);

    this.history.bindEvents(() => {
      this.current.value = window.location.hash.slice(1);
    });
  }

  install(app) {
    app.provide(ROUTER_KEY, this);
    app.component("router-link", RouterLink);
    app.component("router-view", RouterView);
  }
}

export { createRouter, createWebHashHistory, useRouter };
