"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HomePageHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacityClass = scrollY < 100 ? "opacity-100" : "opacity-0 -translate-y-10";

  return (
    <div className={`w-full flex flex-col justify-center ${opacityClass} transition-opacity duration-1000 ease-out min-h-screen relative`}>
      {/* Top half color */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-base-100 pointer-events-none" />
      {/* Bottom half color */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-base-200 pointer-events-none" />
      <div className="flex flex-col justify-center items-center py-10 min-h-screen relative z-10">
        {/*<div className="w-full h-10 absolute top-1/2 shadow-2xl bg-base-100 shadow-stone-500"></div>*/}
        <Image
          className="rounded-full mt-10 z-10 translate-y-10"
          src="/images/profile pic.jpg"
          alt="Matthew Simms"
          width={500}
          height={300}
        />
        <p className="flex self-center w-4/5 xl:w-1/3 font-thin text-center text-lg mt-6 translate-y-10">
          Hello! My name is Matthew Simms, an ongoing SAIT student in the Bachelor
          of Software Development. {"I'm"} an eager Canadian based Web Developer
          with a passion for front-end design and user experience. I love creating
          eye catching websites that have clean and easy to use user interfaces!
          🍁🏒
        </p>
      </div>
    </div>
  );
}