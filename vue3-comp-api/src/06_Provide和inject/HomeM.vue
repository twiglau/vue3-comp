<template>
    <div>
       <h2 ref="title">Home</h2>
       <p>{{  name }}</p>
       <p>{{  counter }}</p>
       <button @click="increment">+1</button>
    </div>
</template>

<script>
    import { inject } from 'vue';
    export default {
        setup() {
            const name = inject("name", "lau");
            const counter = inject("counter");
            const increment = () => counter.value++;
            return {
                name,
                counter,
                increment
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>