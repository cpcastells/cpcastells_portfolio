"use client";
import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  x: string;
  y: string;
  text: string;
}

const Skill = ({ x, y, text }: SkillProps): React.ReactElement => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      {text}
    </motion.div>
  );
};

const Skills = (): React.ReactElement => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-40 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill text="CSS" x="-5vw" y="-10vw" />
        <Skill text="Node.js" x="-20vw" y="2vw" />
        <Skill text="Typescript" x="20vw" y="6vw" />
        <Skill text="React" x="0vw" y="12vw" />
        <Skill text="MongoDB" x="-20vw" y="-15vw" />
        <Skill text="Figma" x="15vw" y="-12vw" />
        <Skill text="Styled-components" x="32vw" y="-5vw" />
        <Skill text="Tailwind" x="0vw" y="-20vw" />
        <Skill text="Express.js" x="-25vw" y="18vw" />
        <Skill text="Next.js" x="17vw" y="20vw" />
      </div>
    </>
  );
};

export default Skills;