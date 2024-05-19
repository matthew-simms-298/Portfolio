'use client'
import Capstone from '@/app/components/projects/Capstone';
import TecTOC from '@/app/components/projects/TecTOC';


export default function ProjectHighlights() {
    return (
        <main className="flex flex-col items-center w-3/4">
            <Capstone/>
            {/*(<TecTOC/>*/}

            <p className='text-center italic font-sans font-semibold py-24'>more projects coming soon...</p>
        </main>
    )
}