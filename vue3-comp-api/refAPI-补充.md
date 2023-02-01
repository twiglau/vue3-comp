# toRefs
* 如果我们使用`ES6的解构语法`,对`reactive返回的对象进行解构获取值`, 那么之后无论是`修改解构后的变量`, 还是`修改reactive返回的state对象`,数据都不再是响应式的: 
```
const state = reactive({
    name: "why",
    age: 18
})
const { name, age } = state;
```  
* 那么有没有办法`让我们解构出来的属性是响应式`的呢?
- Vue为我们提供了一个`toRefs的函数`, 可以将`reactive返回的对象中的属性都转成ref`;
- 那么我们再次进行解构出来的`name和age本身都是ref的`;
```
const { name, age } = toRefs(state);
```  
* 这种做法相当于已经在 `state.name`和`ref.value`之间建立了`链接`,`任何一个修改都会引起另外一个变化`;

# toRef
```
const toRef_age = toRef(state, "age");
```  

# unref
* 如果我们想要`获取一个ref引用中的value`,那么也可以`通过unref方法`;
- `如果参数是一个ref`, 则`返回内部值,否则返回参数本身`;
- 这是`val = isRef(val) ? val.value : val`的语法糖函数;

# isRef: 判断值`是否是一个ref对象`;
# shallowRef: 创建一个`浅层的ref对象`;
# triggerRef: `手动触发和shallowRef相关联的副作用`;
# customRef
* 创建一个`自定义的ref`, 并`对其依赖项跟踪和更新触发`进行`显示控制`;
- 它需要`一个工厂函数`, 该`函数接受track和trigger函数`作为参数;
- 并且应该返回`一个带有get和set的对象`;
* 案例: 对`双向绑定的属性进行debounce(节流)`的操作;