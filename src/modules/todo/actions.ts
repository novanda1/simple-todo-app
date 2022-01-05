import { ActionContext, ActionTree } from "vuex";
import { TodoMutations } from "./mutations";
import { ITodoState, Todo } from ".";

export enum TodoActionTypes {
  GET_TODO = "GET_TODO",
}

type AugmentedActionContext = {
  commit<K extends keyof TodoMutations>(
    key: K,
    payload: Parameters<TodoMutations[K]>[1]
  ): ReturnType<TodoMutations[K]>;
} & Omit<ActionContext<ITodoState, ITodoState>, "commit">;

export interface TodoActions {
  [TodoActionTypes.GET_TODO](
    { commit }: AugmentedActionContext,
    payload: null
  ): Promise<Todo[]>;
}

export const todoActions: ActionTree<ITodoState, ITodoState> = {
  [TodoActionTypes.GET_TODO]({ commit }) {},
};
