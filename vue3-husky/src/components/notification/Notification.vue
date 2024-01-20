<template>
  <div
    v-show="visible"
    class="el-notification"
    @keydown="handleKeydown"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    :style="positionStyle"
    @click="onClickHandler"
  >
    <div class="el-notification__title">
      {{ title }}
    </div>
    <div class="el-notification__message">
      {{ message }}
    </div>
    <button
      v-if="showClose"
      class="el-notification__close-button"
      @click="onCloseHandler"
    >
      关闭
    </button>
  </div>
</template>
<script>
export default {
  name: "ElNotification",
};
</script>
<script setup>
import { computed, getCurrentInstance, ref } from "vue";

const props = defineProps({
  verticalOffset: { type: Number, default: 50 },
  position: { type: String, default: "top-right" },
});
const emit = defineEmits(["click", "close"]);
const instance = getCurrentInstance();
const visible = ref(true);
const verticalOffsetVal = ref(props.verticalOffset);

const horizontalClass = computed(() => {
  return props.position.startsWith("right") ? "right" : "left";
});
const verticalProperty = computed(() => {
  return props.position.startsWith("top") ? "top" : "bottom";
});

const positionStyle = computed(() => {
  return {
    [verticalProperty.value]: `${verticalOffsetVal.value}px`,
  };
});
</script>

<style lang="scss">
@import "../styles/mixin";
</style>
