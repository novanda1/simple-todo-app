import { ITodoState } from ".";

export const todoState: ITodoState = {
  todo: [
    { id: 1, task: "Goto to cafe", completed: false },
    { id: 2, task: "Learn Vue 3 composition API", completed: true },
    { id: 3, task: "Feed fish", completed: true },
    { id: 4, task: "Make a cinematic video", completed: true },
    { id: 5, task: "Learn Pinia", completed: false },
  ],
};
