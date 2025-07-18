"use client";

import Image from "next/image";
import React from "react";
// import Link from "next/link";

import { useRef } from "react";

export default function HomePageHeader() {
  return (
    <div className="xl:mt-10 w-full flex flex-col justify-center">
      <div className="flex flex-col bg-gradient-to-b from-50% from-base-100 to-50% to-base-200 justify-center items-center py-10">
      
      <div className="w-full h-10 absolute place-content-center shadow-2xl bg-base-100 to-base-200 shadow-stone-500"> </div>

        <Image
          className="rounded-full mt-10 z-10"
          src="/images/profile pic.jpg"
          alt="Matthew Simms"
          width={300}
          height={300}
        />
        
      </div>

      <p className="flex self-center w-4/5 xl:w-1/3 font-thin text-center text-lg -mt-5 ">
        Hello! My name is Matthew Simms, an ongoing SAIT student in the Bachelor
        of Software Development. I am and eager Canadian based Web Developer
        with a passion for front-end design and user experience. I love creating
        eye catching websites that have clean and easy to use user interfaces!
        🍁🏒
      </p>

    </div>
  );
}
