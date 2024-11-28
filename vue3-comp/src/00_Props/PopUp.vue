<template>
  <DetectOutsideClick @detect="onOutsideClick">
    <div class="popup">
      <div>点击我了</div>
    </div>
  </DetectOutsideClick>
</template>
<script setup>
import DetectOutsideClick from "./DetectOutsideClick.vue";
const onOutsideClick = () => {
  console.log("点击外部了");
};
</script>
<style scoped>
.popup {
  width: 100px;
  height: 100px;
  background-color: burlywood;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #000;
}
</style>
