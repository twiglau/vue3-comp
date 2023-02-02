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
            const name = ref("why");
            watch([info, name], ([newInfo, newName], [oldInfo, oldName]) => {
                console.log(newInfo, newName, oldInfo, oldName);
            })
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