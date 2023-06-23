import React from "react";
import one from "../img/parallax/shape-1.png";
import two from "../img/parallax/shape-2.png";
import three from "../img/parallax/shape-3.png";
import four from "../img/parallax/shape-4.png";
import five from "../img/parallax/shape-5.png";
import six from "../img/parallax/shape-6.png";
import person from "../img/person.webp";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Navbar from "./Navbar";

const Hero = () => {
  const handleMouse = (e) => {
    const layers = document.querySelectorAll(".layer");
    layers.forEach((layer) => {
      const speed = layer.getAttribute("data-speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };
  return (
    <section id="home" name="home">
      <Navbar />
      <div className="home flex items-center" onMouseMove={handleMouse}>
        <div
          className="absolute top-0 left-0w-[40px] md:w-[83px] h-[51px] md:h-[104px] layer"
          data-speed="5"
        >
          <img src={one} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute top-[-18px] left-[20%] w-[40px] md:w-[91px] h-[38px] md:h-[87px] layer"
          data-speed="2"
        >
          <img src={two} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute top-[0px] left-[40%] w-[100px] md:w-[173px] h-[80px] md:h-[140px] layer"
          data-speed="4"
        >
          <img src={three} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute top-[28px] right-[7.6%] w-[40px] md:w-[91px] h-[38px] md:h-[87px] layer"
          data-speed="5"
        >
          <img src={two} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute right-[20px] md:right-[39px] bottom-[48%] md:bottom-[30%] top-auto left-auto w-[40px] md:w-[83px] h-[51px] md:h-[104px] layer"
          data-speed="4"
        >
          <img src={one} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute top-[44%] left-[13%] w-[40px] md:w-[47px] h-[40px] md:h-[47px] layer"
          data-speed="2"
        >
          <img src={four} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute bottom-[50px] left-[30px] w-[100px] md:w-[195px] h-[100px] md:h-[195px] layer"
          data-speed="4"
        >
          <img src={five} alt="" className="w-full h-full object-cover -z-1" />
        </div>
        <div
          className="absolute bottom-[140px] left-[90px] w-[100px] md:w-[173px] h-[81px] md:h-[140px] layer"
          data-speed="2"
        >
          <img src={three} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute bottom-[20px] md:bottom-[28px] left-[65%] md:left-[50%] w-[100px] md:w-[136px] h-[74px] md:h-[101px] layer"
          data-speed="3"
        >
          <img src={six} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute bottom-[140px] md:bottom-[5px] right-[0] md:right-[30px] w-[100px] md:w-[173px] h-[81px] md:h-[140px] layer"
          data-speed="4"
        >
          <img src={three} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-[30px] left-[15px] w-full h-auto">
          <div className="container mx-auto block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[490px] md:before:-left-[470px] lg:before:-left-[470px] before:w-[500px] before:h-[2px] before:bg-primary">
            <ul className="w-[90%] mx-auto flex gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=100054849439798"
                target="_blank"
                className="w-[40px] h-[40px] flex justify-center items-center border border-[#ccc] rounded-full"
              >
                <FaFacebookF className="w-1/2 h-1/2 object-cover text-[#ccc]" />
              </a>
              <a
                href="https://nyanlintunportfolio.netlify.app/"
                target="_blank"
                className="w-[40px] h-[40px] flex justify-center items-center border border-[#ccc] rounded-full"
              >
                <AiFillLinkedin className="w-1/2 h-1/2 object-cover text-[#ccc]" />
              </a>
            </ul>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="w-[90%] mx-auto flex items-start md:items-center justify-between md:px-[15px]">
            <div className="w-[100%] lg:w-[40%] flex justify-start lg:justify-center">
              <div className="relative z-20">
                <p className="text-2xl md:text-[30px] text-primary font-[600] uppercase pb-[15px]">
                  hello, I'm
                </p>
                <h1 className="text-[38px] md:text-[60px] text-normal font-[600] uppercase pb-[15px] leading-[1.2]">
                  Nyan Lin Tun
                </h1>
                <p className="text-[15px] md:text-[16px] text-secondary font-[400] leading-[28px] capitalize pb-[40px]">
                  a frontend web & App developer
                </p>
              </div>
            </div>
            <div className="w-[50%] hidden lg:flex justify-center">
              <div className="max-w-[430px] person-image relative">
                <img src={person} className=" relative z-5" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
