<template>
  <button @click="add">{{ count }}</button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
// import { useStore } from "../store/gvuex";

const store = useStore();
const count = computed(() => store.state.count);
const add = () => {
  store.commit("add");
};
</script>
