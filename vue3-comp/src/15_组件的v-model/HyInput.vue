<template>
    <div>
        <input type="text" v-model="value">
        <input type="text" v-model="titleV">
    </div>
</template>
<script>
export default {
    props: {
        modelValue: String,
        title:String
    },
    emits: ["update:modelValue","update:title"],
    computed: {
        value: {
            set(value) {
                this.$emit("update:modelValue", value);
            },
            get() {
                return this.modelValue;
            }
        },
        titleV: {
            set(title) {
                this.$emit("update:title", title);
            },
            get() {
                return this.title
            }
        }
    }
}
</script>