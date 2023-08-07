import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import Layout from "@/components/Layout/Layout";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import profilePicture from "../../../public/images/cp.webp";
import Skills from "@/components/skills/Skills";

export const metadata: Metadata = {
  title: "Know about me",
  description: "Information about Carles Pueyo",
};

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedText
          text="Discovering new horizons"
          className="text-8xl mb-16"
        />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="col-span-3 flex flex-col items-start justify-start">
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

          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src={profilePicture}
              alt="Picture of Carles Pueyo"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl font-bold">1+</span>
              <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                clients satisfied
              </h3>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl font-bold">2+</span>
              <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                projects completed
              </h3>
            </div>
            <div className="flex flex-col items-end justify-center">
              <span className="text-7xl font-bold">1+</span>
              <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                years of experience
              </h3>
            </div>
          </div>
        </div>
        <Skills />
      </Layout>
    </main>
  );
};

export default About;
