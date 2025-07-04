import Image from "next/image";
import React, { ReactNode } from "react";
import mentors_header from "@/public/images/home/courses/courses.png";
import Link from "next/link";
import { FcManager } from "react-icons/fc";

export type Mentor = {
  xteacher: number;
  xteachername: string;
  xexpartarea: string;
  xsortindex: number;
  ximage?: string;
  xowndesc?: string;
  edu?: string;
  works?: string | ReactNode;
};
const mentors: Mentor[] = [
  {
    xteacher: 101,
    xteachername: "Tanzib Mahammad",
    xexpartarea: "Research Workshop & DSA",
    xsortindex: 1,
   
    edu: "CSE,AIUB",
    works: (
      <>
        <span>
          RA @QCRI - CODE GEN & RAG <br /> Former RA@ AIUB - FL & DS  <br/> Competitive Programmer
        </span>
      </>
    ),
  },
  {
    xteacher: 102,
    xteachername: "Sowrov Ahmed",
    xexpartarea: "Advanced Web Development",
    xsortindex: 2,

    edu: "CSE,AIUB",
    works: "Works at Digital Marketplace",
  },
  {
    xteacher: 103,
    xteachername: "MD.Shaiful Islam",
    xexpartarea: "Advanced Web Development",
    xsortindex: 3,
    edu: "CSE,AIUB",
    works: "Software Engineer at DBSL",
  },
  {
    xteacher: 104,
    xteachername: "Nazrul Islam",
    xexpartarea: "Power Systems Engineer",
    xsortindex: 4,
    edu: "EEE,AIUB",
    works: "Assistant Engineer at Dana Group",
  },
  {
    xteacher: 105,
    xteachername: "Rakibul Islam",
    xexpartarea: "Video Editing",
    xsortindex: 4,
    edu: "CSE,AIUB",
    works: "Works at Digital Marketplace",
  },
    {
    xteacher: 106,
    xteachername: "Md.Adnan",
    xexpartarea: "C++ & DSA",
    xsortindex: 4,
    edu: "CSE,AIUB",
    works: "Competitive Programmer",
  },
];

const page = async () => {
  return (
    <div className="relative mx-auto ">
   
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
        <p className="">Our mentors</p>
      </div>
      <div className=" w-9/12 mx-auto mt-12 md:mt-20 lg:mt-28 uws:mt-40 grid xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg: grid-cols-4 exl:grid-cols-4 uws:grid-cols-4">
        {mentors?.map((mentor, idx: number) => (
          <Link
            href={`#`}
            key={idx}
            className={
              "w-11/12 xs:h-[200px] md:h-[250px] lg:h-[465px] uws:h-[650px] text-center xs:mt-1 mt-8 flex flex-col items-center lg:mb-0 md:mt-7 mb-16"
            }
          >
            <div
              className={` ${
                mentor?.ximage ? "bg-magenta" : "bg-zinc-100/90 shadow-sm"
              }
                relative  rounded-full w-24 h-24 sm:w-28 sm:h-28 md:h-32 md:w-32 lg:w-60 lg:h-60 uws:h-96 uws:w-96 flex justify-center items-center`}
            >
              <div className="rounded-full w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-60 lg:h-60  uws:h-96 uws:w-[360px] flex justify-center items-center">
                {mentor?.ximage ? (
                  <Image
                    src={mentor?.ximage}
                    alt="Mentor Image"
                    width={200}
                    height={200}
                    className="rounded-full object-cover h-28 sm:h-32 md:h-36 lg:h-72 uws:h-[400px]   uws:w-full xs:-mt-4 sm:-mt-3 md:-mt-4 lg:-mt-10 uws:-mt-5"
                  />
                ) : (
                
                  <FcManager className=" bg-magenta rounded-full object-cover w-full h-full " />
                )}
              </div>
            </div>
            <h3 className="text-black  md:text-[22px] lg:text-[36px] mt-4 lg:mt-8 uws:text-[50px] jaro leading-tight">
              {mentor?.xteachername}
            </h3>
            <p className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none">
              Instructor
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: mentor?.xexpartarea as string,
              }}
              className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none"
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: mentor?.edu as string,
              }}
              className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none"
            ></p>
            {typeof mentor?.works === "string" ? (
              <p
                className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none"
                dangerouslySetInnerHTML={{ __html: mentor?.works }}
              />
            ) : (
              <p className="text-black text-[11px] md:text-[13px] lg:text-[16px] uws:text-[24px] montserrat leading-none">
                {mentor?.works}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
