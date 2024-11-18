"use client";
import Projects from "@/app/components/Projects";
import TechStack from "@/app/components/TechStack";
import Header from "./components/HomePageHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 pb-5 text-base-content flex flex-col items-center scroll-smooth">
      <Header />
      <TechStack />
      <Projects />
    </main>
  );
}