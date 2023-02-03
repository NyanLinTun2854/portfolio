import React, { useEffect, useRef, useState } from "react";
import { CgCalendarDates } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { animate, motion } from "framer-motion";
import Mar from "./Counter";
import { InView, useInView } from "react-intersection-observer";
import Counter from "./Counter";
import { BiUpArrow } from "react-icons/bi";
import scrollPosition from "../scrollPosition";

const About = ({ inView }) => {
  const scrollY = scrollPosition();
  return (
    <section
      id="about"
      name="about"
      className="pt-[90px] md:pt-[90px] lg:pt-[125px] pb-[80px] md:pb-[100px] lg:pb-[130px]"
    >
      <div className="container mx-auto relative">
        <a
          href="#"
          className={`fixed bottom-4 z-50 right-4 w-[50px] h-[50px] flex justify-center items-center bg-backToTop rounded-full border-2 border-[#586376] duration-300 hover:bg-primary hover:border-primary cursor-pointer ${
            scrollY > 852 ? "opacity-100" : "opacity-0"
          }`}
        >
          <BiUpArrow fill="white" className="w-[50%] h-[50%]" />
        </a>
        <div className="w-[90%] mx-auto">
          <div className="w-full lg:w-[60%] mx-auto text-center">
            <h3 className="text-[30px] md:text-[45px] font-[700] pb-[20px] leading-[1.2]">
              About Me
            </h3>
            <p className="text-[15px] md:text-[16px] text-secondary leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              minus eos illum inventore quo, alias earum laudantium illo
              corporis molestiae.
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center mt-[50px] gap-y-12 lg:gap-y-0">
            <div className="w-full lg:w-[50%]">
              <div>
                <p className="leading-[1.2] text-[18px] font-[500]">
                  Hi There! I'm Nyan Lin Tun
                </p>
                <p className="leading-[28px] text-secondary py-5 text-justify">
                  Junior frontend developer with around 6 months workshop
                  experience and passion for responsive website design. I want
                  to get a lot of more experience in web development field. With
                  my creative skills and knowledge, I want to also get into the
                  competitive and challenging position and want to prove who I
                  am.
                </p>
                <div className="w-full flex flex-wrap gap-y-2">
                  <div className="w-full xl:w-[45%] flex items-center justify-start">
                    <div className="w-[20px] h-[20px]">
                      <CgCalendarDates className="w-full h-full text-primary" />
                    </div>
                    <span className="leading-[28px] pl-3">Date of birth:</span>
                    <span className="leading-[28px] pl-1 text-secondary">
                      28 May 2004
                    </span>
                  </div>
                  <div className="w-full xl:w-[55%] flex items-center justify-start">
                    <div className="w-[20px] h-[20px]">
                      <TfiEmail className="w-full h-full text-primary" />
                    </div>
                    <span className="leading-[28px] pl-3">Email:</span>
                    <span className="leading-[28px] pl-1 text-secondary">
                      nyanlintun28504@gmail.com
                    </span>
                  </div>
                  <div className="w-full xl:w-[45%] flex items-center justify-start">
                    <div className="w-[20px] h-[20px]">
                      <BsTelephone className="w-full h-full text-primary" />
                    </div>
                    <span className="leading-[28px] pl-3">Phone:</span>
                    <span className="leading-[28px] pl-1 text-secondary">
                      +959 955158471
                    </span>
                  </div>
                  <div className="w-full xl:w-[55%] flex items-center justify-start">
                    <div className="w-[20px] h-[20px]">
                      <CiLocationOn className="w-full h-full text-primary" />
                    </div>
                    <span className="leading-[28px] pl-3 md:pl-2">
                      Location:
                    </span>
                    <span className="leading-[28px] pl-1 text-secondary">
                      Insein, Yangon
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[40%] h-full">
              <div className="w-full h-auto">
                <div className="w-full">
                  <div className="w-full h-auto flex justify-between items-center">
                    <p className="leading-[1.2]">HTML</p>
                    <div className="flex">
                      <Counter end={90} />
                      <span>%</span>
                    </div>
                  </div>
                  <div className="w-full h-[5px] rounded-full bg-[#d9d9d9] overflow-hidden mt-[15px]">
                    <motion.div
                      className="h-full bg-primary duration-1000"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                <div className="w-full mt-[25px]">
                  <div className="w-full h-auto flex justify-between items-center">
                    <p className="leading-[1.2]">CSS</p>
                    <div className="flex">
                      <Counter end={90} />
                      <span>%</span>
                    </div>
                  </div>
                  <div className="w-full h-[5px] rounded-full bg-[#d9d9d9] overflow-hidden mt-[15px]">
                    <motion.div
                      className="h-full bg-primary duration-1000"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                <div className="w-full mt-[25px]">
                  <div className="w-full h-auto flex justify-between items-center">
                    <p className="leading-[1.2]">JAVASCRIPT</p>
                    <div className="flex">
                      <Counter end={70} />
                      <span>%</span>
                    </div>
                  </div>
                  <div className="w-full h-[5px] rounded-full bg-[#d9d9d9] overflow-hidden mt-[15px]">
                    <motion.div
                      className="h-full bg-primary duration-1000"
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
                <div className="w-full mt-[25px]">
                  <div className="w-full h-auto flex justify-between items-center">
                    <p className="leading-[1.2]">REACT</p>
                    <div className="flex">
                      <Counter end={80} />
                      <span>%</span>
                    </div>
                  </div>
                  <div className="w-full h-[5px] rounded-full bg-[#d9d9d9] overflow-hidden mt-[15px]">
                    <motion.div
                      className="h-full bg-primary duration-1000"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
