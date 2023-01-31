<template>
    <div>
      <h2>{{ title }}</h2>
      <h4>{{ content }}</h4>
      <button @click="commonMth">继承点击</button>
    </div>
</template>

<script>
import BasePage from './BasePage.vue';
    export default {
        extends: BasePage,
        data() {
            return {
                content: "Hello Home"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>