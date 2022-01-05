import { createStore } from "vuex";
import todoModule, { ITodoState } from "./todo";

export const store = createStore<ITodoState>({
  modules: {
    todoModule,
  },
});
