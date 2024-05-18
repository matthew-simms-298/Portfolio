'use client'
import Image from "next/image"
import Capstone from '@/app/components/projects/Capstone';
import TecTOC from '@/app/components/projects/TecTOC';


export default function ProjectHighlights() {
    return (
        <main className="flex flex-col items-center w-2/3">
            <Capstone/>
            {/*<TecTOC/>*/}
        </main>
    )
}