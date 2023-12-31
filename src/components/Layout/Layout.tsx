import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const Layout = ({
  children,
  className = "",
}: LayoutProps): React.ReactElement => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 max-w-[1440px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
