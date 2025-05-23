import React from "react";
import coursesBanner from "@/public/images/home/courses/courses.png";
import Image from "next/image";
import CourseCard from "../comp/courseCard/courseCard";
import { courses } from "@/utils/homeData";

export const revalidate = 20;
type Course = {
  xitemcode: string;
  xdesc: string;
  ximage: string;
  xstdprice: string;
  xmrp: number;
};
const page = async () => {
  return (
    <div className="relative">
  
      <div className="relative w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px] -z-10 md:-mt-0 -mt-2">
        <Image
          alt="home"
          src={coursesBanner}
          fill
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
      </div>
      <div className="absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-56 lg:-mt-72 uws:-mt-96 text-white">
        <p className="">Our Offers</p>
      </div>

      <div className="bg-gray-200/50 px-3 py-6 md:px-8 md:py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-black text-left mb-6">
            <p className="md:text-[36px] lg:text-[48px] uws:text-[56px] jaro text-center">
              Courses{" "}
              <span className="text-[10.45px] uws:text-[17px]">We Offer</span>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 exl:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {courses?.map((course: Course) => (
              <CourseCard key={course.xitemcode} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
