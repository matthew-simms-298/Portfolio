"use client";

import React from "react";
import Competitors from "@/app/components/Competitors";
import ProjectRequirements from "@/app/components/ProjectRequirements";
import Challenges from "@/app/components/Challenges";
import { capstoneRequirements } from "@/app/extra/StaticData";
import { capstoneImages } from "@/app/extra/ImageImports";
import Gallery from "@/app/components/Gallery";

export default function Capstone() {
  return (
    <main className="flex flex-grow bg-base-200 py-5 justify-center">
      <div className="flex flex-col items-center w-3/4">
        <h2 className="text-4xl italic font-serif font-thin mb-5 text-center text-base-content">
          What is SDS?
        </h2>
        <div className="my-10">
          <h3 className="font-serif">The Story...</h3>
          <p className="italic font-serif p-5 text-lg">
            As the days progress, more and more companies are shifting to
            digital platforms for data management and communication, the same is
            prevelent in the grocery industry. However, not everyone has the
            possibility of aquireing those tools and technologies to grow there
            business. This is what me and my fellow capstone members decided
            when making the {'"Schedule Distribution System"'} or {'"SDS"'} for
            short.
          </p>
        </div>

        <div className="flex flex-col items-center w-full my-5">
          <h2 className="text-3xl italic font-serif font-thin mb-5 text-base-content">
            The Journey
          </h2>
          <div className="py-8">
            <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
              Purpose
            </h2>
            <p className="self-start">
              Throughout my employment at different grocery stores and other
              part time positions, there was always a common pattern with data
              management. When handling schedules, we always kept a physical
              copy on a bulletin board as a means for us to retrieve our next
              shifts. However, due to the lack of an online presence this form
              of static communication arises a handful of pretentious and
              frustrating issues for managers and department heads communicating
              these new schedules or potential future adjustments to their
              respective employees. This has led to a lof of confusion when
              deciding who will be coming in, in replacement of an employee;
              different employees having opposing versions of the schedule, due
              to a potential overrite when making an adjustment, causing one or
              more employees to fall out of the loop, to complete schedule
              remapping to accomodate even the simplest of miscommunications.
              Retrieving the information would require either everyone to come
              into the store to retrieve a photo of their current or future
              schedule or have the head send out the schedule to all of us
              shortly after posting in hopes we all have a means of receiving it
              and there's no future issues with having to change it again. This
              is where me and my teammates would lend a hand in assisting them
              with SDS to eliminate these issues.
            </p>

            <div className="py-8">
              <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
                Competitors
              </h2>
              <Competitors />
              <p>
                These three companies were our primary candidates for what would
                be the basis for our project, a benchmark if you will. This
                helped us determine the necessary components and features needed
                to combat with other apps.
              </p>
            </div>

            <div className="py-8">
              <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
                Project Requirements
              </h2>
              <ProjectRequirements components={capstoneRequirements} />
            </div>

            <div className="py-8 flex flex-col items-center">
              <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
                Challenges
              </h2>

              <Challenges />
            </div>

            <div className="py-8 flex flex-col">
              <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
                Future plans
              </h2>
              <p>In the future, we hope to advance this pototype into a fully fledged mobile app, allowing local and small businesses to have a more consistent and efficient form of communication between managers and employees.</p>
            </div>

            <div className="w-full py-8 flex flex-col items-center border-b pb-16 mb-10 border-b-base-content">
              <h2 className="w-full text-3xl italic font-serif font-thin mb-10 text-base-content text-center border-b pb-5 border-base-content">
                Gallery
              </h2>
              <Gallery desktopImages={null} mobileImages={capstoneImages}/>
            </div>
          </div>
        </div>
        <h2 className="text-3xl italic font-serif font-thin mb-5 text-base-content self-center">
              Learn More
            </h2>

            <div className="mb-10 w-full items-center flex justify-center">
              <a
                href="https://jawn-sds.vercel.app"
                target="blank"
                className="btn btn-outline w-1/2 xl:w-1/4  m-5"
              >
                Visit SDS
              </a>
              <a
                href="https://github.com/RCC-STUDIO/jawn-timetracker"
                target="_blank"
                className="btn btn-outline w-1/2 xl:w-1/4 m-5"
              >
                GitHub
              </a>
            </div>
      </div>
    </main>
  );
}
