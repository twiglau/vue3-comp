<template>
    <div>
        <h2 ref="title">呵呵呵</h2>
        <button @click="btnClick">获取元素</button>
        <nav-bar ref="navBar"></nav-bar>
    </div>
</template>
<script>
import NavBar from "./NavBar.vue"
export default {
    components: { NavBar },
    methods: {
        btnClick() {
             const title = this.$refs.title;
             const bar = this.$refs.navBar;
             console.log(title, bar);
             console.log(this.$refs.navBar.$el);
        }
    }
}
</script>