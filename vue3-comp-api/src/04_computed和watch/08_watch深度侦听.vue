<template>
    <div>
       <h2 ref="title">Home</h2>
       <p>{{ info.name }} {{ info.age }}</p>
       <button @click="changeData">改变</button>
    </div>
</template>

<script>
import { reactive, watch } from 'vue';
    export default {
        setup() {
            const info = reactive({
                name: "why", 
                age: 18,
                friend: {
                    name: "kobe"
                }
            })
            // 1. 默认情况:可以深度侦听
            // watch(info, (newVal, oldVal) => {
            //     console.log(newVal, oldVal);
            // })
            // 2. 解构后,默认不能
            // watch(() => ({...info}), (newVal, oldVal) => {
            //     console.log(newVal, oldVal);
            // })
            // 2.1 深度侦听
            watch(() => ({...info}), (newVal, oldVal) => {
                console.log(newVal, oldVal);
            }, { deep: true, immediate: true})

            const changeData = () => {
                info.friend.name = "lau";
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