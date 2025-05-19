"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Course {
  id?: number;
  xitemcode?: string;
  xdesc?: string;
  ximage?: string;
  xstdprice?: string;
  xmrp?: number;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const router = useRouter();

  const handleCourse = (course: Course) => {
    if (course.id) {
      router.push(`/course/${course.id}`);
    }
  };

  return (
    <div
      onClick={() => handleCourse(course)}
      key={course?.id}
      className="p-1 md:p-4 lg:p-4 bg-white rounded-[10px] lg:rounded-[18px] cursor-pointer"
    >
      <div className="relative w-full pb-[70%]">
        {course?.ximage ? (
          <Image
            alt={`Card ${course.xitemcode}`}
            src={course.ximage}
            width={500}
            height={202}
            className="absolute inset-0 w-full h-full rounded-lg object-cover"
          />
        ) : (
          <div>
            <Image
              alt="digital_marketing"
              src="/images/home/brand.png"
              width={300}
              height={950}
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="mt-2 text-black">
        <div
          className="block text-[14px] md:text-[18px] exl:text-[25px] uws:text-[28px] font-semibold leading-tight line-clamp-2 h-[2rem] md:h-[3rem] exl:h-[5rem] overflow-hidden jaro"
        >
          {course.xdesc}
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[10px] md:text-[10px] lg:text-[16px] montserrat flex items-center line-through decoration-gray-500">
            {/* SVG omitted for brevity */}
            {Number(course?.xstdprice)}
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-[10px] md:text-[10px] lg:text-[16px] montserrat flex items-center">
            {/* SVG omitted for brevity */}
            {Number(course?.xmrp)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
