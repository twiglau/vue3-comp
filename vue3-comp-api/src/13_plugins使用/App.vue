<template>
    <div>

    </div>
</template>

<script>
    import { getCurrentInstance } from 'vue';
    export default {
        mounted() {
            console.log(`app.config.globalProperties`, this.$name);
        },
        setup() {
            const instance = getCurrentInstance();
            const name = instance.appContext.config.globalProperties.$name;
            console.log('setup 中输出', name);
        }
    }
</script>

<style lang="scss" scoped>

</style>