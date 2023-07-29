import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'carles pueyo", () => {
      const expectedText = /carles pueyo/i;

      render(<Footer />);

      const text = screen.getByRole("link", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
