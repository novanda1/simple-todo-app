import { FormEvent, useEffect, useState } from "react";
import useTodoStore from "../../store/todo";

const Todo: React.FC = () => {
  const todoStore = useTodoStore();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [input, setInput] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (input === "") {
      setErrorMessage("Calm! fill the input field first :)");
    } else {
      todoStore.addTodo(input);
      setInput("");
    }
  }

  useEffect(() => {
    if (errorMessage !== "" && input !== "") {
      setErrorMessage("");
    }
  }, [setErrorMessage, errorMessage, input]);

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-bold text-2xl mb-4">Todo List</h4>

      <form onSubmit={handleSubmit}>
        <div className="rounded-sm overflow-hidden w-max border">
          <input
            placeholder="Add new todo"
            type="text"
            className="text-emerald-800 px-3 py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="px-5 py-2 bg-emerald-500">
            Add
          </button>
        </div>
        <span className="text-sm text-emerald-400">{errorMessage}</span>
      </form>

      <ul>
        {todoStore.todos.map((todo) => (
          <li className="flex my-2 space-x-4" key={todo.id}>
            <label className="items-center flex">
              <input
                type="checkbox"
                className="peer hidden"
                checked={todo.completed}
                onChange={() => todoStore.toggleCompleted(todo)}
              />
              <span
                className="
                mr-2
                peer-checked:bg-emerald-400
                w-5
                h-5
                border
                bg-white
                rounded-md
                transition-colors
                ease-in-out
                duration-500
              "
              ></span>
              <span
                className={`font-medium text-xl ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.task}
              </span>
            </label>
            <button onClick={() => todoStore.removeTodo(todo)}>[x]</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
