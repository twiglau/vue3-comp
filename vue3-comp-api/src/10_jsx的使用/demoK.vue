
<script>
    import HelloWorld from './HelloWorld.vue';
    export default {
        data() {
            return {
                counter: 1
            }
        },
        render() {
            const increment = () => this.counter++;
            const decrement = () => this.counter--;
            return (
                <div>
                    <h2> { this.counter }</h2>
                    <button onClick={ increment }> + 1</button>
                    <button onClick={ decrement }> + 1</button>
                    <HelloWorld>
                        {
                            { default: props => <button> { props.name }</button>}
                        }
                    </HelloWorld>
                </div>
            )
        }
    }
</script>

<style lang="scss" scoped>

</style>