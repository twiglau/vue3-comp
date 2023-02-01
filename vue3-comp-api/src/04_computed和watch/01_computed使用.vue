<template>
    <div>
       <h2>Home</h2>
       <p>{{ firstName }} {{ lastName }}</p>
       <p>full: {{  fullName }}</p>
       <button @click="changeName">firstName 修改</button>
    </div>
</template>

<script>
    import { computed, ref } from 'vue';
    export default {
        setup() {
            const firstName = ref("kobe");
            const lastName = ref("Bryant");
            // 1. 用法一: 传入一个getter函数
            // computed的返回值是一个ref对象
            // const fullName = computed(() => { return firstName.value + ' ' + lastName.value})
            const changeName = () => { firstName.value = "james"}
            // 2. 用法二: 传入一个对象, 对象包含getter/setter
            const fullName = computed({
                get: () => { return firstName.value + " " + lastName.value },
                set(newValue) {
                    const names = newValue.split(" ");
                    firstName.value = names[0];
                    lastName.value = names[1];
                }
            })
            return {
                firstName,
                lastName,
                fullName,
                changeName
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>