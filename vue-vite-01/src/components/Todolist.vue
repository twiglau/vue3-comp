<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<script setup>
// 1. 在 <script setup> 标签内定义的变量和函数, 都可以在模版中直接使用.
// 2. 可以使用 Composition API 的逻辑来拆分代码, 把一个功能相关的数据和方法都维护在一起.
import { ref, computed } from "vue";
let title = ref("");
let todos = ref([{ title: "学习Vue", done: false }]);

const addTodo = () => {
  todos.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
};
const clear = () => {
  todos.value = todos.value.filter((v) => !v.done);
};
const active = computed(() => {
  return todos.value.filter((v) => !v.done).length;
});
const all = computed(() => todos.value.length);
const allDone = computed({
  get: function () {
    return active.value == 0;
  },
  set: function (value) {
    todos.value.forEach((todo) => {
      todo.done = value;
    });
  },
});
</script>

<style scoped>
h1 {
  color: red;
}
.done {
  text-decoration: line-through;
}
</style>
