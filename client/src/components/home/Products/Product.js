import React from "react";
import Image from "../../designLayouts/Image";
import { useState } from "react";
import "../../../assets/font.css";

const Product = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full relative group shadow-xl border rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }} // Apply scale transform on hover
    >
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <Image
          className="w-full h-[250px] cursor-pointer"
          imgSrc={props.img}
          alt={props}
        />
      </div>
      <div
        className="max-w-80 max-h-28 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <div
          className="flex items-center justify-center font-titleFont"
        >
          <h2
            className="text-lg kanit-medium cursor-pointer mt-5"
            style={{ color: isHovered ? "#ff9800" : "#154360" }} // Change color on hover
          >
            {props.productName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Product;
