"use client";

import { usePathname, useRouter } from "next/navigation";
import router from "next/router";
import React from "react";

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className: string;
  toggleOpen: () => void;
}

const CustomMobileLink = ({
  href,
  title,
  className,
  toggleOpen,
}: CustomMobileLinkProps) => {
  const currentRoute = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggleOpen();
    router.push(href);
  };

  return (
    <button
      type="button"
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300 dark:bg-light
          ${currentRoute === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileLink;
