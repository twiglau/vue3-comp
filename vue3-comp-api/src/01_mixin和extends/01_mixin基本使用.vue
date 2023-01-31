<template>
    <div>
       <h2>{{ message }}</h2>
       <button @click="foo">foo mixin 输出</button>
    </div>
</template>

<script>
import demoMixin from './mixins/demoMixin';
    export default {
        mixins: [ demoMixin ],
    }
</script>

<style scoped>

</style>