import "@testing-library/jest-dom";
import FeaturedProject from "./FeaturedProject";
import collectopia from "../../../public/images/projects/collectopia.webp";
import { render, screen } from "@testing-library/react";

describe("Given a FeaturedProject component", () => {
  describe("When it renders", () => {
    test("Then it should show a picture of'collectopia'", () => {
      const expectedText = /collectopia/i;

      render(
        <FeaturedProject
          github="https://github.com/cpcastells/collectopia_FRONT"
          title="Collectopia"
          link="https://collectopia.netlify.app/login"
          summary="Collectopia is a board game collection management Single Page Application built with React and Redux. It allows users to keep track of their board game collections by adding, removing, and modifying board games."
          type="Featured project"
          img={collectopia}
        />
      );

      const heading = screen.getByAltText(expectedText);

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a heading with the text'collectopia'", () => {
      const expectedText = /collectopia/i;

      render(
        <FeaturedProject
          github="https://github.com/cpcastells/collectopia_FRONT"
          title="Collectopia"
          link="https://collectopia.netlify.app/login"
          summary="Collectopia is a board game collection management Single Page Application built with React and Redux. It allows users to keep track of their board game collections by adding, removing, and modifying board games."
          type="Featured project"
          img={collectopia}
        />
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a Link with the text 'Visit project'", () => {
      const expectedText = /visit project/i;

      render(
        <FeaturedProject
          github="https://github.com/cpcastells/collectopia_FRONT"
          title="Collectopia"
          link="https://collectopia.netlify.app/login"
          summary="Collectopia is a board game collection management Single Page Application built with React and Redux. It allows users to keep track of their board game collections by adding, removing, and modifying board games."
          type="Featured project"
          img={collectopia}
        />
      );

      const link = screen.getByRole("link", { name: expectedText });

      expect(link).toBeInTheDocument();
    });
  });
});
