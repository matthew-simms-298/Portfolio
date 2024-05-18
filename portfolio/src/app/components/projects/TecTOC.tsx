import React from "react";
import Image from "next/image";

export default function TecTOC() {
    return (
    <div className="card card-side bg-base-100 shadow-xl m-5 w-full">
                <div className="card-body">
                <h2 className="card-title">TecTOC Advertisment Page</h2>
                <p>TecTOC was a website dedicated to providing insight to potential consumers of our future application which allowed the validated licensed user to access our data and analytics program.</p>
                <div className="justify-start card-actions">
                    <a href="https://www.tectoc.ca" target="_blank" className="btn btn-outline mx-3">Live Demo</a>
                    <a href="https://www.linkedin.com/in/ryan-clarkson-ca/" target="_blank" className="btn btn-outline mx-3">Co-Creator</a>
                </div>
                </div>
                <figure className="bg-white w-2/3"><Image src="/tecTOC_logo.png" alt="Capstone Project" width={400} height={400}/></figure>
            </div>
    )
}