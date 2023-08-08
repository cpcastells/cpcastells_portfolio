"use client";

import { Metadata } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import profilePicture from "../../../public/images/cp.webp";
import Skills from "@/components/skills/Skills";
import HireMe from "@/components/HireMe/HireMe";

export const metadata: Metadata = {
  title: "Know about me",
  description: "Information about Carles Pueyo",
};

const About = () => {
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
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedText
          text="Discovering new horizons"
          className="text-8xl mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Biography
            </h2>
            <p className="font-medium">
              Greetings! I am Carles, a dedicated web developer with primary
              focus on React and Next.js. With a strong foundation in front-end
              technologies, I create dynamic and interactive web applications,
              bringing ideas to life through code.
            </p>
            <p className="my-4 font-medium">
              My area of knowledge extends to application testing, where I
              meticulously ensure the quality and functionality of the software
              I develop. By conducting thorough tests, I deliver robust and
              reliable solutions to meet user needs effectively.
            </p>
            <p className="font-medium">
              Passionate about creating intuitive user interfaces and enhancing
              user experiences through innovative development.
            </p>
          </div>

          <div
            className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
          dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
          >
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src={profilePicture}
              alt="Picture of Carles Pueyo"
              className="w-full h-auto rounded-2xl"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                1+
              </span>
              <h3
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg 
              sm:text-base xs:text-sm"
              >
                satisfied clients
              </h3>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                2+
              </span>
              <h3
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg 
              sm:text-base xs:text-sm"
              >
                projects completed
              </h3>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                1+
              </span>
              <h3
                className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg 
              sm:text-base xs:text-sm"
              >
                years of experience
              </h3>
            </div>
          </div>
        </div>
        <Skills />
      </Layout>
      {windowWidth <= 767 && <HireMe />}
    </main>
  );
};

export default About;
