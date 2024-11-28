<template>
  <div>
    <SuspenseDashboard />
  </div>
</template>
<script setup>
import SuspenseDashboard from "./SuspenseDashboard.vue";
</script>
<style>
.border {
  border: solid 1px #f1f1f1;
}
.p-4 {
  font-size: 18px;
}
.rounded-md {
  border-radius: 20px;
  padding: 20px 20px;
}
.bg-gray-200 {
  background-color: #e1e1e1;
}
.bg-white {
  background-color: #fff;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
</style>
