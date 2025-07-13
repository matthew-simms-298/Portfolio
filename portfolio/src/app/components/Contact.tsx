"use client";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="flex-grow text-base-content flex flex-col xl:flex-row xl:justify-between scroll-smooth w-3/4 my-20 items-center">
      <h1 className="text-4xl font-serif mb-5 w-1/2 hidden xl:block text-center">
        {"Let's"} Connect!
      </h1>
      <ContactForm/>
    </div>
  );
}
