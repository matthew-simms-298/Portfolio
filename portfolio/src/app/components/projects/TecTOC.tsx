import React from "react";
import Image from "next/image";

export default function TecTOC() {
    return (
    <div className="card sm:card-side bg-base-100 shadow-xl m-5 w-full">
                <figure className="bg-white w-full sm:w-2/5"><Image src="/tecTOC_logo.png" alt="TecTOC logo" width={500} height={500}/></figure>
                <div className="card-body">
                <h2 className="card-title">TecTOC Advertisment Page</h2>
                <p>TecTOC was a website dedicated to providing insight to potential consumers of our future application which allowed the validated licensed user to access our data and analytics program.</p>
                <div className="justify-center card-actions mt-5 sm:justify-end">
                    <a href="https://jawn-sds.vercel.app/api/auth/signin" target="_blank" className="btn btn-outline mx-2 w-28">Live Demo</a>
                    <a href="https://linktr.ee/jawn_ca" target="_blank" className="btn btn-outline mx-2 w-28">Creators</a>
                </div>
                </div>
            </div>
            
    )

    
}