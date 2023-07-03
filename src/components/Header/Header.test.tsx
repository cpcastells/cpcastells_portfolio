import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logo with CP", () => {
      const expectedText = "cp";

      render(<Header />);

      const logoText = screen.getByRole("link", { name: expectedText });

      expect(logoText).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a github icon", () => {
      const expectedLabelText = "github icon";

      render(<Header />);

      const icon = screen.getByLabelText(expectedLabelText);

      expect(icon).toBeInTheDocument();
    });
  });

  describe("When it is rendered", () => {
    test("Then it should show a linkedin icon", () => {
      const expectedLabelText = "linkedin icon";

      render(<Header />);

      const icon = screen.getByLabelText(expectedLabelText);

      expect(icon).toBeInTheDocument();
    });
  });
});
