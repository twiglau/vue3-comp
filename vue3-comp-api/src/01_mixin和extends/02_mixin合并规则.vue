<template>
    <div>
       <h2>{{ message }}</h2>
       <button @click="baseClick">foo mixin 输出</button>
    </div>
</template>

<script>
import demoMixin from './mixins/demoMixin';
    export default {
        mixins: [ demoMixin ],
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