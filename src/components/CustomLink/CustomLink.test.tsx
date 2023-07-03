import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CustomLink from "./CustomLink";

describe("Given a CustomLink component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Home'", () => {
      const expectedText = "Home";

      render(<CustomLink href="/home" title="Home" className="" />);

      const text = screen.getByRole("link", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
