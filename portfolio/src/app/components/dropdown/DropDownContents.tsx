"use client";

import React from "react";

export default function DropDownContents() {
  return (
    <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box">
      <li>
        <a
          href="/Matthew Simms - Resume.pdf"
          className="btn btn-link"
          download="matthew_simms_resume"
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="https://www.sait.ca/programs-and-courses/diplomas/software-development"
          target="_blank"
          className="btn btn-link"
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="https://github.com/matthew-simms-298"
          target="_blank"
          className="btn btn-link"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/matthew-simms-676063256/"
          target="_blank"
          className="btn btn-link"
        >
          Linkedin
        </a>
      </li>
    </ul>
  );
}
