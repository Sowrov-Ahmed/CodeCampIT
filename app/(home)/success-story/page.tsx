"use client";
import Image from "next/image";
import Link from "next/link";
import mentors_header from "@/public/images/home/mentors/mentors.png";

export default function SuccessStory() {

  return (
    <div className=" h-screen">
    
      <div className="relative w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px] -z-10 md:-mt-0 -mt-2">
        <Image
          alt="home"
          src={mentors_header}
          fill
          quality={95}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
      </div>
      <div className="absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-32 md:-mt-60 lg:-mt-72 text-white">
        <p className="">Success Story</p>
      </div>
      <div className="flex justify-center items-center mt-16 px-4">
        <Link
          href="/courses"
          className=" text-white bg-magenta  py-6 px-12 rounded-lg lg:text-2xl md:text-base text-xs shadow-gray-400 shadow-xl hover:bg-slate-200 hover:text-magenta transition-all font-newAcademy"
        >
          Join Our Courses & Start Your Success Story
        </Link>
      </div>
    </div>
  );
}
