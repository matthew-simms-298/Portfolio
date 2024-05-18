'use client'

import Image from "next/image"

import React from "react"

export default function HeaderComponent() {
    return (
        <header className="h-96 flex flex-col items-center fixed w-full z-10">
                <div className="flex flex-row items-center justify-evenly bg-base-100 w-full h-1/2 shadow-2xl shadow-base-300">
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">Portfolio</a>
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">GitHub</a>
                    <div className="flex flex-col text-center items-center mt-64 w-1/3">
                        <Image className="rounded-full mt-3" src="/profile pic.jpg" alt="Matthew Simms" width={250} height={250}/>
                        <p className="mt-3">Hello! I am Matthew Simms, a recent SAIT graduate from the Software Development program. I am primarily a Front-End React Developer, based in Calgary, AB 🍁🏒</p>
                    </div>                
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">Education</a>
                    <a className="btn btn-link btn-md hidden mt-32 sm:flex lg:btn-lg">Linkedin</a>
                </div>
        </header>
    )
}