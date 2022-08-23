import { ChangeEvent, FormEvent, useState } from "react";
import useTodoStore from "../store/todo";

const useForm = () => {
  const { addTodo, todos } = useTodoStore();
  const [input, setInput] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return { input, handleChange, handleSubmit, errorMessage, setErrorMessage };
};

export default useForm;
