<template>
  <div>
    <h1>About</h1>
    <h1>H函数使用:</h1>
    <Hfuncuse :level="3">Hello slot</Hfuncuse>
    <h1>JSX使用:</h1>
    <Todo />
  </div>
</template>

<script setup>
import Hfuncuse from "../components/Hfuncuse";
import Todo from "../components/Todo";
</script>
