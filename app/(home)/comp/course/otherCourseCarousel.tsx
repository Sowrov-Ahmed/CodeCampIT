"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Course {
  id: number;
  xitemcode: string;
  xdesc: string;
  ximage?: string;
  xmrp?: number;
}

interface OtherCourseCarouselProps {
  courses: Course[];
}

const OtherCourseCarousel: React.FC<OtherCourseCarouselProps> = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };

  const displayCourses = courses?.map((_, i) => courses[(currentIndex + i) % courses.length]) || [];

  return (
    <div className="mt-8 lg:mt-24 exl:mt-24 uws:mt-24">
      <div className="flex w-8/12 xs:w-10/12 mx-auto">
        <div className="flex flex-row-reverse justify-between mx-auto w-11/12 uws:mx-auto uws:w-9/12 lg:-ml-10">
          <div className="text-black text-left mb-4">
            <div className="text-2xl font-bold w-fit ml-4 lg:ml-8 flex items-center">
              <p className="xs:text-[15px] md:text-[36px] lg:text-[48px] uws:text-[56px] jaro text-magenta">
                OTHER COURSES
              </p>
            </div>
          </div>

          {courses?.length >= 9 && (
            <div className="flex items-center mb-6 space-x-4 px-4 md:px-3 lg:px-0 w-3/6 justify-center uws:w-24">
              <button onClick={handlePrev} className="bg-red-600 text-white p-2 rounded-full">
                <FaArrowLeft className="text-black uws:text-[60px]" />
              </button>
              <button onClick={handleNext} className="bg-red-600 text-white p-2 rounded-full">
                <FaArrowRight className="text-black uws:text-[60px]" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="grid xs:grid-cols-2 md:grid-cols-3 grid-cols-3 justify-center gap-3 px-4 md:px-3 lg:px-0 lg:mb-12 exl:mb-2 xs:w-5/6 lg:w-4/6">
          {displayCourses.map((course) => (
            <Link
              href={`/course/${course?.id}`}
              key={course.xitemcode}
              className={`${
                course?.ximage ? "" : "border bg-zinc-100/20 border-zinc-300/30 shadow-sm"
              } xs:w-[110px] sm:w-[150px] md:w-[170px] lg:w-[200px] exl:w-[300px] p-1 md:p-4 lg:p-4 rounded-[10px] lg:rounded-[18px] uws:w-[450px] mx-auto mt-2 lg:mt-1 exl:mt-5 uws:mt-7 border border-magenta`  }
            >
              <div className="relative h-28 md:h-[100px] lg:h-36 exl:h-48 uws:w-full uws:h-[350px]">
                {course?.ximage ? (
                  <Image
                    alt={`Card `}
                    src={`${course.ximage}`}
                    width={262}
                    height={202}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div>
                    <Image
                      alt="digital_marketing"
                      src={`/images/home/brand.png`}
                      width={300}
                      height={950}
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="mt-3 text-black">
                <p
                  className="text-8 md:text-lg leading-none md:leading-none lg:text-[32px] uws:text-[40px] jaro"
                  title={`${course?.xdesc}`}
                >
                  {course?.xdesc.slice(0, 30) + " ..."}
                </p>
              </div>
              <div className='flex items-center'>
                <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-2xl"
                              height="0.8em"
                              width="0.8em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                              <path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5"></path>
                              <path d="M8 11h6"></path>
                            </svg>
                            {course?.xmrp}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherCourseCarousel;
