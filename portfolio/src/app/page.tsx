"use client";
import Projects from "@/app/components/Projects";
import TechStack from "@/app/components/TechStack";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Employment from "./components/Employment";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <main className="min-h-screen bg-base-200 p-5 text-base-content flex flex-col items-center scroll-smooth">
      <Skills />
      <Employment />
      <Education />
      <TechStack />
      <Projects modalState={() => setModal(true)} />

      {modal && (
        <dialog className="modal bg-opacity-50 bg-base-100" open>
          <div className="modal-box">
            <form method="dialog">
              <button
                onClick={() => setModal(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Error</h3>
            <p className="py-4">
              {"I'm"} sorry to inform you that the GitHub repository is private and
              cannot be viewed publicly at this time, but feel free to see the
              current product via the {'"Live Demo"'} button!
            </p>
          </div>
        </dialog>
      )}
    </main>
  );
}
