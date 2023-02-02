<template>
    <div>
      <home-m :message="message"></home-m>
      <p>App counter: {{ counter }}</p>
      <button @click="increment">+1</button>
    </div>
</template>

<script>
import HomeM from "./HomeM.vue";
import { provide, readonly, ref } from 'vue';
    export default {
        components: { HomeM },
        data() {
            return {
                message: "呵呵🙂"
            }
        },
        setup() {
            const name = "cWHy";
            let counter = ref(100);
            provide("name", name);
            provide("counter", readonly(counter))
            const increment = () => counter.value++;
            return {
                counter,
                increment
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>