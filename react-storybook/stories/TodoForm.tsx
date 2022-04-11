import useForm from "../hooks/useForm";

export const TodoForm: React.VFC = () => {
  const { input, handleChange, handleSubmit, errorMessage } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="rounded-sm overflow-hidden w-max">
          <input
            placeholder="Add new todo"
            type="text"
            value={input}
            onChange={handleChange}
            className="text-emerald-800 px-3 py-2"
          />
          <button type="submit" className="px-5 py-2 bg-emerald-500">
            Add
          </button>
        </div>
        {!!errorMessage && (
          <span className="text-sm text-emerald-400">
            {{
              errorMessage,
            }}
          </span>
        )}
      </form>
    </div>
  );
};
