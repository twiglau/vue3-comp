<script setup lang="ts">
import { ref, reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { FormType } from "./components/form/type";

const model = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: {
    required: true,
    message: "请输入用户名!",
  },
  password: {
    required: true,
    message: "请输入密码!",
  },
});

const myForm = ref<FormType>();
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model);
    } else {
      alert("请正确填写表单!");
    }
  });
};
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
          <h4>自定义表单:</h4>
          <el-form ref="myForm" :model="model" :rules="rules">
            <el-form-item label="用户名:" prop="username">
              <el-input v-model="model.username" />
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-input v-model="model.password" type="password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
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
