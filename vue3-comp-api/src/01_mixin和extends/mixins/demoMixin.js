export default {
    data() {
        return {
            message: "Hello DemoMixin"
        }
    },
    methods: {
        foo() {
            console.log("demo mixin foo");
        }
    },
    created() {
        console.log("demoMixin created 调用了");
    }
}