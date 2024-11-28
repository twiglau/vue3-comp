<template>
  <div>
    <render-comp
      :list="[
        { label: '节点1', content: '内容1', isEnabled: true },
        { label: '节点2', content: '内容2', isEnabled: false },
        { label: '节点3', content: '内容3', isEnabled: true },
      ]"
    />
  </div>
</template>
<script setup>
import RenderComp from "./RenderComp.vue";
</script>
