"use client";

import Image from "next/image";
import React from "react";
import DropDown from "./DropDown";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="text-primary bg-base-200 h-96 flex flex-col items-center w-full z-10 mt-10 xl:mt-1">
      <div className="flex flex-row items-center justify-center bg-base-100 w-full h-1/2 shadow-2xl shadow-base-300">
        <DropDown />
        <div className="w-1/3 justify-between hidden mt-32 xl:flex flex-row">
        <Link
          href="#skills"
          className="btn btn-link btn-lg"
        >
          <p>Skills</p>
        </Link>
        <Link
          href="#employment"
          className="btn btn-link btn-lg"
        >
          <p>Employment</p>
        </Link>
        <Link
          href="#education"
          className="btn btn-link btn-lg"
        >
          <p>Education</p>
        </Link>
        </div>
        <div className="flex flex-col text-center items-center mt-48 w-1/2 lg:w-1/3 ">
          <h1 className="text-3xl italic font-serif my-6">Matthew Simms</h1>
          <Image
            className="rounded-full"
            src="/images/profile pic.jpg"
            alt="Matthew Simms"
            width={250}
            height={250}
          />
          <p className="mt-3 text-sm lg:text-base">
            Hello! My name is Matthew Simms, a recent SAIT graduate from the
            Software Development program. I am primarily a Front-End React
            Developer, based in Canada 🍁🏒
            
          </p>
        </div>
        <div className="w-1/3 justify-between hidden mt-32 xl:flex flex-row">
          <Link
            href="#tech-stack"
            className="btn btn-link btn-lg"
          >
            <p>Tech Stack</p>
          </Link>
          <Link
            href="#projects"
            className="btn btn-link btn-lg"
          >
            <p>Projects</p>
          </Link>
          <Link
            href="#contact"
            className="btn btn-link btn-lg"
          >
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
