<template>
    <div>
        <button @click="btnClick">按钮Abount</button>
    </div>
</template>
<script>
import emitter from './utils/eventbus';
import { WHYCLICK } from './utils/constants';
export default {
    methods: {
        btnClick() {
            emitter.emit(WHYCLICK, {name: "why", age: 18})
        }
    }
    
}
</script>