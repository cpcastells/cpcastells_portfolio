import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HireMe from "./HireMe";

describe("Given a HireMe component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'email", () => {
      const expectedText = /email/i;

      render(<HireMe />);

      const text = screen.getByRole("link", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
