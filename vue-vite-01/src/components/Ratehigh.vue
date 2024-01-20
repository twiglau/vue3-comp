<template>
  <div :style="fontstyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontWidth">
        <span
          @click="onRate(num)"
          @mouseover="mouseOver(num)"
          v-for="num in 5"
          :key="num"
          >★</span
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  value: Number,
  theme: { type: String, default: "orange" },
});
const emits = defineEmits(["update-rate"]);

const width = ref(props.value);
const mouseOver = (i) => {
  width.value = i;
};
const mouseOut = () => {
  width.value = props.value;
};
const onRate = (i) => {
  emits("update-rate", i);
};
const fontWidth = computed(() => `width: ${width.value}em;`);
const themeObj = {
  black: "#000",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};
const fontstyle = computed(() => {
  return `color: ${themeObj[props.theme]}`;
});
</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
