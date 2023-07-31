import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "./page";

describe("Given an About page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text'discovering new horizons'", () => {
      const expectedText = /discovering new horizons/i;

      render(<About />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with the text'biography'", () => {
      const expectedText = /biography/i;

      render(<About />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a picture of Carles Pueyo", () => {
      const expectedAltText = /carles pueyo/i;
      render(<About />);

      const picture = screen.getByAltText(expectedAltText);

      expect(picture).toBeInTheDocument();
    });
  });
});
