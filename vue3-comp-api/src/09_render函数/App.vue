<script>
    import { h } from 'vue'
    import counterM from './counterM.vue'
    export default {
        render() {
            return h(counterM, {}, {
                default: props => h("span", null, `app传入到counterM中的内容: ${props.name}`)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>