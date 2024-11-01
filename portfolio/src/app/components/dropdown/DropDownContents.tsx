"use client";
import Link from "next/link";
import React from "react";

export default function DropDownContents() {
  return (
    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box">
      <li>
      <a href="/" className="p-5 hover:text-base-content duration-500 font-bold">
        Home
      </a>
      </li>
      <li>
      <a
        href="/pages/contact"
        className="p-5 hover:text-base-content duration-500 font-bold"
      >
        Contact
      </a>
      </li>
      <li>
      <a
        href="/Matthew Simms - 2024.pdf"
        download={"Matthew Simms Resume"}
        className="p-5 hover:text-base-content duration-500 font-bold"
      >
        Resume
      </a>
      </li>
    </ul>
  );
}
