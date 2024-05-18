import Image from 'next/image'
import HeaderComponent from './components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-red-500 p-5">
      <div className='h-80 w-full mb-20'>
        Surprise! It's me the dummy div!
      </div>
      

      <div className="card card-side bg-yellow-500 shadow-xl m-5">
        <figure><Image src="/profile pic.jpg" alt="Capstone Project" width={250} height={250}/></figure>
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          <p>Body content</p>
        </div> 
      </div>
      <div className="card card-side bg-yellow-500 shadow-xl m-5">
        <div className="card-body">
          <h2 className="card-title">Title</h2>
          <p>Body content</p>
        </div>
        <figure><Image src="/profile pic.jpg" alt="Capstone Project" width={250} height={250}/></figure>

      </div>
    </main>
  )
}
