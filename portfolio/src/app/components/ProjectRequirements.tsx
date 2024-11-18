"use client";

type ComponentGroup = {
  class: string;
  elements: string[];
};

export default function ProjectRequirements({components}: {components: ComponentGroup[];}) {
  return (
      <div className="flex flex-col lg:flex-row items-center text-center justify-between xl:items-stretch flex-wrap">
        {components.map((group, index) => (
          <div key={index} className="flex flex-col border rounded-lg border-base-content bg-base-100 w-full lg:w-[30%] py-4 shadow-xl hover:scale-110 my-4 transition duration-500">
            <h2 className="underline font-serif text-xl mb-5">{group.class}</h2>
            {group.elements.map((content, index) => (
              <div
                key={index}
                className="flex flex-col italic h-full"
              >
                <p className="pb-4">◦ {content}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    
  );
}
