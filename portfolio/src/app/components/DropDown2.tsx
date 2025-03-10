'use client'

export default function MobileSideHeader() {
    return (
        <div className="fixed w-2/3 left-0 bg-red-500 h-full z-30 flex flex-col items-start p-4 justify-center">
            <h1 className="text-2xl italic font-serif font-thin mb-5 text-center text-base-content self-start">Matthew Simms</h1>
            <div className="flex flex-col">
                <a href="/" className="py-5 hover:text-base-content duration-500 font-bold">
                    Home
                </a>
                <a
                    href="/pages/contact"
                    className="py-5 hover:text-base-content duration-500 font-bold"
                >
                    Contact
                </a>
                <div className="dropdown dropdown-hover">
                    <button
                        className="py-5 hover:text-base-content duration-500 font-bold"
                    >
                        Projects
                    </button>
                    <ul
                        className="menu dropdown-content bg-base-100 rounded-box z-[1]">
                        <li className="transition duration-500 hover:text-base-content"><a href="/pages/capstone">Capstone</a></li>
                        <li className="transition duration-500 hover:text-base-content"><a href="/pages/tectoc">TecTOC</a></li>
                    </ul>
                </div>
                <a
                    href="/Matthew Simms.pdf"
                    download={"Matthew Simms Resume"}
                    className="py-5 hover:text-base-content duration-500 font-bold"
                >
                    Resume
                </a>
            </div>
        </div>
    )
}