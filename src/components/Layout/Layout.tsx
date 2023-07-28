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
    <div className={`w-full h-full inline-block z-0 bg-light p-32${className}`}>
      {children}
    </div>
  );
};

export default Layout;
