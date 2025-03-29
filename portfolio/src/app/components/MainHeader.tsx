"use client";
import DropDown from "./DropDown";
import DropDownV2 from "./DropDown2"
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MainHeader() {
  const [visible, setVisible] = useState(false)
  const pathName = usePathname()
  return (
    <header className={`flex flex-row justify-end ${pathName === '/' ? 'bg-base-100' : 'bg-base-200'}`}>
      <DropDown />
      {/*<DropDownV2/>*/} 
      <a href="/" className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block">
        Home
      </a>
      <a
        href="/pages/contact"
        className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block"
      >
        Contact
      </a>
      <div className="dropdown dropdown-hover hidden xl:block">
        <button
          className="p-5 hover:text-base-content duration-500 font-bold xl:block"
        >
          Projects
        </button>
        <ul
          className="menu dropdown-content bg-base-100 rounded-box z-[1]">
          <li className="transition duration-500 hover:text-base-content"><a href="/pages/capstone">Capstone</a></li>
          <li className="transition duration-500 hover:text-base-content"><a href="/pages/tectoc">TecTOC</a></li>
        </ul>
      </div>
      <a
        href="/Matthew Simms.pdf"
        download={"Matthew Simms Resume"}
        className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block"
      >
        Resume
      </a>
    </header>
  );
}
