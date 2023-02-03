import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ProjectCard = ({ card }) => {
  return (
    <div className="w-full h-auto group z-10 relative rounded-md overflow-hidden shadow-card cursor-pointer sm:w-[65%] md:w-[90%] lg:w-full mx-auto">
      <img src={card.img} className="w-full h-full object-cover" alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(117,78,249,.8)] -z-1 opacity-0 group-hover:opacity-100">
        <div className="absolute w-full top-[50%] -translate-y-[50%] right-[50%] translate-x-[50%] flex flex-col items-center gap-y-8">
          <div className="absolute w-[42px] h-[3px] bg-white top-10 right-[50%] translate-x-[50%]"></div>
          <p className=" opacity-0 duration-500 text-xl text-white -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
            {card.title}
          </p>
          <a
            className=" opactiy-0 duration-500 w-[50px] h-[50px] rounded-full border border-white flex justify-center items-center translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white group/btn"
            href={card.url}
            target="_blank"
          >
            <BsArrowRight
              fill="white"
              className="w-[50%] h-[50%] group-hover/btn:fill-[rgba(117,78,249,.8)]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
