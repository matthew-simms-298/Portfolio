"use client";

import React from "react";
import Image from "next/image";
export default function SnapSchedule() {
  return (
      <div className="card bg-base-100 my-3 h-[594px] w-full xl:w-[32%] shadow-xl transistion duration-700 hover:scale-110 hover:m-5">
        <figure>
          <Image
            src="/images/competitors/snapschedule.png"
            alt=""
            width={400}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base-content">Snap Schedule</h2>
          <p>◦ $450/month per location that uses their software</p>
          <p>◦ $36/month per employee under the establishment</p>
        </div>
      </div>
  );
}
