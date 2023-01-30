<template>
    <div>
        <button 
        v-for="item in tabs" :key="item" 
        @click="btnClick(item)"
        :class="{active: item == currentTab}"
        >{{ item }}</button>
        <keep-alive>
            <component 
            v-bind:is="currentTab"
            name="why"
            :age="18"
            @pageClick="pageClick"
            ></component>
        </keep-alive>
    </div>
</template>
<script>
import HomeM from "./pages/HomeM.vue"
import AboutM from "./pages/AboutM.vue"
import CategoryM from "./pages/CategoryM.vue"
export default {
    components: {
        HomeM,
        AboutM,
        CategoryM
    },
    data() {
        return {
            tabs: ["HomeM", "AboutM", "CategoryM"],
            currentTab: "HomeM"
        }
    },
    methods: {
        btnClick(item){
            this.currentTab = item
        },
        pageClick(){
            console.log("page内部发生了点击");
        }
    }
}
</script>
<style scoped>
.active {
    color: red;
}
</style>