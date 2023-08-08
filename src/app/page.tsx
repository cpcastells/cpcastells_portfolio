import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import room from "../../public/images/room.webp";
import AnimatedText from "@/components/AnimatedText/AnimatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe/HireMe";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full dark:text-light">
      <Layout className="pt-0 md:p-16 xl:pt-0 sm:pt-8">
        <AnimatedText
          text="Hi! I'm"
          className="text-6xl mt-16 text-center xl:text-5xl lg:text-6xl md:mt-12 sm:text-3xl sm:mt-7"
        ></AnimatedText>
        <AnimatedText
          text="Carles Pueyo"
          className="text-8xl text-[#6495EC] dark:text-primaryDark inline text-center mb-16 xl:text-6xl lg:text-6xl md:mb-12 
          sm:text-4xl sm:mb-7"
        ></AnimatedText>
        <div className="flex items-center justify-between w-full gap-10 lg:flex-col">
          <div className="w-1/2 flex flex-col items-start lg:w-full lg:text-center lg:items-center">
            <p className="my-4 text-lg font-medium md:text-base">
              As a full-stack developer, my portfolio features a variety of
              projects, with a primary focus on React development.
            </p>
            <p className="my-4 text-lg font-medium md:text-base">
              Explore my work to see the creative applications I&apos;ve built.
            </p>
            <p className="my-4 text-lg font-medium md:text-base">
              Don&apos;t hesitate to reach out for collaboration or any
              questions you may have.
            </p>
            <div className="flex items-center self-start pt-[15px] gap-5 lg:self-center">
              <Link
                href="/cv.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                hover:text-dark border-2 border-solid border-transparent hover:border-dark 
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base"
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
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-1/2 md:w-full">
            <Image
              src={room}
              alt={"geek room"}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              className="w-[60%] h-auto md:inline-block lg:w-full"
            ></Image>
          </div>
        </div>
      </Layout>
      <HireMe />
    </main>
  );
}
