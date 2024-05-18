'use client'
import ProjectHighlights from '@/app/components/ProjectHighlights'
import TechStack from '@/app/components/TechStack'
export default function Home() {
  return (
    <main className={"min-h-screen bg-base-200 p-5 text-base-content flex flex-col items-center"}>
      <div className='text-base-200 h-80 w-full mb-20 hover:text-white'>
        Surprise! It's me the dummy div!
      </div>

      <ProjectHighlights/>
    </main>
  )
}
