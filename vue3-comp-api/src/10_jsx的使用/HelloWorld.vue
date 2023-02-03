
<script>
    export default {
        render() {
            return (
                <div>
                    <h2>Hello world</h2>
                    {this.$slots.default ? this.$slots.default({name: "👌"}) : <span>默认插槽</span>}
                </div>
            )
        }
    }
</script>

<style lang="scss" scoped>

</style>