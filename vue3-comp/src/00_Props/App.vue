<template>
  <User
    :name="userInfo.name"
    :job="userInfo.job"
    :age="userInfo.age"
    @updateUserName="receiveUserName"
    @updateUserAge="receiveUserAge"
  />
  <h5>v-bind 和 v-on</h5>
  <User2 v-bind="userInfo" v-on="userEventHandlers" />
  <h5>props invalidator</h5>
  <Image imgStyle="aaa" />
  <h5>v-for 对对象的解构</h5>
  <Vfor />
  <h5>递归组件使用 -正常模式</h5>
  <recursiveComp :list="list" />
  <h5>递归组件使用 -插槽模式</h5>
  <recursiveComp :list="list">
    <template v-slot="{ item }">
      <strong>{{ item }}</strong>
    </template>
  </recursiveComp>
  <h5>为组件添加元数据</h5>
  <Widget />
</template>
<script setup>
import { reactive, ref } from "vue";
import User from "./User.vue";
import User2 from "./User.vue";
import Image from "./Image.vue";
import Vfor from "./Vfor.vue";
import recursiveComp from "./recursive-comp.vue";
import Widget from "./MetaData-Comp.vue";

console.log("父组件获取到 Widget子组件的 元数据:", Widget.columns);

/**
 * 1. v-bind 会自动的把对象的所有属性自动绑定到组件 作为 props, 传递给该组件
 * 2. 如果 User 组件里有很多的事件要处理, 我们也可以使用 v-on 来解决这个问题.
 */
const userInfo = reactive({
  name: "王小小",
  job: "开发",
  age: 16,
});
const list = ref([1, 2, 3]);

const userEventHandlers = {
  updateUserName(userName) {
    alert(userName);
  },
  updateUserAge(userAge) {
    alert(userAge);
  },
};
const receiveUserName = (userName) => {
  alert(userName);
};
const receiveUserAge = (userAge) => {
  alert(userAge);
};
</script>
