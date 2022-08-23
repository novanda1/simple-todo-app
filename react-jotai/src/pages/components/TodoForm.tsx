import { atom, useAtom } from "jotai";
import { FormEvent } from "react";
import { nanoid } from "nanoid";
import { atomFamily } from "jotai/utils";

type Param = { id: string; title?: string };
const todoAtomFamily = atomFamily(
  (param: Param) =>
    atom({ title: param.title || "No title", completed: false }),
  (a: Param, b: Param) => a.id === b.id
);

export const TodoForm: React.VFC<{
  add: (e: FormEvent<HTMLFormElement>) => void;
}> = ({ add }) => {
  return (
    <div>
      <form onSubmit={add}>
        <div className="flex rounded-sm overflow-hidden w-max border border-blue-200">
          <input
            placeholder="Add new todo"
            type="text"
            name="inputTitle"
            className="text-blue-800 px-3 py-2 border-transparent active:border-blue-200"
          />
          <button type="submit" className="block px-5 py-2 bg-blue-100 font-medium">
            Add
          </button>
        </div>
        {/* {!!errorMessage && (
          <span className="text-sm text-blue-400">
            {{
              errorMessage,
            }}
          </span>
        )} */}
      </form>
    </div>
  );
};
