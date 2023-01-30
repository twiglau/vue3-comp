# Webpack的代码分包
* 默认的打包过程: 
> 默认情况下, 在构建整个组件树的过程中, 因为组件和组件之间是 `通过模块化直接依赖的`,那么`webpack在打包时就会将组件模块打包到一起`(比如一个app.js文件中);
> 这个时候随着项目的不断庞大, `app.js文件的内容过大`, 会造成`首屏的渲染速度变慢`;

* `app.js`: 自己编写的所有代码逻辑; `chunk-vendors.hash.js`:第三方的包

* 异步导入第三方模块: 通过import函数导入的模块, 后续webpack对其进行打包的时候就会进行分包的操作
```
// 通过import函数导入的模块, 后续webpack对其进行打包的时候就会进行分包的操作
import("./12_异步组件的使用/utils/math").then((res) => {
    console.log(res.sum(20, 30))
})
```  

# Vue中实现异步组件
* 如果我们的项目过大了, 对于`某些组件`我们希望`通过异步的方式来进行加载`(目的是可以对其进行分包处理), 那么Vue中给我们提供了一个函数: `defineAsyncComponent`.
* `defineAsyncComponent`接受两种类型的参数:
> 类型一: 工厂函数, 该工厂函数需要返回一个Promise对象;
> 类型二: 接受一个对象类型, 对异步函数进行配置;
```
import Home from './Home.vue';
import Loading from './Loading.vue'
// import AsyncCategory from './AsyncCategory.vue';
// const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))
const AsyncCategory =  defineAsyncComponent({
    loader: () => import("./AsyncCategory.vue"),
    loadingComponent:Loading,
    errorComponent:ErrorInfoComp,
    delay: 2000, //延迟 2000, 在显示loadingComponent组件之前, 等待多长时间
    /**
    err: 错误信息,
    retry: 函数,调用retry尝试重新架子啊
    attempts: 记录尝试的次数
     */
    onError:function(err, retry, attempts) {

    }
})
export default {
    components: {
        Home,
        AsyncCategory
    }
}
```  

# 异步组件和Suspense
* Supspense 是一个内置的全局组件, 该组件有两个插槽: 
> `default`: 如果default可以显示, 那么显示default的内容;
> `fallback`: 如果default无法显示, 那么会显示fallback插槽的内容;
```
<suspense>
    <template #default>
        <async-category></async-category>
    </template>
    <template #fallback>
        <loading></loading>
    </template>
</suspense>
```   