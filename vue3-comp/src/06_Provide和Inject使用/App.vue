<template>
  <div>
    <button @click="addName">+</button>
    <home-m></home-m>
  </div>
</template>
<script>
import { computed } from "vue";
import HomeM from "./HomeM.vue";
export default {
  components: {
    HomeM,
  },
  provide() {
    return {
      name: "why",
      age: 18,
      length: computed(() => this.names.length),
    };
  },
  data() {
    return {
      names: ["a", "b", "c"],
    };
  },
  methods: {
    addName() {
      this.names.push("l");
    },
  },
};
</script>
