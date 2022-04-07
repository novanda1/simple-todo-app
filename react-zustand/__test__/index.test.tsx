import React from "react";
import { render, screen } from "./test-utils";
import Todo from "../src/components/Todo";

describe("TodoPage", () => {
  it("should render the heading", () => {
    render(<Todo />);

    const heading = screen.getByRole("heading", {
      name: /Todo List/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
