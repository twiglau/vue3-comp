<template>
    <div>
       <input type="text" ref="input">
       <h2>{{ counter }}</h2>
       <button v-if="counter < 4" v-why.v.k = "'lau'" @click="increment"> + 1 </button>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        directives: {
            // 局部指令
            why: {
                created(el, bindings, vnode, preVnode){
                    console.log("why created", el, bindings, vnode, preVnode)
                    console.log(bindings.value)
                    console.log(bindings.modifiers)
                },
                beforeMount(){
                    console.log("why beforeMount")
                },
                mounted(){
                    console.log("why mounted")
                },
                beforeUpdate(){
                    console.log("why beforeUpdate")
                },
                updated(){
                    console.log("why updated")
                },
                beforeUnmount(){
                    console.log("why beforeUnmount")
                },
                unmounted(){
                    console.log("why unmounted")
                },
            }
        },
        setup() {
            const counter = ref(0);
            const increment = () => counter.value++;
            return {
                counter,
                increment
            }
        }
    }
</script>
