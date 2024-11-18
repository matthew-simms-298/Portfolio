"use client";

import React from "react";
import ProjectRequirements from "@/app/components/ProjectRequirements";
import Gallery from "@/app/components/Gallery";
import { useState } from "react";
import Modal from "@/app/components/Modal";
import { tectocRequirements } from "@/app/extra/StaticData";
import { tectocDesktop, tectocMobile } from "@/app/extra/ImageImports";

export default function TecTOC() {
  const [modal, setModal] = useState(false);

  return (
    <main className="flex flex-grow bg-base-200 py-5 justify-center">
      <div className="flex flex-col items-center w-3/4">
        <h2 className="text-4xl italic font-serif font-thin mb-5 text-center text-base-content">
          What is TecTOC?
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

          <div className="py-8">
            <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
              Purpose
            </h2>
            <p className="self-start">
              TecTOC is a Canadian technology and consulting firm focused on
              subsurface energy solutions, such as oil, gas, and geothermal
              energy. Leveraging advanced methodologies developed by the Tight
              Oil Consortium at the University of Calgary, TecTOC offers
              services in diagnostic fracture injection testing, flowback
              analysis, and reservoir characterization. These services support
              energy industry clients by optimizing hydraulic fracturing,
              evaluating reservoir properties, and enhancing resource
              management. The TecTOC website is essential for the future of oil
              and gas as it connects energy companies with innovative subsurface
              diagnostics and solutions to enhance extraction efficiency and
              sustainability. By offering advanced tools like diagnostic
              fracture injection testing and flowback analysis, the site
              supports the industry’s shift toward data-driven resource
              management, allowing companies to optimize production and reduce
              environmental impact. In the evolving energy landscape, such
              specialized expertise helps balance energy demands with a need for
              responsible, efficient resource use.
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
              Project Requirements
            </h2>
            <ProjectRequirements components={tectocRequirements} />
          </div>
        </div>

        <div className="w-full py-8 flex flex-col items-center border-b pb-16 mb-10 border-b-base-content">
          <h2 className="w-full text-3xl italic font-serif font-thin mb-10 text-base-content text-center border-b pb-5 border-base-content">
            Gallery
          </h2>
          <Gallery desktopImages={tectocDesktop} mobileImages={tectocMobile}/>
        </div>

        <h2 className="text-3xl italic font-serif font-thin mb-5 text-base-content">
          Learn More
        </h2>
        <div className="mb-10 w-full items-center flex justify-center">
          <a
            href="https://www.tectoc.ca"
            target="blank"
            className="btn btn-outline w-1/2 xl:w-1/4  m-5"
          >
            Visit TecTOC.ca
          </a>
          <button
            /*href="https://github.com/Tight-Oil-Consortium/TecTOC_Website"
            target="_blank"*/
            onClick={() => setModal(true)}
            className="btn btn-outline w-1/2 xl:w-1/4 m-5"
          >
            GitHub
          </button>
        </div>
      </div>
      {modal && <Modal modalState={() => setModal(false)} />}
    </main>
  );
}
