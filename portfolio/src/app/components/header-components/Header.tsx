"use client"

import React from "react"

import AboutMe from "./AboutMe"
import HeaderLinks from "./HeaderLinks"

export default function Header() {
    return (
        <header id="home" className="text-primary bg-base-200 mb-24 flex flex-col items-center w-full shadow-base-300 -z-10">
            <HeaderLinks />
            <AboutMe />
        </header>
    )
    }