
import Hero from "./comp/hero/hero";
import CourseCarousel from "./comp/courseCarousel/courseCarousel";
import FutureCareer from "./comp/futureCareer/futureCareer";
import Gallery from "./comp/gallery/gallery";
import { courses } from "@/utils/homeData";

export default function Home() {


  
  return (
    <div className="">
    <Hero ></Hero>
    <FutureCareer></FutureCareer>
    <CourseCarousel cards={false} courses = {courses}></CourseCarousel>
    <Gallery></Gallery>
    </div>
  );
}


  