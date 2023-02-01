<template>
    <div>
       <h2>Home</h2>
       <p>{{ message }}</p>
       <p>{{ title }}</p>
       当我们在template模板中使用ref对象,它会自动进行解包
       <p>当前计数: {{ counter }}</p>
       <button @click="increment">+1</button>
    </div>
</template>

<script>
    import { ref } from 'vue';
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
            // counter变为一个ref的可响应式的引用
            const counter = ref(100);
            // 局部函数
            const increment = () => {
                // setup中没有自动解包
                counter.value++;
            }
            return {
                title: "Hello setup Message",
                counter,
                increment
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>