"use client";

import React from "react";
import Image from "next/image";
export default function Stafflinq() {
  return (
      <div className="card bg-base-100 w-full my-3 xl:w-[30%] shadow-xl transistion duration-700 xl:hover:scale-110 xl:hover:mx-5">
        <figure className="h-2/3 ">
          <img
            src="/images/competitors/stafflinq.png"
            alt=""
          />
        </figure>
        <div className="card-body h-1/3">
          <h2 className="card-title text-base-content">Stafflinq</h2>
          <p>◦ Undisclosed pricing</p>
        </div>
      </div>
  )
}
