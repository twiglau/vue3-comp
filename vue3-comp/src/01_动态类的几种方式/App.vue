<template>
  <div>
    <h5 @click="disabledClick">1. 一种变量控制,开启或关闭</h5>
    <div :class="disabled1 && 'disabled-component'">
      当disabled为true 时, 这个组件被禁用了
    </div>
    <h5>2. 一种变量, 三目运算</h5>
    <div :class="isLoading ? 'disabled-component' : 'allow-component'">
      三目运算符方式
    </div>
    <h5>3. 如果不止一个类,有多个</h5>
    <div
      :class="{
        primary: isPrimary,
        secondnary: isSecondnary,
        tertiary: isTertiary,
      }"
    >
      通过对象的方式
    </div>
    <div
      :class="[
        isPrimary && 'primary',
        isSecondnary && 'secondnary',
        isTertiary && 'tertiary',
      ]"
    >
      通过数组的方式
    </div>
    <!-- main.js:17 [CUSTOM WARNING] Property "hello" was accessed during render but is not defined on instance. -->
    {{ hello }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDisabled: true,
      isLoading: false,
      isPrimary: true,
      isSecondnary: false,
      isTertiary: true,
    };
  },
  computed: {
    disabled1() {
      return this.isDisabled || this.isLoading;
    },
  },
  methods: {
    disabledClick() {
      this.callback();
    },
  },
};
</script>
<style scoped>
.disabled-component {
  background-color: gray;
  color: darkgray;
  cursor: not-allowed;
}
.allow-component {
  background-color: blue;
  color: darkblue;
  cursor: pointer;
}
.primary {
  background-color: red;
}
.secondnary {
  border-radius: 20px;
}
.tertiary {
  color: blue;
}
</style>
