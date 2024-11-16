"use client";

import React from "react";
import Image from "next/image";
export default function Stafflinq() {
  return (
      <div className="card bg-base-100 w-full h-[594px] my-3 xl:w-[32%] shadow-xl transistion duration-700 hover:scale-110 hover:m-5">
        <figure>
          <Image
            src="/images/competitors/stafflinq.png"
            alt=""
            width={400}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base-content">Stafflinq</h2>
          <p>◦ Undisclosed pricing</p>
        </div>
      </div>
  )
}
