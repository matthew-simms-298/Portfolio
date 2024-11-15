"use client";

import React, { useState } from "react";

import tectocImage1 from "/public/images/tectoc-images/tectoc-1.png";
import tectocImage2 from "/public/images/tectoc-images/tectoc-2.png";
import tectocImage3 from "/public/images/tectoc-images/tectoc-3.png";
import tectocImage4 from "/public/images/tectoc-images/tectoc-4.png";
import tectocImage5 from "/public/images/tectoc-images/tectoc-5.png";
import tectocImage6 from "/public/images/tectoc-images/tectoc-6.png";
import tectocImage7 from "/public/images/tectoc-images/tectoc-7.png";
import tectocImage8 from "/public/images/tectoc-images/tectoc-8.png";
import tectocImage9 from "/public/images/tectoc-images/tectoc-9.png";
import tectocImage10 from "/public/images/tectoc-images/tectoc-10.png";
import tectocImage11 from "/public/images/tectoc-images/tectoc-11.png";
import tectocImage12 from "/public/images/tectoc-images/tectoc-12.png";

import tectocMobile1 from "/public/images/tectoc-images/mobile-images/tectoc-mobile1.png";
import tectocMobile2 from "/public/images/tectoc-images/mobile-images/tectoc-mobile2.png";
import tectocMobile3 from "/public/images/tectoc-images/mobile-images/tectoc-mobile3.png";
import tectocMobile4 from "/public/images/tectoc-images/mobile-images/tectoc-mobile4.png";
import tectocMobile5 from "/public/images/tectoc-images/mobile-images/tectoc-mobile5.png";
import tectocMobile6 from "/public/images/tectoc-images/mobile-images/tectoc-mobile6.png";
import tectocMobile7 from "/public/images/tectoc-images/mobile-images/tectoc-mobile7.png";
import tectocMobile8 from "/public/images/tectoc-images/mobile-images/tectoc-mobile8.png";
import tectocMobile9 from "/public/images/tectoc-images/mobile-images/tectoc-mobile9.png";
import tectocMobile10 from "/public/images/tectoc-images/mobile-images/tectoc-mobile10.png";
import tectocMobile11 from "/public/images/tectoc-images/mobile-images/tectoc-mobile11.png";
import tectocMobile12 from "/public/images/tectoc-images/mobile-images/tectoc-mobile12.png";

import Image from "next/image";

const tectocImages = [
  tectocImage1,
  tectocImage2,
  tectocImage3,
  tectocImage4,
  tectocImage5,
  tectocImage6,
  tectocImage7,
  tectocImage8,
  tectocImage9,
  tectocImage10,
  tectocImage11,
  tectocImage12,
];

const mobileImages = [
  tectocMobile1,
  tectocMobile2,
  tectocMobile3,
  tectocMobile4,
  tectocMobile5,
  tectocMobile6,
  tectocMobile7,
  tectocMobile8,
  tectocMobile9,
  tectocMobile10,
  tectocMobile11,
  tectocMobile12,
];

export default function TecTOCGallery() {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (indexModifier: number) => {
    if (imageIndex + indexModifier < 0) {
      setImageIndex(0);
    } else if (imageIndex + indexModifier > tectocImages.length - 1) {
      setImageIndex(tectocImages.length - 1);
    } else {
      setImageIndex(imageIndex + indexModifier);
    }
    console.log(indexModifier);
  };
  return (
    <div>
      <h2 className="text-2xl hidden xl:block italic font-serif font-thin my-5 text-base-content self-start">
        Destop
      </h2>
      <div className="hidden xl:flex justify-center items-center relative">
        <button
          className="btn btn-circle btn-lg text-3xl m-2 absolute left-0"
          onClick={() => changeImage(-1)}
        >
          ❮
        </button>
        <Image
          className="w-full"
          src={tectocImages[imageIndex]}
          alt={`Tectoc Image`}
          width={1000} // Set the desired width
          height={700} // Set the desired height
        />

        <button
          className="btn btn-circle btn-lg text-3xl m-2 absolute right-0"
          onClick={() => changeImage(1)}
        >
          ❯
        </button>
      </div>
      <h2 className="hidden xl:block text-2xl italic font-serif font-thin my-5 mt-16 text-base-content self-start">
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
    </div>
  );
}
