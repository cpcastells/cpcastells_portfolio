import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Given a Logo component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text CP", () => {
      const expectedText = "cp";

      render(<Logo />);

      const text = screen.getByRole("link", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
