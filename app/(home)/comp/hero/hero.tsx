"use client";

import React from "react";
import HeroAnimated from "./HeroAnimated";


const Hero = () => {
 
  const images = [
    "/images/hero/img2.webp",
    "/images/hero/img3.webp",
     "/images/hero/img5.webp",
     "/images/hero/img4.webp",
     "/images/hero/img1.webp",
     "/images/hero/img6.webp",  
  ];

  return (
    <div className=" relative  lg:mb-0 mb-60" suppressHydrationWarning={true}>
   
      <div className="lg:h-[36rem] md:h-[25rem] h-[20rem] overflow-hidden">
        <HeroAnimated images={images} />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-10/12">
        <div className="bg-gradient-to-b from-violet to-magenta text-white px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-10 text-center rounded-lg shadow-lg">
          <div className="text-start">
            <h1 className="lg:text-4xl  md:text-[32px] text-xl  font-extrabold font-newAcademy leading-tight">
             “Master Coding. Build Real Skills. Transform Your Future.”
            </h1>
            <h2 className="lg:text-base md:text-lg text-sm font-light font-montserrat mt-2">
              Hands-on coding courses with expert mentorship.
            </h2>

            <div className="flex flex-wrap lg:gap-4 md:gap-3 gap-2 bg-white w-fit py-2 px-6 sm:px-10 rounded-xl mt-4">
              {["DSA", "WEB DEVELOPMENT", "RESEARCH WORKSHOP", "VIDOE EDITING"].map(
                (item) => (
                  <div
                    key={item}
                    className="bg-primary hover:bg-black py-1.5 px-4 sm:px-6 rounded-sm transition"
                  >
                    <span className="text-sm sm:text-base text-white font-normal font-montserrat">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      </div>

  );
};

export default Hero;