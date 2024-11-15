import React from "react";
import Image from "next/image";

export default function TecTOC({ modalState }: { modalState: () => void }) {
  return (
    <div className="card xl:card-side bg-base-100 shadow-xl m-5 w-full hover:scale-110 transition duration-700">
      <figure className="lg:w-1/4">
        <img
          src="/images/tectoc.png"
          alt="TecTOC logo"
        />
      </figure>
      <div className="card-body lg:w-3/4">
        <h2 className="card-title">TecTOC Corporate Website</h2>
        <p>
          TecTOC was a website dedicated to providing insight to potential
          consumers of our future application which allowed the validated
          licensed user to access our data and analytics program.
        </p>
        
        <div className="card-actions items-center justify-center md:justify-between">
        <div className="flex-wrap flex flex-row justify-center">
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
            href="/pages/tectoc"
            className="btn btn-outline my-1 xl:mx-2 w-full xl:w-1/4"
          >
            Learn More
          </a>
          
        </div>
      </div>
    </div>
  );
}