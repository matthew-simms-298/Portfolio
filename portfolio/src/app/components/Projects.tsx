"use client";
import Capstone from "@/app/components/projects/Capstone";
import TecTOC from "@/app/components/projects/TecTOC";
import Dodge from "./projects/Dodge";

export default function Projects() {
  return (
    <main id="projects" className="flex flex-col items-center w-3/4 mt-20">
      <h2 className="text-4xl italic font-serif font-thin mb-5">Projects</h2>
      <div className="flex flex-col items-center">
        <Capstone />
        <TecTOC />
        {/*
        ⚒️CURRENTLY UNDER DEVELOPMENT⚒️
        ===========================
        <Dodge />
        ===========================
        ⚒️CURRENTLY UNDER DEVELOPMENT⚒️
        */}
      </div>

      <p className="text-center italic font-light mt-24">
        more projects coming soon...
      </p>
    </main>
  );
}