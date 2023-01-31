<template>
    <div>
        <h2>{{ message }} {{ title_t }}</h2>
        <hy-input v-model="message" v-model:title="title_t"></hy-input>
    </div>
</template>
<script>
import HyInput from "./HyInput.vue";
export default {
    components: { HyInput },
    data() {
        return {
            message: "hello",
            title_t: "标题"
        }
    }
}
</script>