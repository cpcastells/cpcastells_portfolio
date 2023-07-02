import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Given a app page component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'hello'", () => {
      const expectedText = "Hello world";

      render(<Home />);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
