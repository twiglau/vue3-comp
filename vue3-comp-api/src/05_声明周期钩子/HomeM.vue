<template>
    <div>
       <h2 ref="title">Home</h2>
       <p>{{  counter }}</p>
       <button @click="increment">+1</button>
    </div>
</template>

<script>
    import { onMounted, onUnmounted, onUpdated, ref} from 'vue';
    export default {
        setup() {
            const counter = ref(0)
            const increment = () => {
                counter.value++;
            }
            onMounted(() => {
                console.log('HomeM Mounted');
            })
            onUnmounted(() => {
                console.log('HomeM onUnmounted');
            })
            onUpdated(() => {
                console.log('HomeM onUpdated');
            })
            return {
                counter,
                increment
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>