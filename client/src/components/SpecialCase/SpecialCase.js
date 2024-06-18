import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { FaNewspaper } from "react-icons/fa";
import "../../assets/font.css";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);

  return (
    <div className="fixed top-52 right-2 z-20 gap-2 flex flex-col md:flex md:gap-2">
      <Link to="/quotation">
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] hover:text-[#ff9800] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <FaNewspaper className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <FaNewspaper className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-[13px] text-center kanit-medium">ใบเสนอราคา</p>
          {products.length > 0 && (
            <p
              className="absolute top-1 right-2 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold"
              style={{ backgroundColor: "red" }}
            >
              {products.length}
            </p>
          )}
        </div>
      </Link>
      <Link to="/shop">
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] hover:text-[#ff9800] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs text-center kanit-medium">ดูสินค้า</p>
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
