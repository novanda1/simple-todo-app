import useTodoStore from "../store/todo";
import { renderHook, act } from "@testing-library/react-hooks";

describe("addTodo", () => {
  const store = renderHook(() => useTodoStore());
  const current = store.result.current;
  const expected = [
    {
      id: 4,
      task: "three",
      completed: false,
    },
    {
      id: 1,
      task: "Wash shoes",
      completed: true,
    },
    {
      id: 2,
      task: "Cook for dinner",
      completed: false,
    },
    {
      id: 3,
      task: "Exercise react code",
      completed: false,
    },
  ];

  it("should add todo to the list", () => {
    act(() => {
      current.addTodo("three");
    });

    console.log("current.todos", current.todos);

    expect(current.todos).toEqual(expected);
  });
});
