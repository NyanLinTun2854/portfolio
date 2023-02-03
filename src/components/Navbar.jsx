import React, { useState } from "react";
import logo from "../img/logo.png";
import scrollPosition from "../scrollPosition";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const scrollY = scrollPosition();
  const handleClick = () => {
    setShow((pre) => !pre);
  };

  window.add;
  return (
    <div className="w-full h-auto z-40 fixed top-0 bg-white nav">
      <div
        className={`container mx-auto  flex justify-between items-center px-4 overflow-hidden duration-100 ${
          scrollY > 0 ? "py-[20px]" : "py-[30px]"
        } `}
      >
        <div className="">
          <img src={logo} alt="" />
        </div>
        <button
          onClick={handleClick}
          className="w-[50px] h-[50px] flex lg:hidden justify-center items-center rounded-md border border-[#c2bcbc] relative"
        >
          {show ? (
            <RxCross1 className="w-[50%] h-[50%] object-cover duration-300" />
          ) : (
            <GrMenu className="w-[50%] h-[50%] object-cover duration-300" />
          )}
        </button>
        <div
          className={`absolute w-[90%] lg:hidden h-auto left-1/2 -translate-x-1/2 flex flex-col bg-white duration-100 origin-top space-y-2 py-2 text-secondary pl-8 mb-nav ${
            scrollY > 0 ? "top-[92px]" : "top-[112px]"
          }
          ${show ? "scale-y-100" : "scale-y-0"}`}
        >
          <Link
            to="home"
            smooth={true}
            duration={100}
            offset={-50}
            className="navText"
            onClick={handleClick}
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={100}
            offset={-50}
            className="navText"
            onClick={handleClick}
          >
            ABOUT
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={100}
            offset={-50}
            className="navText"
            onClick={handleClick}
          >
            SERVICES
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={100}
            offset={-50}
            className="navText"
            onClick={handleClick}
          >
            PORTFOLIO
          </Link>
          <Link
            to="courses"
            smooth={true}
            duration={100}
            offset={-50}
            className="navText"
            onClick={handleClick}
          >
            BLOG
          </Link>
          <Link
            to="getInTouch"
            smooth={true}
            duration={100}
            offset={-50}
            className="navText"
            onClick={handleClick}
          >
            CONTACT
          </Link>
        </div>
        <div className="space-x-6 hidden lg:block">
          <Link
            to="home"
            smooth={true}
            duration={100}
            className="navTextLg active"
          >
            HOME
          </Link>
          <Link to="about" smooth={true} duration={100} className="navTextLg">
            ABOUT
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={100}
            className="navTextLg"
          >
            SERVICES
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={100}
            className="navTextLg"
          >
            PORTFOLIO
          </Link>
          <Link to="courses" smooth={true} duration={100} className="navTextLg">
            BLOG
          </Link>
          <Link
            to="getInTouch"
            smooth={true}
            duration={100}
            className="navTextLg"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
