"use client";

import Image from "next/image";
import React from "react";

export default function HeaderComponent() {
  return (
    <header className="text-primary bg-base-200 h-96 flex flex-col items-center w-full z-10">
      <div className="flex flex-row items-center justify-evenly bg-base-100 w-full h-1/2 shadow-2xl shadow-base-300">
        <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">
          Portfolio
        </a>
        <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">
          GitHub
        </a>
        <div className="flex flex-col text-center items-center mt-56 w-1/2 lg:w-1/3 ">
          <h1 className="text-3xl italic font-serif mt-5">Matthew Simms</h1>
          <Image
            className="rounded-full mt-2"
            src="/profile pic.jpg"
            alt="Matthew Simms"
            width={250}
            height={250}
          />
          <p className="mt-3 text-sm lg:text-base">
            Hello! My name is Matthew Simms, a recent SAIT graduate from the
            Software Development program. I am primarily a Front-End React
            Developer, based in {""}
            <a
              className="hover:underline"
              href="https://www.google.ca/maps/place/Calgary,+AB/@51.0275069,-114.2529819,11z/data=!3m1!4b1!4m6!3m5!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831!16zL20vMDFyMzI?entry=ttu"
              target="blank"
            >
              Calgary, AB
            </a>
            🍁🏒
          </p>
        </div>
        <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">
          Education
        </a>
        <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">
          Linkedin
        </a>
      </div>
    </header>
  );
}
