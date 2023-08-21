"use client";

import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Layout from "@/components/Layout/Layout";
import collectopia from "../../../public/images/projects/collectopia.webp";
import packsplorer from "../../../public/images/projects/packsplorer.webp";
import portfolio from "../../../public/images/projects/portfolio.webp";
import splitify from "../../../public/images/projects/splitify.webp";
import FeaturedProject from "@/components/FeaturedProject/FeaturedProject";
import Project from "@/components/Project/Project";
import HireMe from "@/components/HireMe/HireMe";

const Projects = (): React.ReactElement => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              type="Side Project"
              img={packsplorer}
              summary="PackSplorer is an interactive, user-friendly application designed to aid in travel preparation. This application allows to create a personalized packing checklist for your trips."
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              github="https://github.com/cpcastells/splitify-react"
              title="Splitify"
              link="https://splitify-app.netlify.app/"
              type="Side Project"
              img={splitify}
              summary="A web app project for effortless management of shared expenses among friends. Track debts and credits with ease, keeping everyone on the same page."
            />
          </div>
          <div className="col-span-12">
            <FeaturedProject
              github="https://github.com/cpcastells/cpcastells_portfolio"
              title="Portfolio"
              link="https://carlespueyo.dev/"
              summary="Check out my personal portfolio built with Next.js and Tailwind CSS. Featuring responsive design and a sleek dark mode."
              type="Side-project"
              img={portfolio}
            />
          </div>
        </div>
      </Layout>
      {windowWidth <= 767 && <HireMe />}
    </main>
  );
};

export default Projects;
