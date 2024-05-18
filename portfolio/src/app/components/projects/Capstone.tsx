import React from "react";
import Image from "next/image";

export default function Capstone() {
    return (
    <div className="card card-side bg-base-100 shadow-xl m-5 w-full">
            <figure className="w-2/3"><Image className="" src="/JAWN-logos.jpeg" width={500} height={500} alt="Capstone Project"/></figure>
                <div className="card-body">
                <h2 className="card-title">TecTOC Advertisment Page</h2>
                <p>TecTOC was a website dedicated to providing insight to potential consumers of our future application which allowed the validated licensed user to access our data and analytics program.</p>
                <div className="justify-end card-actions">
                    <a href="https://jawn-sds.vercel.app/api/auth/signin" target="_blank" className="btn btn-outline mx-3">Live Demo</a>
                    <a href="https://linktr.ee/jawn_ca" target="_blank" className="btn btn-outline mx-3">Creators</a>
                </div>
                </div>                
            </div>
    )
}