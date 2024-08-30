import React from "react";
import Image from "next/image";
import TechStack from "../TechStack";

export default function Capstone() {
  return (
    <div className="card sm:card-side bg-base-100 shadow-xl m-5 w-full">
      <figure>
        <Image
          width={500}
          height={500}
          src="/images/JAWN-logo.jpeg"
          alt="Capstone Project"
        />
      </figure>
      <div className="card-body">
        <h2 className="hidden card-title text-md md:card-title sm:block">
          Schedule Distribution System (SDS)
        </h2>
        <h2 className="card-title text-md md:card-title sm:hidden">SDS</h2>
        <p className="text-sm md:text-base">
          The <a className="italic">{'"Schedule Distribution System"'}</a> or
          SDS for short, was our Capstone project. The idea was to give small
          businesses as well as large corporations a more efficient method of
          schedule distribution. Keeping all employees updated on the latest
          changes.
        </p>

        <div className="card-actions sm:justify-between">
          <div className="justify-start flex flex-row items flex-wrap">
            <Image
              className="rounded-lg mr-3"
              src="/images/tailwindcss-logo.png"
              alt="TailwindCSS Logo"
              height={50}
              width={50}
            />

            <Image
              className="rounded-lg mr-3"
              src="/images/react-logo.png"
              alt="React logo"
              height={50}
              width={55}
            />

            <Image
              className="rounded-lg mr-3"
              src="/images/nextjs-logo.png"
              alt="Next.JS Logo"
              height={50}
              width={50}
            />

            <Image
              className="rounded-lg mr-3"
              src="/images/vercel-logo.png"
              alt="Vercel Logo"
              height={50}
              width={50}
            />

            <Image
              className="rounded-lg mr-3"
              src="/images/typescript.png"
              alt="Typescript Logo"
              height={50}
              width={50}
            />
          </div>

          <div className="justify-end">
            <a
              href="https://jawn-sds.vercel.app/api/auth/signin"
              target="_blank"
              className="btn btn-outline mx-2 w-28"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/RCC-STUDIO/jawn-timetracker"
              target="_blank"
              className="btn btn-outline mx-2 w-28"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
