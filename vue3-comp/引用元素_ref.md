# $refs的使用
* 某些情况下, 我们在组件中想要直接获取到元素对象或者子组件实例:
> 在Vue开发中我们是`不推荐进行DOM操作`的;
> 这个时候, 我们可以`给元素或者组件绑定一个ref的attribute属性`;
* 组件实例有一个$refs属性:
> 它一个对象Object, 持有`注册过ref attribute 的所有 DOM 元素和组件实现`;

# $parent 和 $root
* 我们可以通过$parent来访问元素.
> HelloWorld.vue的实现:
>> 这里我们也可以通过$root来实现, 因为App是我们的跟组件;
```
visitParent() {
    console.log(this.$parent.message);
    console.log(this.$root.message);
}
```  
* 注意: 在Vue3中已经`移除了$children的属性`, 所以不可以使用了