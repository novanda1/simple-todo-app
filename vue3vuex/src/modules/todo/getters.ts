import { GetterTree } from "vuex";
import { ITodoState, Todo } from ".";

export type TodoGetters = {
  completedTodo: (state: ITodoState) => Todo[];
  unCompletedTodo: (state: ITodoState) => Todo[];
};

export const todoGetters: GetterTree<ITodoState, ITodoState> & TodoGetters = {
  completedTodo: (state: ITodoState) => {
    return state.todo.filter((todo) => todo.completed === true);
  },
  unCompletedTodo: (state: ITodoState) => {
    return state.todo.filter((todo) => todo.completed === false);
  },
};
