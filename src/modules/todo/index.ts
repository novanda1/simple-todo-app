import { InjectionKey } from "vue";
import { CommitOptions, DispatchOptions, Module, Store, useStore } from "vuex";
import { TodoActions, todoActions } from "./actions";
import { TodoGetters, todoGetters } from "./getters";
import { TodoMutations, todoMutations } from "./mutations";
import { todoState } from "./state";

export type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

export interface ITodoState {
  todo: Todo[];
}

const todoModule: Module<any, ITodoState> = {
  state: todoState,
  getters: todoGetters,
  mutations: todoMutations,
  actions: todoActions,
};

export type TodoStore = Omit<
  Store<ITodoState>,
  "getters" | "commit" | "dispatch"
> & {
  commit<
    K extends keyof TodoMutations,
    P extends Parameters<TodoMutations[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<TodoMutations[K]>;
} & {
  dispatch<K extends keyof TodoActions>(
    key: K,
    payload: Parameters<TodoActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<TodoActions[K]>;
} & {
  getters: {
    [K in keyof TodoGetters]: ReturnType<TodoGetters[K]>;
  };
};

export const key: InjectionKey<Store<ITodoState>> = Symbol();
export function useTodoStore(): TodoStore {
  return useStore(key);
}

export default todoModule;
