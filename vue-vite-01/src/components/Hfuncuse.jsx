import { defineComponent, h } from 'vue'
export default defineComponent({
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    // 1. H 函数
    // setup(props, { slots }) {
    //     return () => h(
    //         'h' + props.level, // 标签名
    //         {},                // prop 或 attribute
    //         slots.default()    // 子节点
    //     )
    // }

    // 2. 需要 plugin-vue-jsx 插件支持
    // Hfuncuse.jsx?t=1705633813126:19 Uncaught (in promise) ReferenceError: React is not defined
    setup(props, { slots }) {
        const tag = 'h' + props.level
        return () => (<tag>{ slots.default() }</tag>)
    }
})
/**
 * 需求:
 * <h1 v-if="num==1">{{title}}</h1>
 * <h2 v-if="num==2">{{title}}</h2>
 * <h3 v-if="num==3">{{title}}</h3>
 * <h4 v-if="num==4">{{title}}</h4>
 * <h5 v-if="num==5">{{title}}</h5>
 * <h6 v-if="num==6">{{title}}</h6>
 * 
 * 问题:
 * 手写的h 函数, 可以处理动态性更高的场景. 
 * 但是如果是复杂的场景, h 函数写起来就显得非常繁琐, 需要自己把所有的属性都转变成对象. 
 */