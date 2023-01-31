<template>
    <div>
      <home-m :message=""></home-m>
    </div>
</template>

<script>
import HomeM from "./pages/HomeM.vue";
    export default {
        components: { HomeM },
        // setup函数有安歇参数
        // setup函数有什么样的返回值
        setup(props,context) {
            console.log("App.vue", props, context);
        }
    }
</script>

<style lang="scss" scoped>

</style>