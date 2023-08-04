import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Projects from "./page";

describe("Given an About page", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with the text'Portfolio'", () => {
      const expectedText = /portfolio/i;

      render(<Projects />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with the text'collectopia'", () => {
      const expectedText = /collectopia/i;

      render(<Projects />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a picture of Collectopia project", () => {
      const expectedAltText = /collectopia/i;

      render(<Projects />);

      const picture = screen.getByAltText(expectedAltText);

      expect(picture).toBeInTheDocument();
    });
  });
});
