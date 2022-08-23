import { atom, useAtom, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { FormEvent } from "react";
import { TodoForm } from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";

type Todo = { id: string; title?: string; completed?: boolean };

const initialData: Todo[] = [
  {
    id: "1",
    title: "Make a coffea",
  },
  {
    id: "2",
    title: "Learn Jotai",
  },
];

export const filterAtom = atom("all");
export const todosAtom = atom<Todo[]>(initialData);
export const filteredAtom = atom((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === "all") return todos;
  else if (filter === "completed")
    return todos.filter((item) => item.completed);
  else return todos.filter((item) => !item.completed);
});
export const getTodoItem = (id: string) =>
  atom((get) => {
    get(todosAtom);
  });

export default function Home() {
  const setTodos = useSetAtom(todosAtom);
  const remove = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputTitle.value = "";
    const id = nanoid();
    setTodos((prev) => [...prev, { title, id, completed: false }]);
  };

  return (
    <div className="h-full min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4">
        <TodoForm add={add} />
        <TodoList title="Todo List" remove={remove} />
      </div>
    </div>
  );
}
