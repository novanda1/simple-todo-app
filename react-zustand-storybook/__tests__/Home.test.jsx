import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a todo button", () => {
    render(<Home />);

    const button = screen.getByRole("button", {
      name: /add/i,
    });

    expect(button).toBeInTheDocument();
  });
  it("renders a todo heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /todo list/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
