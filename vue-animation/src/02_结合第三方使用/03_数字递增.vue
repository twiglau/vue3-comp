<template>
    <div>
        
    </div>
</template>
<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            counter: 0,
            showNum: 0
        }
    },
    computed: {
        showCounter() {
           return this.showNum.toFixed(0);
        }
    },
    watch: {
        counter(newValue) {
            gsap.to(this, {
                duration: 1,
                showNum: newValue
            })
        }
    },
    methods: {
    }
}
</script>
<style scoped>
.title {
    display: inline-block;
}
</style>