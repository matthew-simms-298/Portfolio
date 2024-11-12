"use client";

import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <main className="bg-base-200 flex-grow text-base-content flex flex-col xl:flex-row justify-around p-16 scroll-smooth">
      <h1 className="text-4xl font-serif mb-5">
        {"Let's"} Connect!
      </h1>
      <ContactForm/>
    </main>
  );
}
