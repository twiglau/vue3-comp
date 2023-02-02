<template>
    <div>
       <h2 ref="title">Home</h2>
       <p>{{ info.name }} {{ info.age }}</p>
       <button @click="changeData">改变</button>
    </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';
    export default {
        setup() {
            const info = reactive({name: "why", age: 18})
            // 0. 传入一个可响应的对象: reactive 或 ref
            // 0.1 reactive对象获取到newVval和oldVal本身都是reactive对象;
            watch(info, (newVal, oldVal) => {
                console.log("newVal:",newVal, "oldVal:", oldVal)
            })
            // 0.1.1 如果希望newVal和oldVal是一个普通的对象
            watch(() => ({...info}), (newVal, oldVal) => {
                console.log("newVal:",newVal, "oldVal:", oldVal)
            })
            // 0.2 ref对象获取的newVal和oldVal是value值本身
            const name = ref("why");
            watch(name, (newVal, oldVal) => {
                console.log("newVal", newVal, "oldVal", oldVal);
            })
            // 1.侦听watch时,传入getter函数 - Function
            // watch(() => info.name, (newVal, oldVal) => {
            //     console.log("newVal:",newVal, "oldVal:", oldVal)
            // })
            const changeData = () => {
                info.name = "lau";
                name.value = "twig";
            }
            return {
                info,
                changeData
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>