"use client";

export default function Dodge() {
  return (
    <div className="card xl:card-side bg-base-100 shadow-xl m-5 w-full hover:scale-110 transition duration-700">
      <figure className="lg:w-1/4">
        <img  className="bg-white" src="/images/Dodge1999.png" alt="Dodge Logo 1999" />
      </figure>
      <div className="card-body lg:w-3/4">
        <h2 className="card-title">Dodge 1999 Fanmade Website (WIP)</h2>
        <p>
          This is a passion project of mine, I am a big fan of the Dodge
          company, as well as I drove a 1999 Dodge Stratus as my first vehicle.
          {"It's"} a modernization of the 1999 model year for the Dodge Website
        </p>

        <div className="card-actions items-center justify-center md:justify-between">
          <div className="flex-wrap flex flex-row justify-center">
            {/*Images for the Tech Stack will be added after I find out what I will use*/}
          </div>
          <div className="">
            <a
              href="https://www.tectoc.ca"
              target="blank"
              className="btn btn-outline btn-disabled my-1 xl:mx-2 w-full xl:w-28"
            >
              Live Demo
            </a>
            <a
              href=""
              target="_blank"
              className="btn btn-outline btn-disabled my-1 xl:mx-2 w-full xl:w-28 "
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
