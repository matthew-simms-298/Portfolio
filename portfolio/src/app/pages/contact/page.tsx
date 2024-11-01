"use client";

import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-base-200 text-base-content flex flex-row justify-between p-10 scroll-smooth">
      <h1 className="text-4xl font-serif">
        {"Let's"} make your dream a reality.
      </h1>
      <ContactForm/>
    </main>
  );
}
