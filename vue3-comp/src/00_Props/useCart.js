import { ref } from "vue";

/**
 * 为了在每个 useCart 实例之间保持相同的状态, 我们需要在函数之外提升它的状态,所以只被创建一次. - 单例模式
 */

const cart = ref({});

const useCart = () => {
  //   const cart = ref({});

  const addToCart = (key, value) => {
    cart.value[key] = value;
  };

  return {
    cart,
    addToCart,
  };
};

export default useCart;
