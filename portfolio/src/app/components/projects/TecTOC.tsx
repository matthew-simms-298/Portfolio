import React from "react";
import Image from "next/image";

export default function TecTOC() {
  return (
    <div className="card sm:card-side bg-base-100 shadow-xl m-5 w-full">
      <figure className="bg-white w-full sm:w-2/5">
        <Image
          src="/tecTOC_logo.png"
          alt="TecTOC logo"
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">TecTOC Advertisment Page</h2>
        <p>
          TecTOC was a website dedicated to providing insight to potential
          consumers of our future application which allowed the validated
          licensed user to access our data and analytics program.
        </p>
        
        <div className="card-actions mt-5 sm:justify-between">
        <div className="justify-start flex flex-row items flex-wrap">
            {/*<Image
              className="rounded-lg mr-3"
              src="/images/tailwindcss-logo.png"
              alt="CSS Logo"
              height={50}
              width={50}
            />*/}

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
          <div>
          <a
            href="https://jawn-sds.vercel.app/api/auth/signin"
            target="blank"
            className="btn btn-outline mx-2 w-28"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/Tight-Oil-Consortium/TecTOC_Website"
            target="blank"
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
