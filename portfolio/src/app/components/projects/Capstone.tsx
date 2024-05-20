import React from "react";
import Image from "next/image";

export default function Capstone() {
  return (
    <div className="card sm:card-side bg-base-100 shadow-xl m-5 w-full">
      <figure>
        <Image
          width={500}
          height={500}
          src="/JAWN-logos.jpeg"
          alt="Capstone Project"
        />
      </figure>
      <div className="card-body">
        <h2 className="hidden card-title text-md md:card-title sm:block">
          Schedule Distribution System (SDS)
        </h2>
        <h2 className="card-title text-md md:card-title sm:hidden">SDS</h2>
        <p className="text-sm md:text-base">
          The <a className="italic">{'"Schedule Distribution System"'}</a> or SDS
          for short, was our capstone project. The idea was to give small
          businesses as well as large corporations a more efficient method of
          schedule distribution. Keeping all employees updated on the latest
          changes.
        </p>
        <div className="justify-center card-actions mt-5 sm:justify-end">
          <a
            href="https://jawn-sds.vercel.app/api/auth/signin"
            target="blank"
            className="btn btn-outline mx-2 w-28"
          >
            Live Demo
          </a>
          <a
            href="https://linktr.ee/jawn_ca"
            target="blank"
            className="btn btn-outline mx-2 w-28"
          >
            Creators
          </a>
        </div>
      </div>
    </div>
  );
}
