"use client";

import React from "react";
import Logo from "../Logo/Logo";
import CustomLink from "../CustomLink/CustomLink";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "../Icons/Icons";
import { motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";

const Header = () => {
  const [mode, setMode] = useTheme();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
          className="w-6 mr-3"
          aria-label="linkedin icon"
        >
          <LinkedInIcon />
        </motion.a>
        <button
          className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 text-sm duration-200`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "light" ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
