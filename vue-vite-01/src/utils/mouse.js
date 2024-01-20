import { onMounted, onUnmounted, ref } from "vue";

export function useMouse() {
  // ref 和 computed 等功能都可以从Vue中全局引入
  // 所以我们就可以把组件进行任意颗粒度的拆分和组合.
  const x = ref(0);
  const y = ref(0);
  const update = (e) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  onMounted(() => {
    window.addEventListener("mousemove", update);
  });
  onUnmounted(() => {
    window.addEventListener("mousemove", update);
  });

  return { x, y };
}
