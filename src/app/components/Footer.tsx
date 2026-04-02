"use client";

import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className=" text-white flex flex-row bg-base-100 w-full just p-5 justify-between items-center">
      <p className="w-1/4">Give me a shout!</p>

      <div className="flex flex-row flex-wrap items-center justify-end w-3/4">
      {/*<button className="mx-1 hover:text-base-content transition duration-500" onClick={() => {navigator.clipboard.writeText("(403) 397-1277")}}>(403) 397-1277</button> */}
        <a href="https://github.com" target="_blank">
          <svg
            className="fill-white mx-1 hover:fill-base-content transition duration-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.208 11.385.6.111.793-.261.793-.578 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.833 2.809 1.303 3.495.997.108-.775.417-1.303.759-1.603-2.657-.3-5.46-1.328-5.46-5.906 0-1.306.465-2.375 1.236-3.212-.124-.3-.538-1.518.117-3.16 0 0 1.005-.32 3.3 1.227.957-.266 1.982-.399 3.002-.405 1.02.006 2.045.139 3.004.405 2.292-1.547 3.297-1.227 3.297-1.227.657 1.642.244 2.858.12 3.16.765.837 1.234 1.906 1.234 3.212 0 4.59-2.808 5.601-5.472 5.895.429.369.814 1.102.814 2.22 0 1.604-.015 2.896-.015 3.287 0 .32.193.695.8.577C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/matthew-simms-676063256/"
          target="_blank"
        >
          <svg
            className="fill-white mx-1 hover:fill-base-content transition duration-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="mailto:msimms298@shaw.ca" target="_blank">
          <svg
            className="fill-white mx-1 hover:fill-base-content transition duration-500"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
}
