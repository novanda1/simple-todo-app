import useTodoStore from "../store/todo";
import TodoItem from "./TodoItem";

type Props = {
  title: string;
};

const TodoList: React.FC<Props> = ({ title }) => {
  const { todos } = useTodoStore();
  return (
    <div>
      <h4 className="font-bold text-2xl mb-4">{title}</h4>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
