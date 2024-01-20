<template>
  <div>
    <h2>Home</h2>
    <input type="text" v-model="message" />
    <input type="text" v-model="custome_msg" />
    <p>{{ message }}</p>
    <p>{{ custome_msg }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import debounceRef from "./hook/useDebounceRef";
export default {
  setup() {
    const message = ref("Hello world");
    const custome_msg = debounceRef("hello custom");
    return {
      message,
      custome_msg,
    };
  },
};
</script>

<style lang="scss" scoped></style>
