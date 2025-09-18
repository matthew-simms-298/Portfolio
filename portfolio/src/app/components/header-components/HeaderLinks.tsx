"use client";
import DropDownV2 from "../DropDown2"
import { useState } from "react";
import { Link } from "react-scroll";
import { useRef } from "react";
import { useScroll } from "react-use";


export default function MainHeader() {
  const [visible, setVisible] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div id="home" className="flex flex-row justify-end bg-base-100 w-full fixed top-0 z-30 shadow-lg">
      {/*<DropDownV2/>*/} 
      <Link to="home"
        smooth={true}
        offset={-100}
        duration={500}
        spy={true}
      className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block">
        Home
      </Link>
      
      <Link
        to="tech-stack"
        smooth={true}
        offset={-100}
        duration={500}
        spy={true}
      className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block">
        Tech Stack
      </Link>
      <Link
        to="projects"
        smooth={true}
        offset={-100}
        duration={500}
        spy={true}
        href="/pages/contact"
        className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block"
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        offset={-100}
        duration={500}
        spy={true}
        download={"Matthew Simms Resume"}
        className="p-5 hover:text-base-content duration-500 font-bold hidden xl:block"
      >
        Contact
      </Link>
    </div>
  );
}
