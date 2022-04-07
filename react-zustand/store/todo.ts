import create from "zustand";
import Todo from "../src/components/Todo";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
  nextId: number;
  addTodo: (task: string) => void;
  removeTodo: (todo: Todo) => void;
  toggleCompleted: (todo: Todo) => void;
};

const useTodoStore = create<TodoState>((set) => ({
  todos: [
    {
      id: 1,
      task: "Wash shoes",
      completed: true,
    },
    {
      id: 2,
      task: "Cook for dinner",
      completed: false,
    },
    {
      id: 3,
      task: "Exercise react code",
      completed: false,
    },
  ],
  nextId: 4,
  addTodo: (task: string) =>
    set((state) => {
      const todos = state.todos;
      todos.unshift({ task, id: state.nextId++, completed: false });
      return { todos };
    }),
  removeTodo: (todo: Todo) =>
    set((state) => {
      return { todos: state.todos.filter((td) => td.id !== todo.id) };
    }),
  toggleCompleted: (todo: Todo) =>
    set((state) => {
      const todos = state.todos;
      const index = todos.findIndex((td) => td === todo);

      const foundTodo = todos.find((td) => td === todo);
      if (foundTodo) {
        foundTodo.completed = !todo.completed;
        todos[index] = foundTodo;
      }

      return { todos };
    }),
}));

export default useTodoStore;
