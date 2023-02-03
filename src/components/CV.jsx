import React from "react";

const CV = () => {
  return (
    <div id="cv" className="pt-[125px] pb-[130px] bg-cv relative z-10">
      <div className="container mx-auto relative">
        <div className="w-[90%] mx-auto">
          <div className="w-full md:w-[90%] mx-auto text-center">
            <h3 className="text-[30px] md:text-[45px] text-white font-[700] leading-[1.2]">
              Have any project on mind?
            </h3>
            <p className="text-[15px] md:text-[16px] leading-7 text-white py-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              nostrud.
            </p>
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/11mHcuI7PLIlyWlryqlnU85CVSHninc4R/view"
                target="_blank"
                className="text-[15px] text-primary font-[500] border border-white px-[40px] leading-[48px] rounded-[50px] cursor-pointer bg-white uppercase shadow duration-300 hover:text-white hover:bg-primary hover:border-primary z-1"
              >
                view my resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
