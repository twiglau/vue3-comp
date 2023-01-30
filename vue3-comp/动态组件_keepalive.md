# 动态组件的实现
* 动态组件是使用 `component 组件`, 通过一个特殊的 `attribute is` 来实现:
```
<component v-bind:is="currentTab"></component>
```
* 这个currentTab得值需要是什么内容呢? 
> 可以是通过 `component函数注册` 的组件;
> 在一个`组件对象的components对象中注册的组件`;

# 认识 keep-alive  
* abount组件进行改造: 在其中增加了一个按钮, 点击可以递增的功能;
> 比如我们将counter点到10, 那么在切换到home在切换回来about时, 状态是否可以保持呢?
>> 答案是否定的;
>> 这是因为默认情况下, 在`切换组件后, about组件会被销毁掉`, 再次回来时 `会重新创建组件`;
* 但是, 在开发中某些情况我们希望继续保持组件的状态, 而不是销毁掉, 这个时候我们就可以`使用一个内置组件`: keep-alive;
* keep-alive属性  
> include -string|RegExp|Array. 只有名称匹配的组件被缓存;
> exclude -string|RegExp|Array. 任何名称匹配的组件都不会被缓存;
> max -number|string. 最多可以缓存多少组件实例, 一旦达到这个数字,那么缓存组件中最近没有被访问的实例会被销毁;
* include 和 exclude prop 允许组件有条件地缓存:  
> 二者都可以用 `逗号分隔字符串, 正则表达式 或 一个数组` 来表示;
> 匹配首先检查组件自身的 `name选项`;
* 缓存组件的声明周期  
> 对于缓存的组件来说, 再次进入时, 我们是`不会执行created或者mounted等声明周期函数`的:
>> 但是有时候我们确实希望监听到何时重新进入到了组件, 何时离开了组件;
>> 这个时候我们可以使用 `activated和deactived` 这两个生命周期钩子函数来监听;
```
activated() {
    console.log("about activated");
}
deactivated() {
    console.log("about deactived");
}
```  

