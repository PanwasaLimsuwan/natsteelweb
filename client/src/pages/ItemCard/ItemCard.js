import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";
import "../../assets/font.css";

const ItemCard = ({ item }) => {
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
    <div className="w-full mb-4 border py-2">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-4 ml-4 py-2">
        <span
          onClick={handleDelete}
          className="cursor-pointer font-bold hover:text-red-500 duration-300"
        >
          <ImCross />
        </span>
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover"
          src={item.image}
          alt={item.name}
        />
        <div className="flex flex-col flex-grow ml-2 md:ml-4">
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          > */}
          <span className="kanit-medium text-[#154360] mb-1">{item.name}</span>
          <span className="kanit-medium text-[#154360] mb-1">
            {item.ProductType}
          </span>
          {item.name !== "กิ๊บลวดหนาม" && item.name !== "ตะปูตอกไม้" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาดลวด : {item.wiresize}
            </span>
          ) : null}
          {item.name === "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" ||
          item.name === "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" ||     
          item.name === "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาดปลอก : {item.stirrupssize}
            </span>
          ) : null}
          {item.name !== "ตาข่ายสี่เหลี่ยม (กรงไก่)" &&
          item.name !== "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" &&
          item.name !== "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" &&     
          item.name !== "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" &&
          item.name !== "กิ๊บลวดหนาม" &&
          item.name !== "ตะปูตอกไม้" &&
          item.name !== "ลวดหนาม" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ตา : {item.gauge}
            </span>
          ) : null}
          {item.name === "กิ๊บลวดหนาม" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ความยาว : {item.clipsize}
            </span>
          ) : null}

          {item.name === "ตะปูตอกไม้" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาดตะปู : {item.nailsize}
            </span>
          ) : null}
          {item.name === "ลวดหนาม" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              น้ำหนัก : {item.barbedsize}
            </span>
          ) : null}
          {hasCoil && item.coil !== "ระบุขนาดเอง" && (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาด(ต่อม้วน) : {item.coil}
            </span>
          )}
          {hasCustomSize && (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาด(ตรม.) : {item.customsize}
            </span>
          )}
          <span className="kanit-medium text-[#154360] mb-1">
            การจัดส่ง : {item.delivery}
          </span>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <button
            onClick={handleDecrease}
            className="bg-gray-200 rounded-full px-3 py-1 hover:bg-[#E74C3C] text-[#154360] font-bold hover:text-[#ff9800]"
          >
            -
          </button>
          <span className="kanit-medium text-[#154360] px-3">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="bg-gray-200 rounded-full px-3 py-1 hover:bg-[#2ECC71] text-[#154360] font-bold hover:text-[#ff9800]"
          >
            +
          </button>
          <span className="kanit-medium text-[#154360] ml-2 md:ml-16">{item.Unit}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
