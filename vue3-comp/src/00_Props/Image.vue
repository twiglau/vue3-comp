<template>
  <img
    class="image"
    :class="computeImgStyle"
    src="https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics4.baidu.com%2Ffeed%2F77094b36acaf2edd241528bf122afce73801934d.jpeg%40f_auto%3Ftoken%3Dce88aed2a8e82cbf2f47ef174c02dcd6&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1732813200&t=b0d0aeff736601b3f6d59fb8a960955f"
  />
</template>
<script setup>
import { defineProps, computed } from "vue";

/**
 * 当用户传入非 square, rounded 时, 图片的圆角是没有变化的, 或者对应的单词拼错,也是没有圆角的.
 * 当用户传入是错误的值时, 我们封装的组件能够给出提示是很重要的, 那怎么判断用户传入的值是在我们的约定中的?
 */
const props = defineProps({
  imgStyle: {
    type: String,
    default: "square",
    /** 限制-验证 */
    validator: (value) => {
      return ["square", "rounded"].includes(value);
    },
  },
});

const computeImgStyle = computed(() => {
  return {
    square: props.imgStyle === "square",
    rounded: props.imgStyle === "rounded",
  };
});
</script>
<style scoped>
.image {
  width: 70%;
}

.square {
  border-radius: 0;
}
.rounded {
  border-radius: 20px;
}
</style>
