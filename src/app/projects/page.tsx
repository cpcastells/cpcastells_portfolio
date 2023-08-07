import { Metadata } from "next";
import React from "react";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Layout from "@/components/Layout/Layout";
import collectopia from "../../../public/images/projects/collectopia.webp";
import packsplorer from "../../../public/images/projects/packsplorer.webp";
import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Project from "@/components/Project/Project";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Information about my portfolio's projects",
};

const Projects = (): React.ReactElement => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedText
          text="Portfolio"
          className="text-8xl mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
            <FeaturedProject
              github="https://github.com/cpcastells/collectopia_FRONT"
              title="Collectopia"
              link="https://collectopia.netlify.app/login"
              summary="Collectopia is a board game collection management Single Page Application built with React and Redux. It allows users to keep track of their board game collections by adding, removing, and modifying board games."
              type="Featured project"
              img={collectopia}
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              github="https://github.com/cpcastells/packsplorer-react"
              title="Packsplorer"
              link="https://packsplorer.netlify.app/"
              type="Web App"
              img={packsplorer}
            />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Projects;
