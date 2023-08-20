import React from "react";
import { CircularText } from "../Icons/Icons";
import Link from "next/link";

const HireMe = (): React.ReactElement => {
  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center overflow-hidden lg:right-6 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative lg:w-24">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href="mailto: cpcastells@gmail.com"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark 
          text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark 
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light lg:w-10 lg:h-10 lg:text-[10px] z-10"
        >
          Email
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
