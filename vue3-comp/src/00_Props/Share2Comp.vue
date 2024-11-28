<template>
  <h1>共享状态 2 组件</h1>
  <button @click="addRandomToCart">添加</button>
  <div v-for="(value, key, index) in cart" :key="index">
    <p># {{ index }} {{ key }}:{{ value }}</p>
  </div>
</template>
<script setup>
import useCart from "./useCart";

const { cart, addToCart } = useCart();

const addRandomToCart = () => {
  const randomKey = Math.random().toString(16).substr(2, 8);
  const randomValue = Math.floor(Math.random() * 10);
  addToCart("comp2-" + randomKey, randomValue);
};
</script>
