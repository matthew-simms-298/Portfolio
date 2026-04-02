"use client";

import React from "react";
import { usePathname } from "next/navigation";
export default function DropDown() {
  const pathName = usePathname();

  return (
    <>
      {pathName !== "/" && (
        <a href="/" className="dropdown z-40 fixed top-5 left-5 rotate-180 text-base-content p-3 px-4 rounded-full bg-base-100 text-4xl">
          ➣
        </a>
      )}
    </>
  );
}
