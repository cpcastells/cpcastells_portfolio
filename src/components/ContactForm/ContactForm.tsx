"use client";

import React, { useRef, useState } from "react";
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
  const form = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentForm = form.current;

    if (currentForm === null) return;

    emailjs.sendForm(serviceId, templateId, currentForm, publicKey).then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
        currentForm.reset();
      },
      (error) => {
        setIsError(true);
        console.log(error.text);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
        currentForm.reset();
      }
    );
  };

  return (
    <div
      className="w-full relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
          dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
    >
      <div className="absolute top-1 -right-4 -z-10 w-[101%] h-[101%] rounded-[2rem] bg-dark dark:bg-light" />

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
          className="rounded-lg my-5 p-2 px-6 font-semibold text-light border bg-dark dark:text-dark dark:bg-light"
        >
          Send
        </button>
        {isError && (
          <div className="bg-red-200 p-4 rounded-lg">
            <p className="text-center text-lg font-bold text-red-700">
              Oops! Something went wrong. Please, try again later.
            </p>
          </div>
        )}
        {isSent && (
          <div className="bg-green-200 p-4 rounded-lg">
            <p className="text-center text-lg font-bold text-green-700">
              Your message has been successfully sent. Thank you for getting in
              touch!
            </p>
          </div>
        )}
      </form>
    </div>
  );
};
