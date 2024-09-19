"use client";
import Image from "next/image";
export default function TechStack() {
  return (
    <div id="tech-stack" className="flex flex-col items-center mt-20 text-center">
      <h2 className="text-4xl italic font-serif font-thin mb-5">
        This {"Website's"} Tech Stack
      </h2>
      <div className="flex flex-row items-center justify-center mt-5 flex-wrap">
        <a href="https://tailwindcss.com" target="_blank">
          <Image
            className="rounded-lg m-5 hover:scale-150 transition duration-300"
            src="/images/tailwindcss-logo.png"
            alt="TailwindCSS Logo"
            height={100}
            width={100}
          />
        </a>
        <a href="https://daisyui.com" target="_blank">
          <Image
            className="rounded-lg m-5 hover:scale-150 transition duration-300"
            src="/images/daisyui-logo.jpg"
            alt="DaisyUI Logo"
            height={100}
            width={100}
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <Image
            className="rounded-lg m-5 hover:scale-150 transition duration-300"
            src="/images/react-logo.png"
            alt="React logo"
            height={100}
            width={100}
          />
        </a>
        <a href="https://nextjs.org" target="_blank">
          <Image
            className="rounded-lg m-5 hover:scale-150 transition duration-300"
            src="/images/nextjs-logo.png"
            alt="Next.JS Logo"
            height={100}
            width={100}
          />
        </a>
        <a href="https://vercel.com" target="_blank">
          <Image
            className="rounded-lg m-5 hover:scale-150 transition duration-300"
            src="/images/vercel-logo.png"
            alt="Vercel Logo"
            height={100}
            width={100}
          />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
          <Image
            className="rounded-lg m-5 hover:scale-150 transition duration-300"
            src="/images/typescript.png"
            alt="Typescript Logo"
            height={100}
            width={100}
          />
        </a>
      </div>
    </div>
  );
}
