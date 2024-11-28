<template>
  <div>
    <p>{{ tempStr }}</p>
    <slot></slot>
    <slot name="second"></slot>
    <slot name="third"></slot>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  tempStr: String,
});
</script>
