"use client";
import DropDown from "./DropDown";
export default function MainHeader() {
  return (
    <header className="flex flex-row justify-end bg-base-100">
      <DropDown />
      <a href="/" className="p-5 hover:text-base-content duration-500 font-bold">
        Home
      </a>
      <a
        href="/pages/contact"
        className="p-5 hover:text-base-content duration-500 font-bold"
      >
        Contact
      </a>
      <a
        href="/Matthew Simms - 2024.pdf"
        download={"Matthew Simms Resume"}
        className="p-5 hover:text-base-content duration-500 font-bold"
      >
        Resume
      </a>
    </header>
  );
}
