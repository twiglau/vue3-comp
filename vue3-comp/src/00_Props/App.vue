<template>
  <User
    :name="userInfo.name"
    :job="userInfo.job"
    :age="userInfo.age"
    @updateUserName="receiveUserName"
    @updateUserAge="receiveUserAge"
  />
  <h5>1. v-bind 和 v-on</h5>
  <User2 v-bind="userInfo" v-on="userEventHandlers" />
  <h5>2. props invalidator</h5>
  <Image imgStyle="aaa" />
  <h5>3. v-for 对对象的解构</h5>
  <Vfor />
  <h5>4. 递归组件使用 -正常模式</h5>
  <recursiveComp :list="list" />
  <h5>5. 递归组件使用 -插槽模式</h5>
  <recursiveComp :list="list">
    <template v-slot="{ item }">
      <strong>{{ item }}</strong>
    </template>
  </recursiveComp>
  <h5>6. 为组件添加元数据</h5>
  <Widget />
  <h5>7. 多文件的单组件</h5>
  <single-comp />
  <h5>8. 组件懒加载</h5>
  <lazy-comp />
  <h5>9. 检测点击外部</h5>
  <pop-up />
  <h5>10. 将子组件所有插槽传递给父组件</h5>
  <wrapper-component>
    <div>默认插槽</div>
    <template #second>
      <div>second 插槽</div>
    </template>
    <template v-slot:third="{ info }">
      <div>third 插槽: {{ info }}</div>
    </template>
  </wrapper-component>
  <h5>11. 组件之间共享状态</h5>
  <div>
    <Share1Comp />
    <Share2Comp />
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import User from "./User.vue";
import User2 from "./User.vue";
import Image from "./Image.vue";
import Vfor from "./Vfor.vue";
import recursiveComp from "./recursive-comp.vue";
import Widget from "./MetaData-Comp.vue";
import SingleComp from "./Single.vue";
import LazyComp from "./LazyComp.vue";
import PopUp from "./PopUp.vue";
import WrapperComponent from "./WrapperComponent.vue";
import Share1Comp from "./Share1Comp.vue";
import Share2Comp from "./Share2Comp.vue";

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
