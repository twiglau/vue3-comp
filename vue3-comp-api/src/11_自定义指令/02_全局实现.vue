<template>
    <div>
       <input type="text" ref="input" v-focus>
    </div>
</template>

<script>
    export default {
    }
</script>


<!-- app.directive("focus",{
    mounted(el, bindings, vnode, preVnode) {
        el.focus();
        console.log("全局 mounted", bindings, vnode, preVnode);
    }
}) -->