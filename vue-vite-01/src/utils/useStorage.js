import { ref, watchEffect } from "vue";

export function useStorage(name, value = []) {
  const data = ref(JSON.parse(localStorage.getItem(name) || value));
  // watchEffect 这个函数让我们在数据变化之后可以执行指定的函数
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}
