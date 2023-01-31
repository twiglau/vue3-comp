<template>
    <div>
       <h2>{{ message }}</h2>
       <button @click="foo">foo mixin 输出</button>
       <home-page></home-page>
    </div>
</template>

<script>
import demoMixin from './mixins/demoMixin';
import HomePage from './pages/HomePage.vue';
    export default {
        mixins: [ demoMixin ],
        components: { HomePage },
        data() {
            return {
                message: "Hello App"
            }
        },
        created() {
            console.log("App created 调用了");
        }
    }
</script>

<style scoped>

</style>