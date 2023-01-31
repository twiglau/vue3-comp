<template>
    <div>
        <h2>{{ message }}</h2>
        <button @click="changeMsg">更新MSG</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: "Hello"
        }
    },
    methods:{
        changeMsg() {
            this.message += "lau"
        }
    },
    beforeCreate(){
        console.log("home beforeCreate");
    },
    created(){
        console.log("home created")
    },
    beforeMount() {
        console.log("home beforeMount")
    },
    mounted() {
        console.log("home mounted")
    },
    beforeUnmount() {
        console.log("home beforeUnmount")
    },
    unmounted() {
        console.log("home unmounted")
    },
    beforeUpdate() {
        console.log("home beforeUpdate")
    },
    updated() {
        console.log("home updated")
    }
}
</script>