<template>
    <div>
       <h2>Home</h2>
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
        setup(props, context) {
            console.log(props, context);
        }
    }
</script>

<style lang="scss" scoped>

</style>