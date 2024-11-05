"use client";

export default function Skills() {
  const pagesAndComponents = [
    "Home",
    "About",
    "Case Studies*",
    "Services*",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
    "Header / Navigation",
    "Footer",
  ];

  const caseStudies = [
    "Navigator",
    "About section",
    "List of Services",
    "Service Details",
    "Drop Down Menus",
  ];
  const services = [
    "Service Navigator",
    "Case Study Sub-Nav",
    "About section",
    "List of Services",
    "Detailed Case Studies",
    "Figures with figure text",
    "References",
  ];

  const header = [
    "TecTOC Logo (Left)",
    "Hyperlinks centered",
    "Home",
    "About",
    "Services",
    "Contact (Right)"
  ];

  const footer = [
    "TecTOC Logo",
    "Copy Rights",
    "Privacy Policy",
    "Terms of Service",
    "Tight Oil Consortium Logo",
    "Mobile Customizations"
  ];

  return (
    <div id="skills" className="w-full items-center text-center">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start flex-wrap gap-6">
        <div className="border rounded-lg border-base-content bg-base-100 w-full lg:w-[32%] p-4 shadow-xl hover:scale-105 transition duration-500">
          <h2 className="underline font-serif text-xl">Pages and Components</h2>
          {pagesAndComponents.map((content, index) => (
            <div key={index} className="flex flex-col justify-center italic text-sm lg:text-lg">
              <p className="py-2 text-center">◦ {content}</p>
            </div>
          ))}
        </div>

        <div className="border rounded-lg border-base-content bg-base-100 w-full lg:w-[32%] p-4 shadow-xl hover:scale-105 transition duration-500">
          <h2 className="underline font-serif text-xl">
            Case Studies Requirements
          </h2>
          {caseStudies.map((content, index) => (
            <div key={index} className="flex flex-col justify-center italic text-sm lg:text-lg">
              <p className="py-2 text-center">◦ {content}</p>
            </div>
          ))}
        </div>

        <div className="border rounded-lg border-base-content bg-base-100 w-full lg:w-[32%] p-4 shadow-xl hover:scale-105 transition duration-500">
          <h2 className="underline font-serif text-xl">
            Services Requirements
          </h2>
          {services.map((content, index) => (
            <div key={index} className="flex flex-col justify-center italic text-sm lg:text-lg">
              <p className="py-2 text-center">◦ {content}</p>
            </div>
          ))}
        </div>

        <div className="border rounded-lg border-base-content bg-base-100 w-full lg:w-[32%] p-4 shadow-xl hover:scale-105 transition duration-500">
          <h2 className="underline font-serif text-xl">
            Header Requirements
          </h2>
          {header.map((content, index) => (
            <div key={index} className="flex flex-col justify-center italic text-sm lg:text-lg">
              <p className="py-2 text-center">◦ {content}</p>
            </div>
          ))}
        </div>

        <div className="border rounded-lg border-base-content bg-base-100 w-full lg:w-[32%] p-4 shadow-xl hover:scale-105 transition duration-500">
          <h2 className="underline font-serif text-xl">
            Footer Requirements
          </h2>
          {footer.map((content, index) => (
            <div key={index} className="flex flex-col justify-center italic text-sm lg:text-lg">
              <p className="py-2 text-center">◦ {content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
