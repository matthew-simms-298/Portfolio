"use client";

import React from "react";
import Image from "next/image";
export default function AcuityScheduling() {
  return (
      <div className="card bg-base-100 w-full h-[594px] my-3 xl:w-[32%] shadow-xl transistion duration-700 hover:scale-110 hover:m-5">
        <figure>
          <Image
            src="/images/competitors/acuityscheduling.png"
            alt=""
            width={400}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base-content">Acuity Scheduling</h2>
          <p>◦ They will charge on average $16 to $49 per month depending on the establishment</p>
        </div>
      </div>
  );
}
