"use client";
import DropDown from "./DropDown";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathName = usePathname()
  return (
    <header className={`flex flex-row justify-end ${pathName === '/' ? 'bg-base-100' : 'bg-base-200'}`}>
      <DropDown />
      <a href="/" className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block">
        Home
      </a>
      <a
        href="/pages/contact"
        className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block"
      >
        Contact
      </a>
      <a
        href="/Matthew Simms - 2024.pdf"
        download={"Matthew Simms Resume"}
        className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block"
      >
        Resume
      </a>
    </header>
  );
}
