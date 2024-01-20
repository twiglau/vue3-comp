<template>
  <a :href="'#' + props.to"></a>
</template>

<script setup>
const props = defineProps({
  to: { type: String, required: true },
});
</script>
