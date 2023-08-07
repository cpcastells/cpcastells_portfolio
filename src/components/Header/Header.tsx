"use client";

import React, { useState } from "react";
import Logo from "../Logo/Logo";
import CustomLink from "../CustomLink/CustomLink";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "../Icons/Icons";
import { motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";
import CustomMobileLink from "../CustomMobileLink/CustomMobileLink";

const Header = () => {
  const [mode, setMode] = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-1"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href={"https://github.com/cpcastells"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
            aria-label="github icon"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href={"https:/linkedin.com/in/carlespueyodeveloper"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            aria-label="linkedin icon"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              title="Home"
              href={"/"}
              toggleOpen={handleClick}
            />
            <CustomMobileLink
              title="About"
              href={"/about"}
              toggleOpen={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggleOpen={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              toggleOpen={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href={"https://github.com/cpcastells"}
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 bg-light rounded-full dark:bg-dark"
              aria-label="github icon"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"https:/linkedin.com/in/carlespueyodeveloper"}
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
              aria-label="linkedin icon"
            >
              <LinkedInIcon />
            </motion.a>
            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
