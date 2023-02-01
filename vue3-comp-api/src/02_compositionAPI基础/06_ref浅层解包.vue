<template>
    <div>
       <h2>Home</h2>
       <p>{{ message }}</p>
       <p>{{ title }}</p>
       当我们在template模板中使用ref对象,它会自动进行解包
       <p>当前计数: {{ counter }}</p>
       ref的解包只能是一个浅层解包(info是一个普通的对象)
       <p>当前计数: {{ info.counter.value }}</p>
       当如果最外层包裹的是一个reactive可响应式对象, 那么内容的ref可以解包
       <p>当前计数: {{ reactiveInfo.counter }}</p>
       <button @click="increment">+1</button>
    </div>
</template>

<script>
    import { reactive, ref } from 'vue';
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
            const info = {
                counter
            }
            const reactiveInfo = reactive({
                counter
            })

            // 局部函数
            const increment = () => {
                // setup中没有自动解包
                counter.value++;
            }
            return {
                title: "Hello setup Message",
                counter,
                info,
                reactiveInfo,
                increment
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>