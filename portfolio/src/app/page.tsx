"use client";
import Projects from "@/app/components/Projects";
import TechStack from "@/app/components/TechStack";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Employment from "./components/Employment";
export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 p-5 text-base-content flex flex-col items-center">
      <Skills/>
      <Employment/>
      <Education/>
      <TechStack />
      <Projects />
    </main>
  );
}
