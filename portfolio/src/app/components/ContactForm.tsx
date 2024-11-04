"use client";

import { useRef, useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

// ENVIRONMENT VARIABLES
const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

export default function ContactForm() {
  const [status, setStatus] = useState(false);
  const [visible, setVisible] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  function sendEmail(event: React.FormEvent) {
    event.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current as HTMLFormElement, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus(true);
        form.current?.reset();
        
        // Show the message and set it to fade out after a few seconds
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
      },
      (error) => {
        console.log("FAILED...", error);
        setStatus(false);

        // Show the message and set it to fade out after a few seconds
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
      }
    );
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-base-100 flex flex-col w-full xl:w-2/5 p-10 justify-between rounded">
      <div>
        <p className="italic">{'"*"'} means it is a required field</p>
        {/* FIRST + LAST NAME */}
        <div className="flex flex-col xl:flex-row justify-between my-3 w-full">
          <input
            className="xl:w-1/2 border outline-none border-base-content text-base-content mb-6 xl:mb-0 placeholder-base-content p-5 text-sm bg-base-100 xl:mr-3 transition duration-500 focus:text-white focus:placeholder-white focus:border-white hover:border-white placeholder:transition placeholder:duration-500 hover:placeholder-white hover:text-white"
            type="text"
            required
            placeholder="First Name *"
            name="first_name"
          ></input>
          <input
            className="xl:w-1/2 border outline-none border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 xl:ml-3 transition duration-500 focus:text-white focus:placeholder-white hover:border-white focus:border-white placeholder:transition placeholder:duration-500 hover:placeholder-white hover:text-white"
            type="text"
            required
            placeholder="Last Name *"
            name="last_name"
          ></input>
        </div>
        {/* EMAIL ADDRESS */}
        <input
          className="w-full outline-none border border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 my-3 transition duration-500 focus:text-white focus:placeholder-white hover:border-white focus:border-white placeholder:transition placeholder:duration-500 hover:placeholder-white hover:text-white"
          type="email"
          required
          placeholder="Email *"
          name="user_email"
        ></input>
        {/* EMAIL SUBJECT */}
        <input
          className="w-full border outline-none border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 my-3 transition duration-500 focus:text-white focus:placeholder-white hover:border-white focus:border-white placeholder:transition placeholder:duration-500 hover:placeholder-white hover:text-white"
          type="text"
          required
          placeholder="Subject *"
          name="subject"
        ></input>
        {/* EMAIL MESSAGE CONTENT */}
        <textarea
          className="resize-none break-words outline-none h-52 w-full border border-base-content text-base-content placeholder-base-content p-5 text-sm bg-base-100 my-3 transition duration-500 focus:text-white focus:placeholder-white hover:border-white focus:border-white placeholder:transition placeholder:duration-500 hover:placeholder-white hover:text-white"
          required
          placeholder="Enter your message here *"
          name="message"
        ></textarea>

        {/* Success or Error Message with Tailwind animations */}
        <p
          className={`text-center transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          } ${status === true ? "text-success" : "text-error"}`}
        >
          {status === true ? "Your submission was successful!" : "Your submission failed, please try again..."}
        </p>
      </div>
      <input
        type="submit"
        placeholder="Send"
        value="Send"
        className="btn btn-outline h-16 w-full border rounded-none duration-500"
      ></input>
    </form>
  );
}
