import useTodoStore, { Todo } from "../store/todo";

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggleCompleted, removeTodo } = useTodoStore();

  return (
    <li
      className="flex my-2 space-x-4"
      v-for="todo in store.todos"
      key={todo.id}
    >
      <label className="items-center flex">
        <input
          type="checkbox"
          className="peer hidden"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo)}
        />
        <span
          className="
                mr-2
                peer-checked:bg-emerald-400
                w-5
                h-5
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
      <button className="" onClick={() => removeTodo(todo)}>
        [x]
      </button>
    </li>
  );
};

export default TodoItem;
