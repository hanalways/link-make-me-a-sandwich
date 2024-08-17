import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders the Search input", () => {
  render(<App />);

  expect(
    screen.getByPlaceholderText("Search for ingredients")
  ).toBeInTheDocument();
});
