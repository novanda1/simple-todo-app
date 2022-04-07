<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue'
import { Todo, useTodoStore } from '../modules/todo/'
import { TodoMutationType } from '../modules/todo/mutations'


export default defineComponent({
    setup(props) {
        const input = ref("")
        const store = useTodoStore()


        watchEffect(() => {
            console.log(store.getters.completedTodo)
        })

        return {
            input,
            completedTodoList: computed(() => store.getters.completedTodo),
            notCompletedTodoList: computed(() => store.getters.unCompletedTodo),
            addTodo: () => store.commit(TodoMutationType.CREATE_TODO, input.value),
            setTodoCompleted: (todo: Todo) => store.commit(TodoMutationType.SET_TODO_COMPLETED, todo),
            removeTodo: (todo: Todo) => store.commit(TodoMutationType.REMOVE_TODO, todo),
        };
    },
})
</script>


<template>
    <div>
        <input v-model="input" />
        <button @click="addTodo">ADD</button>
        <div>
            <b>Todo:</b>
            <div v-for="todo in notCompletedTodoList" :key="todo.id">
                {{ todo.task }}
                <button @click="setTodoCompleted(todo)">Complete</button>
            </div>
        </div>

        <div>
            <b>Done:</b>
            <div v-for="todo in completedTodoList" :key="todo.id">
                {{ todo.task }}
                <button @click="removeTodo(todo)">Delete</button>
                <button @click="setTodoCompleted(todo)">Restore</button>
            </div>
        </div>
    </div>
</template>