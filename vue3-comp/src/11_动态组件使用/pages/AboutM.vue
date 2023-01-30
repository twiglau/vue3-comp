<template>
    <div>
        About组件
        <button @click="addCounter">{{ counter }}</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addCounter() {
            this.counter++;
        }
    }
}
</script>