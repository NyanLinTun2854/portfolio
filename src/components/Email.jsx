import React from "react";

const Email = () => {
  console.log("hal");
  return (
    <form className="space-y-8">
      <input
        type="text"
        className="w-full h-[55px] outline-none border border-[#ddd] focus:border-primary rounded-md pl-4"
        placeholder="Name"
      />
      <input
        type="text"
        className="w-full h-[55px] outline-none border border-[#ddd] focus:border-primary rounded-md pl-4"
        placeholder="Email"
      />
      <textarea
        type="text"
        className="w-full h-[135px] outline-none border border-[#ddd] focus:border-primary rounded-md pl-4  pt-3"
        placeholder="Message"
      />
      <button className="text-[15px] text-white font-[500] border border-primary px-[40px] leading-[48px] rounded-[50px] cursor-pointer bg-primary uppercase shadow duration-300 hover:text-primary hover:bg-white z-1">
        view my work
      </button>
    </form>
  );
};

export default Email;
