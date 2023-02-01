<template>
    <div>
       <h2>Home</h2>
       <p>{{ message }}</p>
       <p>{{ title }}</p>
       <button @click="updateState">readonly更改</button>
    </div>
</template>

<script>
    import { reactive, readonly, ref } from 'vue';
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
            // 1.普通对象
            const info1 = {name: "why"};
            const readonlyInfo1 = readonly(info1)
           
            // 2.响应式对象
            const info2 = reactive({
                name: "why2"
            })
            const readonlyInfo2 = readonly(info2);

            // 3. 响应式对象ref
            const info3 = ref("why");
            const readonlyInfo3 = readonly(info3);
            // 局部函数
            const updateState = () => {
                readonlyInfo1.name = "coderWhy"
                readonlyInfo2.name = "coderWhy2"
                readonlyInfo3.value = "coderWhy3"
            }
            return {
                title: "Hello setup Message",
                updateState
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>