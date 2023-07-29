import React from "react";
import Layout from "../Layout/Layout";
import Link from "next/link";

const Footer = (): React.ReactElement => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With<span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://github.com/cpcastells"
            className="underline underline-offset-2"
            target="_blank"
          >
            Carles Pueyo
          </Link>
        </div>
        <Link href="/" className="underline underline-offset-2" target="_blank">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
