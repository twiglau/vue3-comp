<script setup>
import { defineAsyncComponent } from "vue";
import FetchTopLevelAwait from "./FetchTopLevelAwait.vue";
import ProfileLoading from "./ProfileLoading.vue";

const Profile = defineAsyncComponent({
  // the loader function
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("./Profile.vue")));
    }, 3000);
  },
  loadingComponent: ProfileLoading,
});
</script>
<template>
  <Suspense>
    <div class="border p-4 rounded-md bg-gray-200">
      <h2 class="text-lg font-bold">Suspense Dashboard</h2>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <FetchTopLevelAwait />
        <Profile />
      </div>
    </div>
    <template #fallback>
      <div class="border p-4 rounded-md bg-gray-200">
        Suspense Dashborad is loading...
      </div>
    </template>
  </Suspense>
</template>
