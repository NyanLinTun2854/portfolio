import React from "react";
import js from "../img/courses/js.jpg";
import react from "../img/courses/react.jpg";
import tailwind from "../img/courses/tailwind.jpg";
import CoursesCard from "./CoursesCard";

const Courses = () => {
  return (
    <section
      id="courses"
      name="courses"
      className="pt-[70px] md:pt-[90px] lg:pt-[125px] pb-[80px] md:pb-[100px] lg:pb-[130px]"
    >
      <div className="container mx-auto relative">
        <div className="w-[90%] mx-auto">
          <div className="w-full lg:w-[60%] mx-auto text-center">
            <h3 className="text-[30px] md:text-[45px] font-[700] pb-[20px] leading-[1.2]">
              Recommanded Courses
            </h3>
            <p className="text-[15px] md:text-[16px] text-secondary leading-7">
              Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
              tempus, nunc id efficitur sagittis, urna est ultricies eros, ac
              porta sem turpis quis leo.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-0 pt-14 content-center">
            {courses.map((course) => (
              <CoursesCard course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

const courses = [
  {
    name: "JavaScript",
    channel: "Programming by Mosh",
    date: "12 June 2019",
    url: "https://www.youtube.com/@programmingwithmosh",
    img: js,
  },
  {
    name: "react",
    channel: "MMS IT",
    date: "29 Jan 2023",
    url: "https://www.facebook.com/mmsoss",
    img: react,
  },
  {
    name: "tailwind",
    channel: "CodeWall Channel",
    date: "12 June 2019",
    url: "https://www.youtube.com/watch?v=ft30zcMlFao",
    img: tailwind,
  },
];
