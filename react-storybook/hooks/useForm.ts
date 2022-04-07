import { ChangeEvent, useState } from "react";

const useForm = () => {
  const [input, setInput] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {};

  return { input, handleChange, handleSubmit, errorMessage, setErrorMessage };
};

export default useForm;
