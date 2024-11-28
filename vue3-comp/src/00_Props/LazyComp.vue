<template>
  <AsyncComp />
</template>
<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
export default {
  components: {
    AsyncComp: defineAsyncComponent({
      // the loader function
      loader: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./Image.vue"));
          }, 2000);
        }),
      loadingComponent: Loading,
      delay: 500,
    }),
  },
};
</script>
