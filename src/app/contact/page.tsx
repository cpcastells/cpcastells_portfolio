import AnimatedText from "@/components/AnimatedText/AnimatedText";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import Layout from "@/components/Layout/Layout";
import React from "react";

const serviceId = process.env.SERVICE as string;
const templateId = process.env.TEMPLATE as string;
const publicKey = process.env.PUBLIC_KEY as string;

const page = (): React.ReactElement => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <Layout className="pt-16 flex flex-col items-center">
        <AnimatedText
          text="Contact"
          className="text-8xl mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
        />
        <ContactForm
          publicKey={publicKey}
          serviceId={serviceId}
          templateId={templateId}
        />
      </Layout>
    </main>
  );
};

export default page;
