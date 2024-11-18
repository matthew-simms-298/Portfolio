"use client";

import React from "react";
import Image from "next/image";

import Stafflinq from "./competitors/Stafflinq";
import AcuityScheduling from "./competitors/AcuityScheduling";
import SnapSchedule from "./competitors/SnapSchedule";
export default function Competitors() {
  return (
    <div className="flex flex-wrap justify-between my-10">
     <Stafflinq/>
     <AcuityScheduling/>
     <SnapSchedule/>
    </div>
  );
}
