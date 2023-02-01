<template>
    <div>
       <h2>Home</h2>
       <p>{{ message }}</p>
       <p>{{ title }}</p>
       <p>当前计数: {{ counter }}</p>
       <button @click="increment">+1</button>
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
        setup() {
            let counter = 100
            const increment = () => {
                console.log("increment");
            }
            return {
                title: "Hello setup Message",
                counter,
                increment
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>