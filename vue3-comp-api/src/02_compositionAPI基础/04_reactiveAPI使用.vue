<template>
    <div>
       <h2>Home</h2>
       <p>{{ message }}</p>
       <p>{{ title }}</p>
       <p>当前计数: {{ state.counter }}</p>
       <button @click="increment">+1</button>
    </div>
</template>

<script>
    import { reactive } from 'vue';
    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        },
        /**
         * 
         * @param {*} props 父组件传递过来属性
         * @param {*} context 
         */
        // setup(props, context) {
        setup() {
            const state = reactive({
                counter: 100
            })
            const increment = () => {
                state.counter++;
            }
            return {
                title: "Hello setup Message",
                state,
                increment
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>