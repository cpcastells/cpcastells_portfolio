"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const ContactForm = ({
  publicKey,
  serviceId,
  templateId,
}: ContactFormProps) => {
  const form = useRef(null);

  const sendEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentForm = form.current;

    if (currentForm === null) return;

    emailjs.sendForm(serviceId, templateId, currentForm, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div
      className="w-full relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
          dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
    >
      <div className="absolute top-1 -right-[1.1rem] -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light" />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-center gap-3"
      >
        <div className="w-full flex flex-col gap-2 pt-5">
          <label
            htmlFor="username"
            className="font-semibold dark:text-primaryDark"
          >
            Name:{" "}
          </label>
          <input
            type="text"
            id="username"
            name="user_name"
            className="p-3 rounded-lg border border-solid border-dark"
          />
        </div>
        <div className="w-full flex flex-col gap-2 pt-5">
          <label
            htmlFor="email"
            className="font-semibold dark:text-primaryDark"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="p-3 rounded-lg border border-solid border-dark"
          />
        </div>
        <div className="w-full flex flex-col gap-2 pt-5">
          <label
            htmlFor="message"
            className="font-semibold dark:text-primaryDark"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="h-72 p-4 rounded-lg border border-solid border-dark"
          />
        </div>
        <button
          type="submit"
          value="Send"
          className="rounded-lg mt-5 p-2 px-6 font-semibold text-light border bg-dark dark:text-dark dark:bg-light"
        >
          Send
        </button>
      </form>
    </div>
  );
};
