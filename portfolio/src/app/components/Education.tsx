"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Education() {
    useEffect(() => {
        // Open the URL in a new tab
        const handleRedirect = () => {
            window.open("https://www.sait.ca", "_blank");
        };

        // Attach click event to the div
        const educationParent : HTMLElement = document.getElementById("educationparent")!;
        educationParent.addEventListener("click", handleRedirect);

        // Cleanup event listener on component unmount
        return () => {
            educationParent.removeEventListener("click", handleRedirect);
        };
    }, []); // Empty array means this effect runs once when the component mounts

    return (
        <div className="w-3/4 mt-20">
            <h2
                id="education"
                className="text-4xl text-center italic font-serif font-thin mb-14"
            >
                Education
            </h2>
            <div id="educationparent" className="card bg-base-100 w-full shadow-xl hover:scale-110 transition duration-700">
                <figure>
                    <Image
                        src="/images/hertiage-hall-ai.png"
                        alt="Heritage Hall building"
                        width={600}
                        height={300}
                        layout="responsive"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Southern Alberta Institute of Technology (SAIT)
                    </h2>
                    <div className="flex flex-col flex-wrap">
                        <a
                            href="https://www.sait.ca/programs-and-courses/diplomas/software-development"
                            target="_blank"
                            className="text-white hover:underline"
                        >
                            Software Development Diploma
                        </a>
                        <p className="text-white">September 2022 - June 2024</p>
                        <p className="text-white">Calgary, AB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
