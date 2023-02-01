<template>
    <div>
      <home-m :message="message"></home-m>
    </div>
</template>

<script>
import HomeM from "./HomeM.vue";
    export default {
        components: { HomeM },
        data() {
            return {
                message: "呵呵🙂"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>