import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Given a Home page", () => {
  describe("When it is rendered", () => {
    test("Then it should a heading with", () => {
      const expectedText = /carles pueyo/i;

      render(<Home />);

      const logoText = screen.getByRole("heading", { name: expectedText });

      expect(logoText).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a link with the text resume", () => {
      const expectedText = /resume/i;
      render(<Home />);

      const link = screen.getByRole("link", { name: expectedText });

      expect(link).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a linkedin icon", () => {
      const expectedText = /contact/i;
      render(<Home />);

      const link = screen.getByRole("link", { name: expectedText });

      expect(link).toBeInTheDocument();
    });
  });
});
