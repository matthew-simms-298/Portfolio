"use client";

import Image from "next/image";
import React from "react";
// import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="text-primary bg-base-200 h-56 mb-24 flex flex-col items-center w-full shadow-base-300">
      <div className="flex flex-row bg-base-100 items-center justify-center  w-full h-1/2 shadow-2xl shadow-base-300">
        <div className="flex flex-col text-center items-center mt-64 xl:mt-48 w-1/2 lg:w-1/3 ">
          {/*<h1 className="text-3xl italic font-serif my-6">Matthew Simms</h1>*/}
          <Image
            className="rounded-full"
            src="/images/profile pic.jpg"
            alt="Matthew Simms"
            width={300}
            height={300}
          />
          <p className="mt-3 text-sm lg:text-base">
            Hello! My name is Matthew Simms, a recent SAIT graduate from the
            Software Development program. I am primarily a Front-End React
            Developer, based in Canada 🍁🏒
          </p>
        </div>
      </div>
    </header>
  );
}
