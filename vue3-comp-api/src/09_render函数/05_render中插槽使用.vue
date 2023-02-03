
<script>
    import { h } from 'vue';
    export default {
        data() {
            return {
                counter: 0
            }
        },
        render() {
            return h(
                'div',
                { class: "app" },
                [
                    h("h2", null, `当前计数: ${ this.counter }`),
                    h("button", { onClick: () => this.counter++ }, "+1"),
                    h("button", { onClick: () => this.counter-- }, "-1"),
                    this.$slots.default ? this.$slots.default({name: "参数"}) : h("span", null, "counterM插槽的默认值")
                ]
            )
        }
    }
</script>

<style lang="scss" scoped>

</style>

<!-- <script>
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

</style> -->