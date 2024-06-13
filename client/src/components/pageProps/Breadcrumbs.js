import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import "../../assets/font.css";

const Breadcrumbs = ({ prevLocation, title }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

// const item = [
//   {
//     text: "สินค้าประเภทลวดตาข่าย"
//   },
//   {
//     text: "สินค้าประเภทลวด"
//   },
//   {
//     text: "สินค้าประเภทเหล็ก"
//   },
//   {
//     text: "สินค้าประเภทตะแกรงเหล็ก"
//   },
//   {
//     text: "สินค้าประเภทตะปู"
//   },
//   {
//     text: "สินค้าประเภทสำเร็จรูป"
//   },
// ]

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
      <h1 className="text-5xl kanit-medium"
      style={{ color: "#154360" }}>
        {title}
        {/* สินค้า */}
      </h1>
      <p className="text-sm font-normal text-lightText capitalize flex items-center">
        <span> {prevLocation === "" ? "Home" : prevLocation}</span>

        <span className="px-1">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize font-semibold text-[#ff9800]">
          {locationPath}
        </span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
