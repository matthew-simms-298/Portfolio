"use client";
import Projects from "@/app/components/Projects";
import TechStack from "@/app/components/TechStack";
export default function Home() {
  return (
    <main className="min-h-screen bg-base-200 p-5 text-base-content flex flex-col items-center">
      <TechStack />
      <Projects />
    </main>
  );
}
