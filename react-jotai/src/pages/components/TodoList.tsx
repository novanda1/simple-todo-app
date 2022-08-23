import { Label, Radio } from "flowbite-react";
import { useAtom } from "jotai";
import { filterAtom, filteredAtom } from "..";
import TodoItem from "./TodoItem";

type Props = {
  title: string;
  remove: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ title, remove }) => {
  const [todos] = useAtom(filteredAtom);
  const [_, set] = useAtom(filterAtom);

  return (
    <div>
      <h4 className="font-bold text-2xl mb-4">{title}</h4>
      <form
        className="flex gap-4 mb-10"
        id="radio"
        onChange={(e: any) => set(e.target.value)}
      >
        <legend>Filter </legend>
        <div className="flex items-center gap-2">
          <Radio id="all" name="filter" value="all" defaultChecked={true} />
          <Label htmlFor="all">All</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="completed" name="filter" value="completed" />
          <Label htmlFor="completed">Completed</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="not-completed" name="filter" value="Not Completed" />
          <Label htmlFor="not-completed">Not Completed</Label>
        </div>
      </form>
      <ul>
        {todos.map((item) => (
          <TodoItem id={item.id} remove={remove} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
