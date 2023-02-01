<template>
    <div>
       <h2>Home</h2>
       <p>{{ name }} {{ age }}</p>
       <button @click="changeName">name修改</button>
       <button @click="changeAge">age修改</button>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
    export default {
        setup() {
            // watchEffect: 自动收集响应式的依赖
            const name = ref("lau");
            const age = ref(18);
            // 收集里面的响应式对象
            const stop = watchEffect(() => {
                console.log("name", name.value, "age", age.value);
            })

            const changeName = () => name.value = "kobe"
            const changeAge = () => {
                age.value++;
                if(age.value > 25) stop();
            }
            return {
                name,
                age,
                changeName,
                changeAge
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>