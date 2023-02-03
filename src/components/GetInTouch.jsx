import React from "react";
import Footer from "./Footer";
import GITCard from "./GITCard";
import Location from "./Location";

const GetInTouch = () => {
  return (
    <section id="getInTouch" name="getInTouch">
      <div
        id="getInTouch"
        className="pt-[70px] md:pt-[90px] lg:pt-[125px] pb-[80px] md:pb-[100px] lg:pb-[130px]"
      >
        <div className="container mx-auto relative">
          <div className="w-[90%] mx-auto">
            <div className="w-full lg:w-[60%] mx-auto text-center">
              <h3 className="text-[30px] md:text-[45px] font-[700] pb-[20px] leading-[1.2]">
                Get In Touch
              </h3>
              <p className="text-[15px] md:text-[16px] text-secondary leading-7">
                Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                tempus, nunc id efficitur sagittis, urna est ultricies eros, ac
                porta sem turpis quis leo.
              </p>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-0 py-14">
              {getInTouch.map((me, index) => (
                <GITCard index={index} me={me} />
              ))}
            </div>
            <div className="w-full">
              <Location />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GetInTouch;

const getInTouch = [
  {
    name: "address",
    one: "Insein, Yangon",
    two: "Myanmar",
  },
  {
    name: "phone",
    one: "+95 9955158471",
    two: "+95 9977123128",
  },
  {
    name: "address",
    one: "nyanlintun28504@gmail.com",
    two: "",
  },
];
