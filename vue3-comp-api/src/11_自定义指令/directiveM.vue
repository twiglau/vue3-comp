<template>
    <div>
       <input type="text" ref="input">
       <h2 v-format-time="'YYYY/MM/DD'">{{ timestamp }}</h2>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        setup() {
            const timestamp = ref(new Date().valueOf())
            return {
                timestamp
            }
        }
    }
</script>
