<template>
    <div>
       <h2>Home</h2>
       <p>{{ info }}</p>
       <p>{{ sInfo }}</p>
       <button @click="changeInfo">修改</button>
    </div>
</template>

<script>
import { ref, shallowRef, triggerRef  } from 'vue'
    export default {
        props: {
            message: {
                type: String,
                required: true
            }
        },
        setup() {
            const info = ref({name: "why"})
            
            const sInfo = shallowRef({name: "lau"})
            const changeInfo = () => {
                // info.value.name = "james";
                // 单独使用,是不能更改的,需要触发;注意:如果同时有ref对象,就不需要triggerRef,界面也会更新;
                sInfo.value.name = "kiki";
                triggerRef(sInfo);
            }
            return {
                info,
                sInfo,
                changeInfo
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>