# computed
* 前面讲到过计算属性computed: 当我们的某些属性是依赖其他状态时,我们可以使用计算属性来处理
- 前面Options API中, 我们是使用computed选项来完成的;
- 在Composition API中, 我们可以在setup函数中使用computed方法来编写一个计算属性;
* 如何使用computed?
- 方式一: 接收一个getter函数,并为getter函数返回的值,返回一个不变的ref对象;
- 方式二: 接受一个具有get和set的对象,返回一个可变的(可读写)ref对象;
```
const fullName = computed(() => {
    return firstName.value + " " + lastName.value
})

const fullName = computed({
    get: () => {
        return firstName.value + " " + lastName.value;
    },
    set: newValue => {
        const names = newValue.split(" ");
        firstName.value = names[0];
        lastName.value = names[1];
    }
})
```  

# 侦听数据的变化
* Options API中, 我们可以通过watch选项来侦听data或者props的数据变化, 当数据变化时执行某一些操作.
* 在Composition API中, 我们可以使用watchEffect和watch来完成响应式数据的侦听:
- `watchEffect`:用于自动收集响应式数据的依赖;
- `watch`: 需要手动指定侦听的数据源;

* watchEffect
- 当侦听到某些响应式数据变化时, 我们希望执行某些操作, 这个时候可以使用watchEffect.
- 案例:
> 首先, watchEffect传入的函数会被立即执行一次, 并且在执行的过程中会收集依赖;
> 其次, 只有收集的依赖发生变化时, watchEffect传入的函数才会再次执行;
```
const name = ref("why");
const age = ref(18);

watchEffect(() => {
    console.log("watchEffect执行~", name.value, age.value);
})
```  
- watchEffect停止侦听
```
// 收集里面的响应式对象
const stop = watchEffect(() => {
    console.log("name", name.value, "age", age.value);
})

const changeName = () => name.value = "kobe"
const changeAge = () => {
    age.value++;
    if(age.value > 25) stop();
}
```  
- watchEffect清除副作用
> 什么是清除副作用呢?
>> 比如在开发中我们需要再侦听函数中执行网络请求, 但是在网络请求还没有达到的时候, 我们停止了侦听器,或者侦听器侦听函数被再次执行了.
>> 那么上一次的网络请求应该被取消掉, 这个时候我们就可以清除上一次的副作用;
> 在我们给watchEffect传入的函数被回调时, 其实可以获取到一个参数: `onInvalidate`;
>> 当`副作用即将重新执行`或者`侦听器被停止`时会执行该函数传入的回调函数;
>> 我们可以在传入的回调函数中, 执行一些清除工作;
```
const stopWatch = watchEffect((onInvalidate) => {
    console.log("watchEffect执行~", name.value, age.value);
    const timer = setTimeout(() => {
        console.log("网络请求成功");
    }, 2000);
    onInvalidate(() => {
        clearTimeout(timer);
    });
});
```  
- watchEffect 执行时机
> 如果我们希望在第一次的时候就打印出来对应的元素?
>> 这个时候需要改变副作用函数的执行时机;
>> 他的默认值是`pre`,它会在元素挂载 或者 更新 之前执行;
>> 所以我们会先打印出来一个空的, 当依赖的title发生改变时, 就会再次执行一次, 打印出元素;
> 我们可以设置副作用函数的执行时机:
```
watchEffect(() => {
    console.log(title.value);
}, {
    flush: "post" // pre: 提前执行; 
})
```  
> `flush`选项还接受 sync, 这将强制效果始终同步触发, 然而, 这是低效的, 应该很少需要.

# watch的使用

* watch的API完全等同于组件watch选项的Property:
- watch需要侦听特定的数据源, 并在回调函数中执行副作用;
- 默认情况下它是惰性的,只有当被侦听的源发生变化时才会执行回调;

* 与watchEffect的比较,watch允许我们:
- 懒执行副作用(第一次不会直接执行);
- 更具体的说明当哪些状态发生变化时,触发侦听器的执行;
- 访问侦听状态变化前后的值;

* 侦听单个数据源:watch侦听函数的数据源有两种类型:
- 一个Getter函数: 但是该getter函数必须引用可响应式的对象(比如reactive或者ref);
- 直接写入一个可可响应式的对象, reactive或者ref(比较常用的是ref);

* 侦听多个数据源: 数组

* 侦听响应对象
- 如果我们希望侦听一个数据或者对象, 那么可以使用一个getter函数, 并且对可响应对象进行解构:
```
const names = reactive(["abc", "cba", "nba"]);
watch(() => [...names], (newVal, oldVal) => {
    console.log(newVal, oldVal);
})
const changeName = () => {
    names.push("why");
}
```  

* watch的选项
- 如果我们希望侦听一个深层的侦听, 那么依然需要设置 deep 为 true:
- 也可以传入 immediate 立即执行
```
const state = reactive({
    name: "why",
    age: 18,
    friend: {
        name: "kobe"
    }
})

watch(() => state, (newVal, oldVal) => {
    console.log(newVal, oldVal);
}, {
    deep: true,
    immediate: true
})

const changename = () => {
    state.friend.name = "aaa";
}
```  
