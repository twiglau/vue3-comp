<template>
    <div>
       <p>{{ message }}</p>
       <button @click="emitEvent">发送事件</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, defineExpose} from 'vue';
const props = defineProps({
    message: {
        type: String,
        default: "🙂"
    }
})
const emit = defineEmits(["increment", "decrement"]);
const emitEvent = () => {
    emit('increment', 100)
}
</script>

<style lang="scss" scoped>

</style>