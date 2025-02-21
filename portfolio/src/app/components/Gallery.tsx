"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Gallery({
  desktopImages,
  mobileImages,
}: {
  desktopImages: HTMLImageElement[] | null;
  mobileImages: HTMLImageElement[] | null;
}) {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (indexModifier: number) => {
    if (desktopImages === null) {
      console.log("there are no images")
    }
    else {
      if (imageIndex + indexModifier < 0) {
        setImageIndex(0);
      } else if (imageIndex + indexModifier > desktopImages.length - 1) {
        setImageIndex(desktopImages.length - 1);
      } else {
        setImageIndex(imageIndex + indexModifier);
      }
    }
    
    console.log(indexModifier);
  };
  return (
    <div className="w-full">
      {desktopImages !== null && (
        <div className="hidden lg:block">
          <h2 className="text-2xl italic font-serif font-thin my-5 text-base-content self-start">
            Destop
          </h2>
          <div className="flex justify-center items-center relative">
            <Image
              className="w-full"
              src={desktopImages[imageIndex]}
              alt={`Tectoc Image`}
              width={1000}
              height={700}
            />

            <button
              className="btn btn-circle btn-lg text-3xl absolute left-0"
              onClick={() => changeImage(-1)}
            >
              ❮
            </button>
            <button
              className="btn btn-circle btn-lg text-3xl absolute right-0"
              onClick={() => changeImage(1)}
            >
              ❯
            </button>
          </div>
        </div>
      )}

      {mobileImages !== null && <div>
        <h2 className="hidden lg:block text-2xl italic font-serif font-thin my-5 mt-16 text-base-content self-start">
          Mobile
        </h2>

        <div className="flex flex-wrap justify-center">
          {mobileImages.map((src, index) => (
            <Image
              key={index}
              className="xl:w-1/4 p-2 transition-transform duration-700 hover:scale-125 ease-in-out "
              src={src}
              alt={`Tectoc Image`}
              width={400} // Set the desired width
              height={1000} // Set the desired height
            />
          ))}
        </div>
      </div>}
    </div>
  );
}
