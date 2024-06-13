import React from "react";
// import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";
import "../../assets/font.css";

const ItemCard = ({ item }) => {
  // console.log("ProductType ItemCard : ", ProductType);
  // console.log("Gauge ItemCard : ", item.gauge);

  const hasCoil = item.coil && item.coil !== "";
  const hasCustomSize = item.customsize && item.customsize !== "";

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      increaseQuantity({
        _id: item._id,
        ProductType: item.ProductType,
        wiresize: item.wiresize,
        gauge: item.gauge,
        coil: item.coil,
        barbedsize: item.barbedsize,
        clipsize: item.clipsize,
        nailsize: item.nailsize,
        customsize: item.customsize,
        Unit: item.Unit,
        delivery: item.delivery,
      })
    );
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        drecreaseQuantity({
          _id: item._id,
          ProductType: item.ProductType,
          wiresize: item.wiresize,
          gauge: item.gauge,
          coil: item.coil,
          barbedsize: item.barbedsize,
          clipsize: item.clipsize,
          nailsize: item.nailsize,
          customsize: item.customsize,
          Unit: item.Unit,
          delivery: item.delivery,
        })
      );
    }
  };

  const handleDelete = () => {
    dispatch(
      deleteItem({
        _id: item._id,
        ProductType: item.ProductType,
        wiresize: item.wiresize,
        gauge: item.gauge,
        coil: item.coil,
        barbedsize: item.barbedsize,
        clipsize: item.clipsize,
        nailsize: item.nailsize,
        customsize: item.customsize,
        Unit: item.Unit,
        delivery: item.delivery,
      })
    );
  };

  return (
    <div className="w-full grid grid-cols-12 mb-4 border py-2">
      <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
        <span
          onClick={handleDelete}
          className="cursor-pointer font-bold hover:text-red-500 duration-300"
        >
          <ImCross />
        </span>
        <img className="w-24 h-24" src={item.image} />
        {/* <div className="col-span-5 md:col-span-3 flex items-center justify-end pr-10 space-x-2"> */}
        {/* <div>
          <span>{item.name}</span>
        </div>
      </div>
      <div className="col-span-5 md:col-span-1 flex items-center justify-end pr-10 space-x-2">
        <button onClick={handleDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="col-span-5 md:col-span-2 flex items-center justify-end pr-10 space-x-2">
      <span>{item.Unit}</span>
      </div>
    </div> */}
        {/* <div className="grid grid-cols-12 gap-4 px-4"> */}
        <div className="flex flex-col">
          {/* <div className="col-span-12 md:col-span-4 flex items-center"> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // flexWrap: "wrap",
            }}
          >
            <span className="kanit-medium whitespace-nowrap text-[#154360]">
              {item.name}
            </span>
            <span
              className="kanit-medium whitespace-nowrap text-[#154360]"
              style={{ flexWrap: "wrap" }}
            >
              {item.ProductType}
            </span>
            {item.name !== "กิ๊บลวดหนาม" && item.name !== "ตะปูตอกไม้" ? (
              <span
                className="kanit-medium whitespace-nowrap text-[#154360]"
                style={{ flexWrap: "wrap" }}
              >
                ขนาดลวด : {item.wiresize}
              </span>
            ) : null}
            {item.name !== "กิ๊บลวดหนาม" && item.name !== "ตะปูตอกไม้" && item.name !== "ลวดหนาม" ? (
              <span
                className="kanit-medium whitespace-nowrap text-[#154360]"
                style={{ flexWrap: "wrap" }}
              >
                ตา : {item.gauge}
              </span>
            ) : null}
            {item.name === "กิ๊บลวดหนาม" ? (
              <span
                className="kanit-medium whitespace-nowrap text-[#154360]"
                style={{ flexWrap: "wrap" }}
              >
                ความยาว : {item.clipsize}
              </span>
            ) : null}

            {item.name === "ตะปูตอกไม้" ? (
              <span
                className="kanit-medium whitespace-nowrap text-[#154360]"
                style={{ flexWrap: "wrap" }}
              >
                ขนาดตะปู : {item.nailsize}
              </span>
            ) : null}
            {item.name === "ลวดหนาม" ? (
              <span
                className="kanit-medium whitespace-nowrap text-[#154360]"
                style={{ flexWrap: "wrap" }}
              >
                น้ำหนัก : {item.barbedsize}
              </span>
            ) : null}
            {hasCoil && item.coil !== "ระบุขนาดเอง" && (
              <span
                className="kanit-medium whitespace-nowrap text-[#154360]"
                style={{ flexWrap: "wrap" }}
              >
                ขนาด(ต่อม้วน) : {item.coil}
              </span>
            )}
            {hasCustomSize && (
              <span
                className="kanit-medium whitespace-nowrap text-[#154360]"
                style={{ flexWrap: "wrap" }}
              >
                ขนาด(ตรม.) : {item.customsize}
              </span>
            )}
            <span
              className="kanit-medium whitespace-nowrap text-[#154360]"
              style={{ flexWrap: "wrap" }}
            >
              การจัดส่ง : {item.delivery}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="col-span-12 md:col-span-4 pl-0 md:pl-52 flex items-center justify-center space-x-2"> */}
      {/* <div className="col-span-12 md:col-span-8 pl-52 flex items-center justify-center space-x-2"> */}
      {/* <div className="col-span-5 md:col-span-3 grid grid-cols-12 gap-4 px-4"> */}
      <div className="flex pl-96 items-center space-x-2">
        <button
          onClick={handleDecrease}
          className="bg-gray-200 ml-3 rounded-full px-3 py-1 hover:bg-[#E74C3C] hover:text-[#ff9800]"
        >
          -
        </button>
        <span className="kanit-medium text-[#154360]">{item.quantity}</span>
        <button
          onClick={handleIncrease}
          className="bg-gray-200 rounded-full px-3 py-1 hover:bg-[#2ECC71] hover:text-[#ff9800]"
        >
          +
        </button>
        {/* </div> */}
        {/* <div className="col-span-12 md:col-span-4 flex items-center justify-end space-x-2"> */}
        {/* <div className="col-span-12 md:col-span-4 pl-0 md:pl-72 flex items-center justify-end space-x-2 pr-4"> */}
        {/* <div className="col-span-12 md:col-span-4 pl-72 flex items-center justify-end space-x-2 pr-4"> */}
        {/* <div className="col-span-12 md:col-span-3 pl-0 md:pl-8 lg:pl-72 flex items-center justify-end space-x-2 pr-4"> */}
        {/* <div className="col-span-12 md:col-span-3 flex flex-row-reverse items-center justify-start space-x-reverse space-x-2 pl-0 md:pl-8 lg:pl-72 pr-4"> */}
        {/* <div className="ml-10"> */}
        <span
          className="kanit-medium text-[#154360] pl-12"
          // style={{ marginLeft: "10px" }}
        >
          {item.Unit}
        </span>
        {/* </div> */}
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default ItemCard;
