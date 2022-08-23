import { useAtom } from "jotai";
import { todosAtom } from "..";

const TodoItem: React.FC<{
  id: string;
  remove: (id: string) => void;
}> = ({ id, remove }) => {
  const [items, setItems] = useAtom(todosAtom);
  const index = items.findIndex((t) => t.id === id);
  const item = items[index];
  const toggleCompleted = () => {
    const newItems = items;
    newItems[index].completed = !newItems[index].completed;
    setItems([...newItems]);
  };

  return (
    <li className="flex my-2 space-x-4" key={id}>
      <label className="items-center flex">
        <input
          type="checkbox"
          className="peer hidden"
          checked={item.completed}
          onChange={toggleCompleted}
        />
        <span
          className="
                mr-2
                peer-checked:bg-blue-400
                w-5
                h-5
                bg-white
                border
                border-slate-400
                rounded-md
                transition-colors
                ease-in-out
                duration-500
              "
        ></span>
        <span
          className={`font-medium text-xl ${
            item.completed ? "line-through" : ""
          }`}
        >
          {item.title}
        </span>
      </label>
      <button className="" onClick={() => remove(id)}>
        [x]
      </button>
    </li>
  );
};

export default TodoItem;
