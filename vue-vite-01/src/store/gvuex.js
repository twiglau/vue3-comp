import { inject, reactive } from "vue";

const STORE_KEY = "__store__";
const useStore = () => {
  return inject(STORE_KEY);
};
const createStore = (options) => {
  return new Store(options);
};

class Store {
  constructor(options) {
    this.$options = options;
    this._state = reactive({
      data: options.state(),
    });
    this._mutations = options.mutations;
  }
  get state() {
    return this._state.data;
  }
  commit = (type, payload) => {
    const entry = this._mutations[type];
    entry && entry(this.state, payload);
  };
  // 在项目入口文件 src/main.js 中使用 app.use(store) 注册.
  // 为了让 useStore能正常工作, 下面的代码中,我们需要给store新增一个 install 方法.
  // 这个方法会在 app.use() 函数内部执行.
  // 我们通过 app.provide 函数注册 store 给全局的组件使用.
  install(app) {
    app.provide(STORE_KEY, this);
  }
}

export { createStore, useStore };
