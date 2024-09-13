"use client";
import Image from "next/image";
export default function Education() {
  return (
    <div className="w-3/4 mt-20">
      <h2
        id="education"
        className="text-4xl text-center italic font-serif font-thin mb-14"
      >
        Education
      </h2>
      <div className="card bg-base-100 w-full shadow-xl hover:scale-110 transition duration-700">
        <figure>
          <Image
            src="/images/hertiage-hall-ai.png"
            alt="Hertiage Hall building"
            width={600}
            height={300}
            layout="responsive"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Southern Alberta Institute of Technology (SAIT)
          </h2>
          <div className="flex flex-col flex-wrap">
            <a
              href="https://www.sait.ca/programs-and-courses/diplomas/software-development"
              target="_blank"
              className="text-white hover:underline"
            >
              Software Development Diploma
            </a>
            <p className="text-white">Septemeber 2022 - June 2024</p>
            <p className="text-white">Calgary, AB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
