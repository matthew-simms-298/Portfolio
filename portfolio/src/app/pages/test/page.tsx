"use client";

import Image from "next/image";

import React from "react";

export default function TestPage() {
  return (
    <main className="flex flex-row items-center justify-center min-h-screen">
      <div
        className="w-1/2 h-screen bg-[url('/images/profile-pic.jpg')] bg-cover bg-center "
        style={{
          WebkitMaskImage: "linear-gradient(to right, black 70%, transparent)",
          maskImage: "linear-gradient(to right, black 70%, transparent)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      ></div>
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <div className="w-4/5">
          <h1> Hello World!</h1>

          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </main>
  );
}
