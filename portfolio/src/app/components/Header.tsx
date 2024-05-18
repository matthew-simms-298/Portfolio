'use client'

import Image from "next/image"

import React from "react"

export default function HeaderComponent() {
    return (
        <header className="h-96 flex flex-col items-center fixed w-full z-10">
                <div className="flex flex-row items-center justify-evenly bg-green-500 w-full h-1/2">
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">Portfolio</a>
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg" >GitHub</a>
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">About Me</a>
                    <div className="flex flex-col text-center items-center mt-32">
                        <h1 className="text-3xl font-bold my-5">Matthew Simms</h1>
                        <Image className="rounded-full" src="/profile pic.jpg" alt="Matthew Simms" width={250} height={250}/>
                    </div>                
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">Education</a>
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">Skills</a>
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">Linkedin</a>
                </div>
        </header>
    )
}