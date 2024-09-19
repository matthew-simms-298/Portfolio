"use client";
import Link from "next/link";
import React from "react";

export default function DropDownContents() {
  return (
    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box">
      <li>
        <Link
          href="#skills"
          className="btn btn-link btn-md"
        >
          <p>Skills</p>
        </Link>
      </li>
      <li>
        <Link
          href="#employment"
          className="btn btn-link btn-md"
        >
          <p>Employment</p>
        </Link>
      </li>
      <li>
        <Link
          href="#education"
          className="btn btn-link btn-md"
        >
          <p>Education</p>
        </Link>
      </li>
      <li>
        <Link
          href="#tech-stack"
          className="btn btn-link btn-md"
        >
          <p>Tech Stack</p>
        </Link>
      </li>
      <li>
        <Link
          href="#projects"
          className="btn btn-link btn-md"
        >
          <p>Projects</p>
        </Link>
      </li>
      <li>
        <Link
          href="#contact"
          className="btn btn-link btn-md"
        >
          <p>Contact Me!</p>
        </Link>
      </li>
    </ul>
  );
}
