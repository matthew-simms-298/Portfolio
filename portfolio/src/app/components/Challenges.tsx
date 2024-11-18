"use client";

import { useState } from "react";

export default function Challenges() {
  const [dropDown, setDropDown] = useState(-1);

  const handleButtonClick = (section: number) => {
    setDropDown(section === dropDown ? -1 : section);
  };
  return (
    <div className="flex flex-col justify-center items-start rounded-lg border-t border-x border-base-content w-full bg-base-100">
      <div className={`transition-all duration-700 w-full border-b border-base-content relative ${dropDown === 1 ? "h-48 xl:h-44" : "h-[4.6rem]"}`}>
        <h3
          onClick={() => handleButtonClick(1)}
          className="rounded-t-lg font-serif text-base-content italic py-5 text-2xl bg-base-100 p-5 z-10"
        >
          Communication
        </h3>
        <div
          className={`p-5 transition-all duration-700 absolute inset-0 ${
            dropDown === 1 ? "opacity-100 z-10 inset-y-14" : "opacity-0 -z-10"
          }`}
        >
          <p>◦ Merge Conflicts</p>
          <p>◦ Extracurricular</p>
          <p>◦ Inconsistent messaging (resolved to MS Teams)</p>
        </div>
      </div>
      <div className={`transition-all duration-700 w-full border-b border-base-content relative ${dropDown === 2 ? "h-48" : "h-[4.6rem]"}`}>
        <h3
          onClick={() => handleButtonClick(2)}
          className="font-serif text-base-content italic p-5 text-2xl bg-base-100"
        >
          Time Constraints
        </h3>
        <div
          className={`p-5 transition-all duration-700 absolute inset-0 list-disc ${
            dropDown === 2 ? "opacity-100 z-10 inset-y-14" : "opacity-0 -z-10"
          }`}
        >
          <p>◦ Tight schedule</p>
          <p>◦ Short time frame</p>
          <p>◦ Little time for polish</p>
          <p>◦ Bugs unaddressed</p>
        </div>
      </div>

      <div className={`transition-all duration-700 w-full border-b border-base-content rounded-lg relative ${dropDown === 3 ? "h-52 xl:48" : "h-[4.6rem]"}`}>
        <h3
          onClick={() => handleButtonClick(3)}
          className="font-serif text-base-content italic py-5 text-2xl bg-base-100 rounded-b-lg p-5 z-10"
        >
          Technical Issues
        </h3>
        <div
          className={`p-5 transition-all duration-700 absolute inset-0 list-disc ${
            dropDown === 3 ? "opacity-100 z-10 inset-y-14" : "opacity-0 -z-10"
          }`}
        >
          <p>◦ Vercel launching issues</p>
          <p>◦ Database pulling incorrect data</p>
          <p>◦ Version control confusion</p>
          <p>◦ Database not connecting</p>
        </div>
      </div>
    </div>
  );
}
