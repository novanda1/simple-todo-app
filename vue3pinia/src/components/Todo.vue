<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useTodoStore } from "../stores/todo";

export default defineComponent({
  setup() {
    const store = useTodoStore();
    const input = ref("");
    const errorMessage = ref("");

    function handleSubmit(e: Event) {
      e.preventDefault();

      if (input.value) {
        store.createTodo(input.value);
        input.value = "";
      } else {
        errorMessage.value = "Calm! fill the input field first :)";
      }
    }

    watchEffect(() => {
      if (errorMessage.value !== "" && input.value !== "") {
        errorMessage.value = "";
      }
    });

    return {
      store,
      input,
      errorMessage,

      handleSubmit,
    };
  },
});
</script>


<template>
  <div class="flex flex-col gap-4">
    <form @submit="handleSubmit">
      <div class="rounded-sm overflow-hidden w-max">
        <input
          placeholder="Add new todo"
          type="text"
          v-model="input"
          class="text-emerald-800 px-3 py-2"
        />
        <button type="submit" class="px-5 py-2 bg-emerald-500">Add</button>
      </div>
      <span class="text-sm text-emerald-400" v-if="errorMessage !== ''">{{
        errorMessage
      }}</span>
    </form>

    <div>
      <h4 class="font-bold text-2xl mb-4">Todo List</h4>
      <ul>
        <li
          class="flex my-2 space-x-4"
          v-for="todo in store.todos"
          :key="todo.id"
        >
          <label class="items-center flex">
            <input
              type="checkbox"
              class="peer hidden"
              v-model="todo.completed"
            />
            <span
              class="
                mr-2
                peer-checked:bg-emerald-400
                w-5
                h-5
                bg-white
                rounded-md
                transition-colors
                ease-in-out
                duration-500
              "
            ></span>
            <span
              class="font-medium text-xl"
              :class="{ 'line-through': todo.completed }"
            >
              {{ todo.task }}
            </span>
          </label>
          <button class="" @click="store.removeTodo(todo)">[x]</button>
        </li>
      </ul>
    </div>
  </div>
</template>