"use client";

export default function Employment() {
  const TecTOC = [
    "Spearheaded development of the company website with several pages, while working with other team members in effort of creating a clean and concise application.",
    "Detailed pages that showcase their case studies as well as research, keeping it user friendly with recognizable and familiar layouts.",
    "Mobile support for all screen sizes in either landscape or portrait modes. Adaptive to fit to the users needs and preferences.",
    "Utilizes the vast array of styles to deliver a concise page in effort to enhance readability.",
    "Custom list control with React's built-in functions for user interactivity.",
    "Connected with stakeholders to collaborate and create accurate and concise use cases for future development and creation leading up to the final product.",
  ];
  return (
    <div className="py-5 w-1/2">
      <h2 className="text-4xl italic font-serif font-thin mb-5 text-center">
        Employment and Experience
      </h2>

      <div>
        <div className="flex flex-row justify-between pt-3 font-serif font-thin text-xl">
          <h3>Front-End Web Developer</h3>
          <h3>January 2024 - present</h3>
        </div>
        <p className="italic">
          <a
            className="underline"
            href="https://www.tightoilconsortium.com/"
            target="_blank"
          >
            Tight Oil Consortium
          </a>
          , within their tech branch known as{" "}
          <a className="underline" href="https://www.tectoc.ca" target="_blank">
            TecTOC
          </a>
        </p>

        <ul className="list-disc ml-5 mt-3">
          {TecTOC.map((contents, index) => (
            <li className="py-1" key={index}>
              {contents}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
