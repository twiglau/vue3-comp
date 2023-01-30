<template>
    <div></div>
</template>
<script>
import emitter from './utils/eventbus';
import { WHYCLICK } from './utils/constants';
export default {
    created() {
        emitter.on(WHYCLICK,(info) => {
            console.log(info);
        })
        emitter.on("*", (type, info) => {
            console.log(type, info);
        })
    }
}
</script>