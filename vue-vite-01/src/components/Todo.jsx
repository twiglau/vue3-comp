import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup(props) {
        const title = ref('')
        const todos = ref([{ title: '学习 Vue3', done: true}, { title: '睡觉', done: false }])

        const addTodo = () => {
            todos.value.push({
                title: title.value
            })
            title.value = ''
        }

        return () => <div>
            <input type='text' vModel={title.value} />
            <button onClick={addTodo}>add</button>
            <ul>
                {
                    todos.value.length ? todos.value.map(todo => {
                        return <li>{todo.title}</li>
                    }): <li> no data </li>
                }
            </ul>
        </div>
    }
})