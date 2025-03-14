import React from "react";
import Image from "next/image";

export default function TecTOC() {
  return (
    <div className="card xl:card-side bg-base-100 shadow-xl m-5 w-full hover:scale-110 transition duration-700">
      <figure className="xl:w-1/4">
        <img src="/images/JAWN-logo.png" alt="TecTOC logo" />
      </figure>
      <div className="card-body xl:w-3/4">
        <h2 className="card-title">SDS Capstone Prototype</h2>
        <p>
          The <a className="italic">{'"Schedule Distribution System"'}</a> or
          SDS, was our Capstone project. The idea was to give small businesses
          as well as large corporations a more efficient method of communicating
          schedule updates, changes and allowing employees to make adjustments
          through built in API.
        </p>

        <div className="card-actions items-center justify-center md:justify-between">
          <div className="flex-wrap flex flex-row justify-center">
            <Image
              className="rounded-lg mr-3 my-2"
              src="/images/tailwindcss-logo.png"
              alt="TailwindCSS Logo"
              height={50}
              width={50}
            />
            <Image
              className="rounded-lg mr-3 my-2"
              src="/images/react_logo.png"
              alt="React logo"
              height={50}
              width={55}
            />

            <Image
              className="rounded-lg mr-3  my-2"
              src="/images/nextjs-logo.png"
              alt="Next.JS Logo"
              height={50}
              width={50}
            />

            <Image
              className="rounded-lg mr-3 my-2"
              src="/images/vercel-logo.png"
              alt="Vercel Logo"
              height={50}
              width={50}
            />

            <Image
              className="rounded-lg mr-3 my-2"
              src="/images/typescript.png"
              alt="Typescript Logo"
              height={50}
              width={50}
            />
          </div>
          <a
            href="/pages/capstone"
            className="btn btn-outline my-1 xl:mx-2 w-full xl:w-1/4"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
