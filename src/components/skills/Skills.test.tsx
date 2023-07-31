import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Given an Skills component", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });

    window.IntersectionObserver = mockIntersectionObserver;
  });

  describe("When it is rendered", () => {
    test("Then it should show a heading with the text'Skills'", () => {
      const expectedText = /skills/i;

      render(<Skills />);

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
