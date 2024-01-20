<template>
  <h1>Home</h1>
  <h1>基础使用:</h1>
  <Todolist />
  <h1>绑定颜色:</h1>
  <Colorchange />
  <h1>自定义hook:</h1>
  <div>
    <button @click="loading">change favicon</button>
  </div>
  <h1>自定义组件:</h1>
  <Rate :value="3" />
  <Rate :value="3" theme="red" />
  <Ratehigh v-model="score" :value="score" @update-rate="update" />
  <Ratemodel v-model="score1">课程评分</Ratemodel>
  <h1>Vuex使用:</h1>
  <Vuexcount />
</template>

<script setup>
import { ref } from "vue";
// 引入 Todolist 组件, <script setup> 会自动把组件注册到当前组件中.
import Todolist from "../components/Todolist.vue";
import Colorchange from "../components/Colorchange.vue";
import Rate from "../components/Rate.vue";
import Ratehigh from "../components/Ratehigh.vue";
import Ratemodel from "../components/Ratemodel.vue";
import Vuexcount from "../components/Vuexcount.vue";
import useFavicon from "../utils/useFavicon";

const { favicon, reset } = useFavicon();
const score = ref(3.5);
const score1 = ref(3.5);

const loading = () => {
  favicon.value = "/favicon.ico";
};
const update = (i) => {
  score.value = i;
};
</script>

<style scoped></style>
