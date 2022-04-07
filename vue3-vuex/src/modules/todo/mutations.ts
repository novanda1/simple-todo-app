import { MutationTree } from "vuex";
import { ITodoState, Todo } from ".";

export enum TodoMutationType {
  CREATE_TODO = "CREATE_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  SET_TODO_COMPLETED = "SET_TODO_COMPLETED",
}

export type TodoMutations<S = ITodoState> = {
  [TodoMutationType.CREATE_TODO](state: S, task: string): any;
  [TodoMutationType.REMOVE_TODO](state: S, todo: Todo): any;
  [TodoMutationType.SET_TODO_COMPLETED](state: S, todo: Todo): any;
};

export const todoMutations: MutationTree<any> & TodoMutations = {
  [TodoMutationType.CREATE_TODO]: (state: ITodoState, task: string) => {
    return (state.todo = [
      ...state.todo,
      { id: Math.random(), task, completed: false },
    ]);
  },
  [TodoMutationType.REMOVE_TODO]: (state: ITodoState, todo: Todo) => {
    return (state.todo = state.todo.filter((t) => t !== todo));
  },
  [TodoMutationType.SET_TODO_COMPLETED]: (state: ITodoState, todo: Todo) => {
    return (state.todo.filter((t) => t === todo)[0].completed =
      !todo.completed);
  },
};
