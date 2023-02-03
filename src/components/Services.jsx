import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";
import CV from "./CV";

const Services = () => {
  return (
    <section id="services" name="services">
      <div className="pt-[70px] md:pt-[90px] lg:pt-[125px] pb-[80px] md:pb-[100px] lg:pb-[130px]">
        <div className="container mx-auto relative">
          <div className="w-[90%] mx-auto">
            <div className="w-full lg:w-[60%] mx-auto text-center">
              <h3 className="text-[30px] md:text-[45px] font-[700] pb-[20px] leading-[1.2]">
                Services
              </h3>
              <p className="text-[15px] md:text-[16px] text-secondary leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                minus eos illum inventore quo, alias earum laudantium illo
                corporis molestiae.
              </p>
            </div>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 pt-[60px]">
              <div className="w-full sm:w-[65%] md:w-[90%] lg:w-full mx-auto text-center border border-[#eceff8] rounded-md p-6 bg-white duration-300 cursor-pointer shadow-hover">
                <CgWebsite className="text-[60px] text-primary mx-auto" />
                <h4 className="text-[22px] font-[600] leading-[1.2] py-3 duration-300 cursor-pointer hover:text-primary">
                  Web Development
                </h4>
                <p className="text-secondary">
                  Developed responsive user interfaces and intereaction with
                  modern JavaScript framework HTML5 and CSS3
                </p>
              </div>
              <div className="w-full sm:w-[65%] md:w-[90%] lg:w-full mx-auto text-center border border-[#eceff8] rounded-md p-6 bg-white duration-300 cursor-pointer shadow-hover">
                <FaReact className="text-[60px] text-primary mx-auto" />
                <h4 className="text-2xl font-[600] leading-[1.2] py-3 duration-300 cursor-pointer hover:text-primary">
                  React
                </h4>
                <p className="text-secondary">
                  Developed web applications using JavaScript frameworks React
                  Js with reusable react components
                </p>
              </div>
              <div className="w-full sm:w-[65%] md:w-[90%] lg:w-full mx-auto text-center border border-[#eceff8] rounded-md p-6 bg-white duration-300 cursor-pointer shadow-hover">
                <SiTailwindcss className="text-[60px] text-primary mx-auto" />
                <h4 className="text-2xl font-[600] leading-[1.2] py-3 duration-300 cursor-pointer hover:text-primary">
                  Tailwind
                </h4>
                <p className="text-secondary">
                  Having strong knowledge about tailwind CSS and can use other
                  necessary UI components library
                </p>
              </div>
              <div className="w-full sm:w-[65%] md:w-[90%] lg:w-full mx-auto text-center border border-[#eceff8] rounded-md p-6 bg-white duration-300 cursor-pointer shadow-hover">
                <SiRedux className="text-[60px] text-primary mx-auto" />
                <h4 className="text-2xl font-[600] leading-[1.2] py-3 duration-300 cursor-pointer hover:text-primary">
                  Global State
                </h4>
                <p className="text-secondary">
                  developed and ordered the changes of the user interfaces with
                  redux toolkit for the global state management
                </p>
              </div>
              <div className="w-full sm:w-[65%] md:w-[90%] lg:w-full mx-auto text-center border border-[#eceff8] rounded-md p-6 bg-white duration-300 cursor-pointer shadow-hover">
                <MdOutlineApi className="text-[60px] text-primary mx-auto" />
                <h4 className="text-2xl font-[600] leading-[1.2] py-3 duration-300 cursor-pointer hover:text-primary">
                  Api Handling
                </h4>
                <p className="text-secondary">
                  Used both of axios and rtk query widely for data fetching
                </p>
              </div>
              <div className="w-full sm:w-[65%] md:w-[90%] lg:w-full mx-auto text-center border border-[#eceff8] rounded-md p-6 bg-white duration-300 cursor-pointer shadow-hover">
                <CgCommunity className="text-[60px] text-primary mx-auto" />
                <h4 className="text-2xl font-[600] leading-[1.2] py-3 duration-300 cursor-pointer hover:text-primary">
                  Good Communication
                </h4>
                <p className="text-secondary">
                  Good communication skill and enjoyed working together with the
                  team.Quick Learner and interested in problem solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CV />
    </section>
  );
};

export default Services;
