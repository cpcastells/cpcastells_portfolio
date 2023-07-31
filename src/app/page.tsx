import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import room from "../../public/images/room.webp";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe/HireMe";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full gap-10">
          <div className="w-1/2 flex justify-center">
            <Image
              src={room}
              alt={"geek room"}
              priority={true}
              className="max-w-[500px] w-full h-auto"
            ></Image>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Carles Pueyo"
              className="text-7xl text-left"
            ></AnimatedText>
            <p className="my-4 text-lg font-medium">
              As a full-stack developer, my portfolio features a variety of
              projects, with a primary focus on React development. Explore my
              work to see the creative applications I&apos;ve built. Don&apos;t
              hesitate to reach out for collaboration or any questions you may
              have.
            </p>
            <div className="flex items-center self-start pt-[15px] gap-5">
              <Link
                href="/cv.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="w-6 h-auto ml-1"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                  />
                </svg>
              </Link>
              <Link
                href="mailto: cpcastells@gmail.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline "
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  );
}
