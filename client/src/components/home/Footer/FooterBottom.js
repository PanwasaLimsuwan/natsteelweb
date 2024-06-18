import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import "../../../assets/font.css";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-10">
        <p className="poppins-medium text-center flex md:items-center justify-center text-[#D0D3D4] duration-200 text-sm">
          <span className="mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | Nat Steel | All Rights Reserved 
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
