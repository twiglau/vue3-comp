<template>
    <div>
       <input type="text" ref="input" v-focus>
    </div>
</template>

<script>
    export default {
        directives: {
            // 局部指令
            focus: {
                mounted(el, bindings, vnode, preVnode) {
                    el.focus();
                    console.log("focus mounted", bindings, vnode, preVnode);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>