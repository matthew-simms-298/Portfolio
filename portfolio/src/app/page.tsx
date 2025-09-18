"use client";
import Projects from "@/app/components/Projects";
import TechStack from "@/app/components/TechStack";
import Header from "./components/header-components/Header";
import Contact from "./components/Contact";


import { useRef } from "react";
import { useScroll } from "react-use";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  return (
    <main className="min-h-screen bg-base-200 pb-5 text-base-content flex flex-col items-center scroll-smooth">
      
      <Header/>
      <TechStack reference={techStackRef}/>
      <Projects reference={projectsRef}/>
      <Contact/>
    </main>
  );
}