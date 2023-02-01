# Options API 
* 在Vue2中, 我们编写组件的方式是Options API:
- Options API 的一大特点就是在`对应的属性`中编写`对应的功能模块`;
- 比如`data定义数据, methods中定义方法, computed中定义计算属性,watch中监听属性改变`, 也包括`生命周期钩子`; 
* 但是这种代码有一个很大的弊端: 
- 当我们`实现某一个功能`时, 这个功能`对应的代码逻辑`会被`拆分到各个属性`中;
- 当我们`组件变得更大, 更复杂`时, `逻辑关注点的列表`就会增长, 那么`同一个功能的逻辑就会被拆分的很分散`;
- 尤其对于那些一开始`没有编写这些组件的人`来说, 这个组件的代码时`难以阅读和理解`的;

# Composition API
* Composition API想要帮助我们做什么事情, 接下来看一下`到底是怎么做`呢?
- 为了开始使用Composition API,我们需要有一个可以实际使用它`(编写代码)的地方`;
- 在Vue组件中, 这个位置就是 `setup 函数`;

* setup其实就是组件的另外一个选项:
- 只不过这个选项强大到我们可以`用它来替代之间所编写的大部分其他选项`;
- 比如`methods, computed, watch, data, 生命周期`等;

* setup参数的选项
- `props`: 他其实就是父组件传递过来的属性会被放到props对象中, 我们在setup中如果需要使用, 那么就可以直接通过props参数获取;
> 对于定义props的类型, 我们还是和之前的规则是一样的, 在props选项中定义;
> 并且在template中依然是可以正常去使用props中的属性, 比如message;
> 如果我们在setup函数中想要使用props, 那么不可以通过this去获取
> 因为props有直接作为参数传递到setup函数中, 所以我们可以直接通过参数来使用即可;
- `context`: 称之为SetupContext, 它里面包含三个属性:
> `attrs`: 所有的非prop的attribute;
> `slots`: 父组件传递过来的插槽(这个在以渲染函数返回时会有作用,后面会讲到);
> `emit`: 当我们组件内部需要发出事件时会用到emit(因为我们不能访问this, 所以不可以通过 this.$emit 发出事件);

* setup函数的返回值
- setup既然是一个函数, 那么它也可以有`返回值`, `它的返回值用来做什么呢?`
> setup的返回值可以在`模板templdate中被使用`;
> 也就是说我们可以`通过setup的返回值来替代data选项`;

* setup中不可以使用this
- 官方关于this有这样一段描述(这段描述是我给官方提交了PR之后的一段描述):
> 表达的含义是 this并没有指向当前组件实例;
> 并且在setup被调用之前, data, computed, methods等都没有被解析;
> 所以无法在setup中获取this;

* setup执行:
- 调用`createComponentInstance`创建组件实例;
- 调用`setupComponent`初始化component内部的操作;
- 调用`setupStatefulComponent`初始化有状态的组件;
- 在`setupStatefulComponent`取出了setup函数;
- 通过`callWithErrorHanding`的函数执行setup;

# Reactive API 
* 如果想为在setup中定义的数据提供响应式的特性, 那么我们可以`使用reactive的函数`:
```
const state = reactive({
    name: "coderwhy",
    counter: 100
})
```  
* 那么这是什么原因呢? 为什么就可以变成响应式的呢?
- 这是因为当我们`使用reactive函数处理我们的数据之后`,数据`再次被使用`时就会`进行依赖收集`;
- 当`数据发生改变`时, 所有`收集到依赖`都是`进行对应的响应式操作`(比如更新界面);
- 事实上, 我们编写的`data选项`, 也是在内部`交给了reactive函数`将其编程响应式对象的;

# Ref API
* reactive API 对`传入的类型是有限制的`, 它要求我们必须传入的是`一个对象或者数组类型`:
- 如果我们传入一个`基本数据类型(String, Number, Boolean) 会报一个警告`;
> `value cannot be made reactive: Hello World`;
* 这个时候Vue3给我们提供了另外一个API: ref API
- ref 会返回一个`可变的响应式对象`, 该对象作为一个`响应式的引用` 维护着它`内部的值`, 这就是`ref名称的来源`;
- 它内部的值是`在ref的value属性`中被维护的;

# readonly
* 通过`reactive或者ref可以获取到一个响应式的对象`, 但是某些情况下, 我们`传入给其他地方(组件)`的这个响应式对象希望
`在另外一个地方(组件)被使用`, 但是`不能被修改`, 这个时候`如何防止这种情况的出现`呢?
- Vue3为我们提供了`readonly的方法`;
- `readonly会返回原生对象的只读代理`(也就是它依然是一个Proxy, 这是一个`proxy的set方法被劫持`),并且不能对其进行修改;

# Reactive判断的API  
* isProxy
- 检查对象`是否是由reactive或readonly创建的proxy`.
* isReactive
- 检查对象`是否是由reactive创建的响应式代理`;
- 如果`该代理是readonly创建`的, 但`包裹了由reactive创建的另一个代理`, 它也会返回true;
* isReadonly
- 检查对象`是否是由readonly创建的只读代理`.
* toRaw
- 返回 `reactive或readonly代理的原始对象`(不建议保留对原始对象的持久引用, 请谨慎使用);
* shallowReactive 
- 创建一个响应式代理, 它跟踪其自身 property 的响应性, 但`不执行嵌套对象的深层响应式转换`(深层还是原生对象).
* shallowReadonly
- 创建一个proxy, 使其自身的 property 为`只读`, 但`不执行嵌套对象的深层只读转换`(深层还是可读,可写的).

# toRefs 
