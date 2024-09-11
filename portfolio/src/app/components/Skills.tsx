"use client";

export default function Skills() {
  const webDevelopment = [
    ["HTML5", "⭐⭐⭐⭐⭐"],
    ["CSS", "⭐⭐⭐⭐⭐"],
    ["TailwindCSS", "⭐⭐⭐⭐⭐"],
    ["Next.JS", "⭐⭐⭐"],
    ["Node.JS", "⭐⭐⭐"],
    ["React", "⭐⭐⭐"],
    ["Vercel", "⭐⭐⭐"],
  ];

  const programming = [
    ["JavaScript", "⭐⭐⭐⭐⭐"],
    ["TypeScript", "⭐⭐⭐⭐⭐"],
    ["C#", "⭐⭐⭐⭐"],
    ["Java", "⭐⭐⭐⭐"],
    ["Python", "⭐⭐⭐⭐"],
    ["PL/SQL", "⭐⭐⭐"],
  ];
  const externalTech = [
    ["GitHub", "⭐⭐⭐⭐⭐"],
    ["GitHub Desktop", "⭐⭐⭐⭐⭐"],
    ["Microsoft Teams", "⭐⭐⭐⭐⭐"],
    ["Visual Studio Code", "⭐⭐⭐⭐⭐"],
    ["Figma", "⭐⭐⭐⭐"],
    ["Visual Studio", "⭐⭐⭐⭐"],
    ["Unity 2D", "⭐⭐"],
  ];

  return (
    <div className="w-2/3 items-center text-center mt-20">
      <h2 className="text-4xl italic font-serif font-thin">Skills</h2>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:items-start m-3">
        <div className="border rounded-lg border-base-content bg-base-100 w-full lg:w-1/3 p-2 m-3">
          <h2 className="underline font-serif text-xl">Web Development</h2>
          {webDevelopment.map((content, index) => (
            <div className="flex flex-row justify-between px-3 ">
              <p className="py-2 text-white" key={index}>
                {content[0]}
              </p>
              <p className="py-2 text-white" key={index}>
                {content[1]}
              </p>
            </div>
          ))}
        </div>
        <div className="border rounded-lg border-base-content bg-base-100 w-full lg:w-1/3 p-2 m-3">
          <h2 className="underline font-serif text-xl">
            Programming Languages
          </h2>
          {programming.map((content, index) => (
            <div className="flex flex-row justify-between px-3">
              <p className="py-2 text-white" key={index}>
                {content[0]}
              </p>
              <p className="py-2 text-white" key={index}>
                {content[1]}
              </p>
            </div>
          ))}
        </div>

        <div className="border rounded-lg border-base-content bg-base-100 w-full lg:w-1/3 p-2 m-3">
          <h2 className="underline font-serif text-xl">
            External technologies
          </h2>

          {externalTech.map((content, index) => (
            <div className="flex flex-row justify-between px-3">
              <p className="py-2 text-white" key={index}>
                {content[0]}
              </p>
              <p className="py-2 text-white" key={index}>
                {content[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
