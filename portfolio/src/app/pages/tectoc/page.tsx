"use client";

import React from "react";
import ProjectRequirements from "@/app/components/ProjectRequirements";
export default function TecToc() {
  return (
    <main className="flex flex-grow bg-base-200 justify-center">
      <div className="flex flex-col items-center w-3/4">
        <h2 className="text-4xl italic font-serif font-thin mb-5 text-base-content">
          Who or What is TecTOC?
        </h2>
        <div className="my-10">
          <h3 className="font-serif">In Depth...</h3>
          <p className="italic font-serif p-5 text-lg text-justify">
            {`"TecTOC, located in Calgary, Alberta, Canada, was launched to create a link
            between the cutting-edge, yet practical, applied research performedby Tight Oil 
            Consortium (TOC), and subsurface energy industry technology and service needs. 
            TOC is an industry- and government-sponsored multi-disciplinary research group, 
            hosted at the University of Calgary, which has been advancing field- and 
            laboratory-based reservoir characterization and evaluation methods and technologies
            for low-permeability (“unconventional”) hydrocarbon reservoirs since 2011."`}
          </p>
          <p className="font-serif">
            —Tight Oil Consortium (TOC), January 2024
          </p>
        </div>

        <div className="flex flex-col items-center w-full my-5">
          <h2 className="text-3xl italic font-serif font-thin mb-5 text-base-content">
            The Journey
          </h2>

          <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
            Purpose
          </h2>
          <p className="self-start">
            [long winded explanation goes here...]
          </p>

          <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
            Project Requirements
          </h2>
        <ProjectRequirements/>
        </div>

        <div className="w-full">
          <h2 className="text-2xl italic font-serif font-thin mb-5 text-base-content">
            Gallery (TBD)
          </h2>
          <p className="">
            This will contain all (or most) of the screens provided in mockups,
            focus on this portion later!
          </p>
        </div>
      </div>
    </main>
  );
}
