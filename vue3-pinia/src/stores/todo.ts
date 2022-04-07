import { defineStore } from "pinia";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  nextId: number;
};

export const useTodoStore = defineStore("todo", {
  state: (): State => ({
    todos: [
      {
        id: 1,
        task: "Go to cafe",
        completed: true,
      },
      {
        id: 2,
        task: "Order Coffee",
        completed: false,
      },
      {
        id: 3,
        task: "Learn Pinia",
        completed: false,
      },
    ],
    nextId: 4,
  }),
  getters: {
    /**
     * Get all completed todo
     *
     * @returns [Todo]
     */
    completedTodo: (state) =>
      state.todos.filter((todo) => todo.completed === true),

    /**
     * Get all NOT completed todo
     *
     * @returns [Todo]
     */
    unCompletedTodo: (state) =>
      state.todos.filter((todo) => todo.completed === false),
  },
  actions: {
    toggleComplete(todo: Todo) {
      const selectedTodo = this.todos.find((td) => td === todo);
      if (selectedTodo) selectedTodo.completed = !todo.completed;
    },
    createTodo(task: string) {
      this.todos.unshift({ id: this.nextId++, task, completed: false });
    },
    removeTodo(todo: Todo) {
      if (this.todos.indexOf(todo) >= 0)
        this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
});
