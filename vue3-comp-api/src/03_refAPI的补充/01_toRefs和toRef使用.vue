<template>
    <div>
       <h2>Home</h2>
       <h2>name:{{ name }}  age:{{ age  }} toRefAge:{{ toRef_age }}</h2>
       <button @click="changeAge">+age</button>
    </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        },
        setup() {
            const info = reactive({ name: "why", age: 18});
            // 1.toRefs: 将reactive对象中的所有属性都转成ref,建立连接
            const { name, age } = toRefs(info);
            // 2.toRef: 对其中一个属性进行转换ref,建立连接
            const toRef_age = toRef(info, "age");

            const changeAge = () => {
                age.value++;
                toRef_age.value++;
            }
            return {
                name,
                age,
                toRef_age,
                changeAge
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>