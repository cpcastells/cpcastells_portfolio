import "@testing-library/jest-dom";
import packsplorer from "../../../public/images/projects/packsplorer.webp";
import { render, screen } from "@testing-library/react";
import Project from "./Project";

describe("Given a Project component", () => {
  describe("When it renders", () => {
    test("Then it should show a picture of'Packsplorer'", () => {
      const expectedText = /packsplorer/i;

      render(
        <Project
          github="https://github.com/cpcastells/packsplorer-react"
          title="Packsplorer"
          link="https://packsplorer.netlify.app/"
          type="Web App"
          img={packsplorer}
        />
      );

      const heading = screen.getByAltText(expectedText);

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a heading with the text'Packsplorer'", () => {
      const expectedText = /packsplorer/i;

      render(
        <Project
          github="https://github.com/cpcastells/packsplorer-react"
          title="Packsplorer"
          link="https://packsplorer.netlify.app/"
          type="Web App"
          img={packsplorer}
        />
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a Link with the text 'Visit'", () => {
      const expectedText = /visit/i;

      render(
        <Project
          github="https://github.com/cpcastells/packsplorer-react"
          title="Packsplorer"
          link="https://packsplorer.netlify.app/"
          type="Web App"
          img={packsplorer}
        />
      );

      const link = screen.getByRole("link", { name: expectedText });

      expect(link).toBeInTheDocument();
    });
  });
});
