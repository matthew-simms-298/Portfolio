"use client";
import Image from "next/image";
export default function TechStack() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-4xl italic font-serif font-thin mb-5">
        Current Tech Stack
      </h2>
      <div className="flex items-center mt-5 flex-wrap">
        <Image
          className="rounded-lg mx-5 hover:scale-150 hover:transition"
          src="/daisyui-logo.jpg"
          alt="DaisyUI Logo"
          height={100}
          width={100}
        />
        <Image
          className="rounded-lg mx-5 hover:scale-150 hover:transition"
          src="/react-logo.png"
          alt="React logo"
          height={100}
          width={100}
        />
        <Image
          className="rounded-lg mx-5 hover:scale-150 hover:transition"
          src="/tailwindcss-logo.png"
          alt="TailwindCSS Logo"
          height={100}
          width={100}
        />
        <Image
          className="rounded-lg mx-5 hover:scale-150 hover:transition"
          src="/nextjs-logo.png"
          alt="Next.JS Logo"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
