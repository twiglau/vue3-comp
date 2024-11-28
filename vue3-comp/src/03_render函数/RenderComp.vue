<script setup>
import { h, useCssModule, defineProps } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
const classes = useCssModule("classes");

const renderList = () => {
  return h(
    "ul",
    { class: classes["unordered-list"] },
    props.list.map(({ label, content, isEnabled }) => {
      return isEnabled
        ? h("li", { key: label, class: classes["item-list"] }, [
            h("h5", { class: classes["item-list-h5"] }, label),
            h("p", { class: classes["item-list-p"] }, content),
          ])
        : null;
    })
  );
};
</script>
<template>
  <renderList />
</template>
<style module="classes" lang="scss">
.unordered-list {
  padding-inline-start: 1rem;
  .item-list {
    margin-block-end: 1rem;
    list-style-type: disc;
    word-break: break-word;
    &:last-child::marker {
      color: yellow;
    }
    &:first-child::marker {
      color: #ccc;
    }
    &-h5 {
      margin-block-end: 0.5rem;
      text-transform: uppercase;
    }
    &-p {
      line-height: 1.4;
    }
  }
}
</style>
