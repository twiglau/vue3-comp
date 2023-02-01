<template>
    <div>
       <h2>Home</h2>
       <p>{{ message }}</p>
    </div>
</template>

<script>
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
        setup(props, {attrs, slots, emit}) {
            console.group("输出:")
            console.log(`props.message`, props.message);
            console.log(attrs.id, attrs.class);
            console.log(slots);
            console.log(emit);
            console.groupEnd()
            
        }
    }
</script>

<style lang="scss" scoped>

</style>