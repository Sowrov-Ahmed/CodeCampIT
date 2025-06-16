'use client'

import Image from "next/image";
import { Suspense } from "react";
import courseBanner from "@/public/images/home/courses/courses.png";
import ExpectationsOverview from "../../comp/course/expectationsOverview";
import LearningOutcome from "../../comp/course/learningOutcome";
import CourseFaq from "../../comp/course/courseFAQ";
import RelatedCourse from "../../comp/course/relateCourse";
import Button from "@/ui/reuseable_comp/Button";
import { courseDetails } from "@/utils/homeData";
import Link from "next/link";
import { useParams } from 'next/navigation';

export default  function CourseDetailPage() {
   const paramsID = useParams();
  const tab = paramsID.id; 
  const id = Number(tab);
  const course = courseDetails.find((course) => course.xitemid === id);


    if (!course) {
    return (
      <div className="text-center text-red-600 font-bold py-20">
        Course not found.
      </div>
    );
  }

  return (
    <div className="mb-10 sm:mb-10 md:mb-20 lg:mb-0 exl:mb-16 uws:mb-28">
      <div className="relative bg-slate-200/50 ">
        <div className="relative w-full h-[240px] md:h-[453px] lg:h-[453px] uws:h-[700px] z-10 md:-mt-0 -mt-2 ">
          <Image
            alt="home"
            src={courseBanner}
            fill
            quality={95}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70" />
        </div>
        <div className="absolute  text-[35px] md:text-[60px] lg:text-[60px] regularBrush text-center w-full -mt-48 md:-mt-72 lg:-mt-72 text-white z-50">
        <p className="font-newAcademy lg:leading-5 md:leading-8 leading-5">{course?.xdesc}</p>
      </div>

        <div className="w-11/12 mx-auto md:w-5/6 py-12 ">
          <div className="flex lg:flex-row exl:flex-row uws:flex-row md:flex-col sm:flex-col xs:flex-col gap-8 justify-center items-end -mt-36 lg:-mt-48">
            <div className="w-[250px] xs:w-full md:w-[300px] lg:w-[450px] lg:h-[600px] uws:w-[800px] uws:h-[970px] h-auto pb-8 border-b-4 border-magenta mx-auto z-30">
              <div className="bg-black border-2 border-magenta rounded-[18px] px-4 py-8">
                {course?.ximage ? (
                  <div className="h-auto  lg:h-[500px] uws:h-[850px] ">
                    <Image
                      alt="digital_marketing"
                      src={course.ximage}
                      width={1000}
                      height={950}
                      className="object-contain w-full h-auto lg:h-[450px] uws:h-[750px] "
                    />
                    <Link
                      href={
                        course.xdesc.toLowerCase() === "video editing" ||  course.xdesc.toLowerCase() === "c++"
                          ? "/courses"
                          : "/instruction"
                      }
                    >
                      <Button className=" bg-magenta hover:bg-violet mx-auto w-full mt-4 focus:outline-none focus:ring-0">
                        {course.xdesc.toLowerCase() === "video editing" || course.xdesc.toLowerCase() === "c++"
                          ? "Not Available"
                          : "Enroll Now"}
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <Image
                    alt="digital_marketing"
                    src={`/images/courses/course/course.png`}
                    width={300}
                    height={950}
                    className="w-full h-auto lg:h-[500px] uws:h-[850px]"
                  />
                )}
              </div>
            </div>

            <div className="bg-magenta text-white w-full md:w-full h-auto py-6 flex flex-col lg:flex-row justify-between items-end rounded-[18px]">
              <div className="w-full ">
                <div className="bg-black px-4 py-2 w-fit montserat font-semibold  rounded-tr-[12px] rounded-br-[12px] uws:text-[30px] mb-2">
                  <p>
                    <span className="text-red-600">Class time :</span>{" "}
                    {course?.time}
                  </p>
                  <p>
                    <span className="text-red-600">Class duration :</span> {course?.duration}
                  </p>
                </div>
               
                <p className="bg-black px-4 py-2 w-fit montserat font-semibold text-[16px] md:text-[20px] rounded-tr-[12px] rounded-br-[12px] uws:text-[30px] mb-2">
                  Live Class & Recorded Video
                </p>
                <p className="bg-black px-4 py-2 w-fit montserat font-semibold text-[16px] md:text-[20px] rounded-tr-[12px] rounded-br-[12px] uws:text-[30px]">
                  COURSE DETAILS
                </p>
              </div>

              <div className="text-left pr-4 mt-6 md:mt-4 lg:text-right lg:pr-12 w-full xs:pl-2 md:pl-4">
                <p className="jaro text-[32px] md:text-[50px] uws:text-[75px] xs:leading-[30px] md:leading-10 uws:leading-[60px]">
                  {course?.xdesc
                    ?.split(",")
                    .map((part: string, index: number) => (
                      <span key={index}>
                        {part}
                        {index < course.xdesc.split(",").length - 1 && <br />}
                      </span>
                    ))}
                </p>
                <p className="text-[20px] md:text-[26px] text-black uws:text-[36px]">
                  Mastery
                </p>
                <p className="font-semibold">Price : {course?.xprice}</p>
              </div>
            </div>
          </div>

          <div className="bg-white py-6 flex flex-col items-start rounded-[18px] mt-8">
            <div className="w-11/12 mx-auto">
              <div className="flex items-center gap-4">
                <p className="jaro text-[24px] md:text-[32px] uws:text-[60px] text-magenta">
                  What to Expect
                </p>
                <h1 className="border-[1px] flex-grow border-magenta"></h1>
              </div>
              <div className="mt-4 text-black text-[14px] uws:text-[28px] montserat font-semibold">
                {course?.expectations && (
                  <ExpectationsOverview expectations={course.expectations} />
                )}
              </div>
            </div>
          </div>

          <div className="bg-white py-6 flex flex-col rounded-[18px] mt-8">
            {course?.learningOutCome && (
              <LearningOutcome learningOutCome={course.learningOutCome} />
            )}
          </div>

          <div className="bg-white py-8 rounded-[18px] mt-8">
            <div className="w-11/12 mx-auto">
              <p className="jaro text-[24px] md:text-[32px] text-magenta uws:text-[60px]">
                FREQUENTLY ASKED QUESTIONS
              </p>
              {course?.courseFAQ && <CourseFaq courseFAQ={course.courseFAQ} />}
            </div>
          </div>
        </div>
      </div>

      <Suspense
        fallback={<div className="text-red-600 py-8">Loading other courses...</div>}
      >
        <RelatedCourse />
      </Suspense>
    </div>
  );
}
