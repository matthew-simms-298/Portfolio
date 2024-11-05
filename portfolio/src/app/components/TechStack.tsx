"use client";
import Image from "next/image";
export default function TechStack() {
  return (
    <div id="tech-stack" className="flex flex-col items-center mt-20 text-center">
      <h2 className="text-4xl italic font-serif font-thin mb-5">
        Tech Stack
      </h2>
      <div className="flex flex-row items-center justify-center mt-5 flex-wrap text-white">
        <a className="hover:scale-150 flex flex-col items-center transition-all duration-500 relative group" href="https://tailwindcss.com" target="_blank">
          <Image
            className="rounded-lg m-5 z-10 "
            src="/images/tailwindcss-logo.png"
            alt="TailwindCSS Logo"
            height={100}
            width={100}
          />
          <p className="absolute text-xs group-hover:text-md top-24 group-hover:top-32 duration-500">TailwindCSS</p>
        </a>
        <a className="hover:scale-150 flex flex-col items-center transition-all duration-500 relative group" href="https://daisyui.com" target="_blank">
          <Image
            className="rounded-lg m-5 z-10 "
            src="/images/daisyui-logo.jpg"
            alt="DaisyUI Logo"
            height={100}
            width={100}
          />
          <p className="absolute text-xs group-hover:text-md top-24 group-hover:top-32 duration-500">DaisyUI</p>
        </a>
        <a className="hover:scale-150 flex flex-col items-center transition-all duration-500 relative group" href="https://react.dev" target="_blank">
          <Image
            className="rounded-lg m-5 z-10"
            src="/images/react_logo.png"
            alt="React logo"
            height={100}
            width={100}
          />
          <p className="absolute text-xs group-hover:text-md top-24 group-hover:top-32 duration-500">React.JS</p>

        </a>
        <a className="hover:scale-150 flex flex-col items-center transition-all duration-500 relative group" href="https://nextjs.org" target="_blank">
          <Image
            className="rounded-lg m-5 z-10"
            src="/images/nextjs-logo.png"
            alt="Next.JS Logo"
            height={100}
            width={100}
          />
          <p className="absolute text-xs group-hover:text-md top-24 group-hover:top-32 duration-500">Next.JS</p>
        </a>
        <a className="hover:scale-150 flex flex-col items-center transition-all duration-500 relative group" href="https://vercel.com" target="_blank">
          <Image
            className="rounded-lg m-5 z-10"
            src="/images/vercel-logo.png"
            alt="Vercel Logo"
            height={100}
            width={100}
          />
          <p className="absolute text-xs group-hover:text-md top-24 group-hover:top-32 duration-500">Vercel</p>
        </a>
        <a className="hover:scale-150 flex flex-col items-center transition-all duration-500 relative group" href="https://www.typescriptlang.org" target="_blank">
          <Image
            className="rounded-lg m-5 z-10"
            src="/images/typescript.png"
            alt="Typescript Logo"
            height={100}
            width={100}
          />
          <p className="absolute text-xs group-hover:text-md top-24 group-hover:top-32 duration-500">TypeScript</p>
        </a>
      </div>
    </div>
  );
}
