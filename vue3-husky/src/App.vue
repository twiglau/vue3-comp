<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>头部</el-header>
      <el-main>
        <div>
          <h4>TS 使用:</h4>
          <HelloWorld msg="Vite + Vue" />
          <h4>自定义button:</h4>
          <div>
            <el-button type="primary">primary</el-button>
            <el-button type="success">success</el-button>
            <el-button size="small">small</el-button>
          </div>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
