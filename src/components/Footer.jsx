import React from "react";
import logo2 from "../img/logo-2.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer" className=" bg-[#152136]">
      <div className="container mx-auto relative pt-[70px] md:pt-[90px] lg:pt-[125px] pb-[80px] md:pb-[100px] lg:pb-[130px]">
        <div className="w-[90%] mx-auto">
          <div className="w-full lg:w-[60%] mx-auto text-center flex flex-col items-center gap-y-8">
            <h3 className="w-auto h-[50px]">
              <img
                src={logo2}
                className="w-auto h-full object-cover mx-auto"
                alt=""
              />
            </h3>
            <p className="text-[15px] md:text-[16px] text-white leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="flex gap-x-8">
              <a
                href="https://www.facebook.com/profile.php?id=100054849439798"
                target="_blank"
                className="w-[52px] md:w-[74px] h-[50px] md:h-[70px] flex justify-center items-center bg-[#1c2940] rounded-full duration-300 hover:bg-primary group cursor-pointer"
              >
                <FaFacebookF className="w-1/2 h-1/2 text-[#bebebe] duration-300 group-hover:text-white" />
              </a>
              <a
                href="https://nyanlintunportfolio.netlify.app/"
                target="_blank"
                className="w-[52px] md:w-[74px] h-[50px] md:h-[70px] flex justify-center items-center bg-[#1c2940] rounded-full duration-300 hover:bg-primary group cursor-pointer"
              >
                <AiFillLinkedin className="w-1/2 h-1/2 text-[#bebebe] duration-200 group-hover:text-white" />
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-[15px] md:text-[16px] text-white flex justify-center py-8 bg-[#1c2940]">
        <p className="w-[90%] mx-auto text-center">
          Copyright © 2022. All rights reserved by You!
        </p>
      </div>
    </div>
  );
};

export default Footer;
