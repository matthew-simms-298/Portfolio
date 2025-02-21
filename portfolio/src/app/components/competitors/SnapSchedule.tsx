"use client";

import React from "react";
import Image from "next/image";
export default function SnapSchedule() {
  return (
      <div className="card bg-base-100 my-3 w-full xl:w-[30%] shadow-xl transistion duration-700 xl:hover:scale-110 xl:hover:mx-5">
        <figure className="h-2/3">
          <img
            src="/images/competitors/snapschedule.png"
            alt=""
          />
        </figure>
        <div className="card-body h-1/3">
          <h2 className="card-title text-base-content">Snap Schedule</h2>
          <p>◦ $450/month per location that uses their software</p>
          <p>◦ $36/month per employee under the establishment</p>
        </div>
      </div>
  );
}
