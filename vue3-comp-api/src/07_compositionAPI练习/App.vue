<template>
    <div class="main">
       <p>{{ counter }}</p>
       <p>{{ doubleCounter }}</p>
       <button @click="decrement">-1</button>
       <button @click="increment">+1</button>
       <div class="scroll">
        <div class="scroll-x">scrollX: {{ scrollX }}</div>
        <div class="scroll-y">scrollY: {{ scrollY }}</div>
       </div>
    </div>
</template>

<script>
    import useCounter from './hooks/useCounter';
    import useTitle from './hooks/useTitle'
    import useScroll from './hooks/useScrollPosition'
    export default {
        setup() {
            const { counter, doubleCounter, increment, decrement } = useCounter()
            const titleRef = useTitle("😁");
            const {scrollX,scrollY} = useScroll()
            setTimeout(() => {
                titleRef.value = "😭"
            }, 3000);


            return {
                counter,
                doubleCounter,
                increment,
                decrement,
                scrollX,
                scrollY
            }
        }
    }
</script>

<style scoped>
.main {
    width: 200%;
    min-height: 20000px;
}
.scroll {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>