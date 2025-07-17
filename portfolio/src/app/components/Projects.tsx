"use client";
import React from "react";

import Capstone from "@/app/components/projects/Capstone";
import TecTOC from "@/app/components/projects/TecTOC";


export default function Projects({ reference }: {reference: React.RefObject<HTMLDivElement>}) {
  return (
    <main ref={reference} id="projects" className="flex flex-col items-center w-3/4 my-20 ">
      <h2 className="text-4xl italic font-serif font-thin mb-5">Projects</h2>
      <div className="flex flex-col items-center">
        <Capstone />
        <TecTOC />
        
      </div>
    </main>
  );
}