import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import room from "../../public/images/room.webp";

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
              className="max-w-[700px] w-full h-auto"
            ></Image>
          </div>
          <div className="w-1/2">
            <h1> &lt;Carles Pueyo/&gt;</h1>
            <p>
              As a full-stack developer, my portfolio features a variety of
              projects, with a primary focus on React development. Explore my
              work to see the creative applications I&aposve built. Don&apost
              hesitate to reach out for collaboration or any questions you may
              have.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
}
