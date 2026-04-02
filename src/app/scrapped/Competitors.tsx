"use client";

import React from "react";
import Image from "next/image";

import Stafflinq from "../components/competitors/Stafflinq";
import AcuityScheduling from "../components/competitors/AcuityScheduling";
import SnapSchedule from "../components/competitors/SnapSchedule";
export default function Competitors() {
  return (
    <div className="flex flex-wrap justify-between my-10">
     <Stafflinq/>
     <AcuityScheduling/>
     <SnapSchedule/>
    </div>
  );
}
