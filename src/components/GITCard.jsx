import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const GITCard = ({ me, index }) => {
  return (
    <div className="w-full sm:w-[65%] lg:w-full mx-auto h-auto border border-[#eceff8] flex flex-col items-center py-8 gap-y-4 duration-300 me-hover justify-center">
      {index === 0 && (
        <IoLocationOutline className="w-[48px] h-[48px] text-primary" />
      )}
      {index === 1 && (
        <BsTelephone className="w-[48px] h-[48px] text-primary" />
      )}
      {index === 2 && (
        <AiOutlineMail className="w-[48px] h-[48px] text-primary" />
      )}
      <p className="text-xl font-[600] text-[#32333c] capitalize">{me.name}</p>
      <p className="text-secondary text-center">
        {me.one} <br />
        {me.two}
      </p>
    </div>
  );
};

export default GITCard;
