import React from "react";

const CoursesCard = ({ course }) => {
  return (
    <a
      href={course.url}
      target="_blank"
      className="w-full h-[400px] group overflow-hidden relative course-shadow rounded-md sm:w-[65%] lg:w-full mx-auto"
    >
      <img
        src={course.img}
        className="w-full h-full object-cover duration-500 group-hover:scale-[120%] -z-1"
        alt=""
      />
      <div className="absolute bottom-0 left-0 bg-white w-[80%] text-start py-6 space-y-2 pl-4 duration-300 group-hover:bg-primary">
        <p className="text-2xl font-[600] text-[#32333c] leading-[1.2] capitalize">
          {course.name} <br /> {course.channel}
        </p>
        <p className="text-secondary duration-300 group-hover:text-white">
          {course.date}
        </p>
      </div>
    </a>
  );
};

export default CoursesCard;
