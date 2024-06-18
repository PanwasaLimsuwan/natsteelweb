import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "../../designLayouts/Image";
import { addToCart } from "../../../redux/orebiSlice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import "../../../assets/font.css";

export const flyToIcon = (imageSrc, startElement, iconRef) => {
  if (!iconRef.current) {
    return;
  }

  const startRect = startElement.getBoundingClientRect();
  const iconRect = iconRef.current.getBoundingClientRect();
  const flyingImage = document.createElement("img");

  flyingImage.src = imageSrc;
  flyingImage.className = "floating-image";
  flyingImage.style.position = "fixed";
  flyingImage.style.left = `${startRect.left}px`;
  flyingImage.style.top = `${startRect.top}px`;
  flyingImage.style.width = `${startRect.width}px`;
  flyingImage.style.height = `${startRect.height}px`;
  flyingImage.style.transition = "all 0.8s ease-out";
  flyingImage.style.zIndex = 1000;
  document.body.appendChild(flyingImage);

  setTimeout(() => {
    flyingImage.style.left = `${iconRect.left}px`;
    flyingImage.style.top = `${iconRect.top}px`;
    flyingImage.style.width = "20px";
    flyingImage.style.height = "20px";
    flyingImage.style.opacity = 0;
  }, 10);

  setTimeout(() => {
    document.body.removeChild(flyingImage);
  }, 1000); // slightly longer than the transition
};

const ProductInfo = ({ productInfo }) => {
  const navigate = useNavigate();
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [Number, setNumber] = useState("");
  const [Unit, setUnit] = useState("");
  const [wiresize, setwiresize] = useState("");
  const [gauge, setgauge] = useState("");
  const [coil, setcoil] = useState("");
  const [barbedsize, setbarbedsize] = useState("");
  const [clipsize, setclipsize] = useState("");
  const [nailsize, setnailsize] = useState("");
  const [stirrupssize, setstirrupssize] = useState("");
  const [customsize, setcustomsize] = useState("");
  const [delivery, setdelivery] = useState("");
  const [ProductType, setProductType] = useState("");
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const iconRef = useRef(null);

  // localStorage.setItem("productName", productInfo.productName);

  const handleNumber = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > 10000) {
      value = 10000;
    } else if (value < 1) {
      value = 1;
    }
    setNumber(value);
  };

  const handleUnit = (e) => {
    setUnit(e.target.value);
  };

  const handlewireSize = (e) => {
    setwiresize(e.target.value);
  };

  const handlegauge = (e) => {
    setgauge(e.target.value);
  };

  const handlecoil = (e) => {
    setcoil(e.target.value);
  };

  const handlebarbedsize = (e) => {
    setbarbedsize(e.target.value);
  };

  const handleclipsize = (e) => {
    setclipsize(e.target.value);
  };

  const handlenailsize = (e) => {
    setnailsize(e.target.value);
  };

  const handlestirrupssize = (e) => {
    setstirrupssize(e.target.value);
  };

  const handlecustomsize = (e) => {
    setcustomsize(e.target.value);
  };

  const handledelivery = (e) => {
    setdelivery(e.target.value);
  };

  // ฟังก์ชันเปิด pop-up
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  // ฟังก์ชันปิด pop-up
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleProductType = (e) => {
    setProductType(e.target.value);
  };

  const handlePost = () => {
    // {productInfo.productName === "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)" ||
    //   productInfo.productName === "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)" ? (
    //     if (!wiresize || !gauge || !coil || !Number || !Unit || !delivery) {
    //       if (coil === "ระบุขนาดเอง") {
    //         if (!customsize) {
    //           alert("กรุณากรอกข้อมูล");
    //           return;
    //         }
    //       }
    //     }
    //   )
    //  }
    // if (
    //   productInfo.productName === "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)" ||
    //   productInfo.productName === "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)"
    // ) {
    //   if (!wiresize || !gauge || !coil || !Number || !Unit || !delivery) {
    //     if (coil === "ระบุขนาดเอง") {
    //       if (!customsize) {
    //         alert("กรุณากรอกข้อมูล");
    //         return;
    //       }
    //     } else { // เพิ่ม else สำหรับกรณี coil !== "ระบุขนาดเอง"
    //       // ในกรณีที่ไม่ต้องการตรวจสอบ customsize สามารถทำอย่างอื่นได้ที่นี่
    //     }
    //   }
    // }
    if (
      (productInfo.productName === "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)" ||
        productInfo.productName === "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)") &&
      (!wiresize ||
        !gauge ||
        !coil ||
        (coil === "ระบุขนาดเอง" && !customsize) ||
        !Number ||
        !Unit ||
        !delivery)
    ) {
      alert("กรุณากรอกข้อมูล");
      return;
    } else if (
      productInfo.productName === "ตาข่ายสี่เหลี่ยม (กรงไก่)" &&
      (!wiresize || !coil || !ProductType || !Number || !Unit || !delivery)
    ) {
      if (!ProductType) {
        alert("กรุณาเลือกประเภทสินค้า");
        return;
      }
      alert("กรุณากรอกข้อมูล");
      return;
    } else if (
      productInfo.productName === "ลวดหนาม" &&
      (!wiresize ||
        !barbedsize ||
        (barbedsize === "ระบุเป็นความยาวที่ใช้" && !customsize) ||
        !Number ||
        !Unit ||
        !delivery)
    ) {
      alert("กรุณากรอกข้อมูล");
      return;
    } else if (
      productInfo.productName === "กิ๊บลวดหนาม" &&
      (!clipsize || !Number || !Unit || !delivery)
    ) {
      alert("กรุณากรอกข้อมูล");
      return;
    } else if (
      productInfo.productName === "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" &&
      (!wiresize ||
        !stirrupssize ||
        !ProductType ||
        !Number ||
        !Unit ||
        !delivery)
    ) {
      if (!ProductType) {
        alert("กรุณาเลือกประเภทสินค้า");
        return;
      }
      alert("กรุณากรอกข้อมูล");
      return;
    } else if (
      (productInfo.productName === "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" ||
        productInfo.productName === "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)") &&
      (!wiresize || !stirrupssize || !Number || !Unit || !delivery)
    ) {
      alert("กรุณากรอกข้อมูล");
      return;
    } else if (
      productInfo.productName === "ตะปูตอกไม้" &&
      (!nailsize || !Number || !Unit || !delivery)
    ) {
      alert("กรุณากรอกข้อมูล");
      return;
    } else if (
      productInfo.productName === "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป" &&
      (!wiresize || !gauge || !ProductType || !Number || !Unit || !delivery)
    ) {
      if (!ProductType) {
        alert("กรุณาเลือกประเภทสินค้า");
        return;
      }
      alert("กรุณากรอกข้อมูล");
      return;
    } else if (
      productInfo.productName === "รั้วแรงดึง (ตาข่ายถักปม)" &&
      (!wiresize || !gauge || !coil || !Number || !Unit || !delivery)
    ) {
      alert("กรุณากรอกข้อมูล");
      return;
    }
    dispatch(
      addToCart({
        _id: productInfo._id,
        name: productInfo.productName,
        image: productInfo.img,
        Number,
        Unit,
        wiresize,
        barbedsize,
        clipsize,
        nailsize,
        stirrupssize,
        coil,
        customsize,
        gauge,
        delivery,
        ProductType,
      })
    );
    alert("เพิ่มสินค้าสำเร็จ");

    setPopupOpen(false);
    if (imageRef.current) {
      // คุณสามารถใช้ imageRef.current ได้ที่นี่
      flyToIcon(productInfo.img, imageRef.current, iconRef);
      // ตรวจสอบ console.log เพื่อตรวจสอบว่า imageRef.current ไม่ใช่ null
    }
    setTimeout(() => {
      navigate("/quotation", {
        state: {
          productName: productInfo.productName,
          Number,
          Unit,
          wiresize,
          gauge,
          coil,
          barbedsize,
          clipsize,
          nailsize,
          stirrupssize,
          customsize,
          delivery,
          imgSrc: productInfo.img,
          ProductType,
        },
      });
    }, 1000); // Delay should match the duration of your flyToIcon animation
  };

  return (
    <div className="flex flex-col gap-5">
      <h2
        className="ml-5 kanit-medium text-[#154360]"
        style={{ fontSize: "3rem" }}
      >
        {productInfo.productName}
      </h2>
      <p
        className="ml-5 kanit-medium text-[#154360]"
        style={{ maxWidth: "800px" }}
      >
        " {productInfo.description} "
      </p>
      <hr />
      <span className="text-base ml-5 text-gray-600">
        {productInfo.des && (
          <p className="kanit-medium text-[#154360]">
            ประเภท :
            <select
              name="ProductType"
              value={ProductType}
              onChange={handleProductType}
              className="w-90 ml-3 mb-10 h-10 p-2 border-2 border-[#154360] rounded-lg kanit-medium text-[#ff9800] shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
            >
              <option value="">เลือก</option>
              {[
                productInfo.des,
                productInfo.des2,
                productInfo.des3,
                productInfo.des4,
              ].map((desc, index) =>
                desc ? (
                  <option key={index} value={desc}>
                    {desc}
                  </option>
                ) : null
              )}
            </select>
          </p>
        )}
      </span>
      <button
        className="w-36 h-12 ml-5 bg-[#154360] kanit-medium text-white rounded-xl hover:bg-[#ff9800] hover:text-white duration-300"
        style={{ fontSize: "17px" }}
        onClick={handleOpenPopup}
      >
        ขอใบเสนอราคา
      </button>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mt-10">
          <div className="bg-white p-10 rounded-lg max-w-4xl w-3/4 h-auto md:w-full md:h-auto">
            <div className="flex justify-end">
              <button
                className="text-black font-bold"
                onClick={handleClosePopup}
              >
                <ImCross className="hover:text-[#E74C3C]" />
              </button>
            </div>
            <p className="md:text-2xl text-md kanit-medium text-[#154360] text-center mb-5">
              {productInfo.productName}
            </p>
            <hr />
            <span className="flex justify-center items-center h-full">
              <div ref={imageRef}>
                <Image
                  className="w-40 mb-0 md:mb-10 md:mt-10 mr-48 self-center"
                  imgSrc={productInfo.img}
                />
              </div>
              <form ref={formRef}>
                <input
                  type="hidden"
                  name="productName"
                  value={productInfo.productName}
                />
                <div className="sm:text-[13px] md:text-[16px]">
                  {productInfo.productName !== "กิ๊บลวดหนาม" &&
                  productInfo.productName !== "ตะปูตอกไม้" ? (
                    <p className="kanit-medium text-[#154360]">
                      ขนาดลวด :
                      <select
                        name="text"
                        type=""
                        value={wiresize}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-24 md:mt-5 mb-2 md:ml-5 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlewireSize}
                      >
                        <option value="">เลือก</option>
                        {productInfo.productName ===
                        "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป" ? (
                          <>
                            {ProductType === "- แบบ 2 เส้น" ? (
                              <>
                                <option value="3.0mm.">3.0mm.</option>
                                <option value="3.0mm.">3.0mm.</option>
                                <option value="3.2mm.">3.2mm.</option>
                                <option value="3.2mm.">3.2mm.</option>
                                <option value="4.0mm.">4.0mm.</option>
                                <option value="4.0mm.">4.0mm.</option>
                                <option value="6.0mm.">6.0mm.</option>
                              </>
                            ) : ProductType === "- แบบ 3 เส้น" ? (
                              <>
                                <option value="4.0mm.">4.0mm.</option>
                              </>
                            ) : null}
                          </>
                        ) : productInfo.productName ===
                          "รั้วแรงดึง (ตาข่ายถักปม)" ? (
                          <>
                            <option value="2.0 มิล">2.0 มิล</option>
                            <option value="2.5 มิล">2.5 มิล</option>
                          </>
                        ) : productInfo.productName === "ลวดหนาม" ? (
                          <>
                            <option value="#10 (3.2มิล)">#10 (3.2มิล)</option>
                            <option value="#11 (2.9มิล)">#11 (2.9มิล)</option>
                            <option value="#12 (2.5มิล)">#12 (2.5มิล)</option>
                            <option value="#13 (2.35มิล)">#13 (2.35มิล)</option>
                            <option value="#14 (2.0มิล)">#14 (2.0มิล)</option>
                          </>
                        ) : (
                          <>
                            <option value="#8 (4มิล)">#8 (4มิล)</option>
                            <option value="#9 (3.6มิล)">#9 (3.6มิล)</option>
                            <option value="#10 (3.2มิล)">#10 (3.2มิล)</option>
                            <option value="#11 (2.9มิล)">#11 (2.9มิล)</option>
                            <option value="#12 (2.5มิล)">#12 (2.5มิล)</option>
                            <option value="#13 (2.35มิล)">#13 (2.35มิล)</option>
                            <option value="#14 (2.0มิล)">#14 (2.0มิล)</option>
                          </>
                        )}
                      </select>
                    </p>
                  ) : null}
                  {productInfo.productName ===
                    "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" ||
                  productInfo.productName ===
                    "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" ||
                  productInfo.productName ===
                    "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" ? (
                    <p className="kanit-medium text-[#154360]">
                      ขนาดปลอก :
                      <input
                        name="text"
                        value={stirrupssize}
                        placeholder="10cmx10cm"
                        className="text-[#ff9800] w-24 md:ml-2 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlestirrupssize}
                      ></input>
                    </p>
                  ) : null}
                  {productInfo.productName === "ตะปูตอกไม้" ? (
                    <p className="kanit-medium text-[#154360]">
                      ขนาดตะปู :
                      <select
                        name="text"
                        type=""
                        value={nailsize}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-24 md:ml-10 md:mt-5 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlenailsize}
                      >
                        <option value="">เลือก</option>
                        <option value='6"x4'>6"x4</option>
                        <option value='5"x5'>5"x5</option>
                        <option value='4"x7'>4"7</option>
                        <option value='3"x8'>3"x8</option>
                        <option value='3 1/2"x8'>3 1/2"x8</option>
                        <option value='3"x10'>3"x10</option>
                        <option value='2 1/2"x10'>2 1/2"x10</option>
                        <option value='2"x11'>2"x11</option>
                        <option value='2 1/2"x12'>2 1/2"x12</option>
                        <option value='2"x13'>2"x13</option>
                        <option value='1 1/2"x13'>1 1/2"x13</option>
                        <option value='1 3/4"x14'>1 3/4"x14</option>
                        <option value='1 1/2"x14'>1 1/2"x14</option>
                        <option value='1"x17'>1"x17</option>
                        <option value='1 1/14"x16'>1 1/14"x16</option>
                      </select>
                    </p>
                  ) : null}
                  {productInfo.productName === "กิ๊บลวดหนาม" ? (
                    <p className="kanit-medium text-[#154360]">
                      ความยาว :
                      <select
                        name="text"
                        type=""
                        value={clipsize}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-24 md:ml-10 md:mt-5 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handleclipsize}
                      >
                        <option value="">เลือก</option>
                        <option value="4 นิ้ว">4 นิ้ว</option>
                        <option value="5 นิ้ว">5 นิ้ว</option>
                        <option value="6 นิ้ว">6 นิ้ว</option>
                      </select>
                    </p>
                  ) : null}
                  {productInfo.productName === "ลวดหนาม" ? (
                    <p className="kanit-medium text-[#154360]">
                      น้ำหนัก(กิโลกรัม/ขด) :
                      <select
                        name="text"
                        type=""
                        value={barbedsize}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-24 md:ml-10 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlebarbedsize}
                      >
                        <option value="">เลือก</option>
                        <option value="3 กิโลกรัม/ขด">3 กิโลกรัม/ขด</option>
                        <option value="4 กิโลกรัม/ขด">4 กิโลกรัม/ขด</option>
                        <option value="5 กิโลกรัม/ขด">5 กิโลกรัม/ขด</option>
                        <option value="6 กิโลกรัม/ขด">6 กิโลกรัม/ขด</option>
                        <option value="7 กิโลกรัม/ขด">7 กิโลกรัม/ขด</option>
                        <option value="8 กิโลกรัม/ขด">8 กิโลกรัม/ขด</option>
                        <option value="9 กิโลกรัม/ขด">9 กิโลกรัม/ขด</option>
                        <option value="10 กิโลกรัม/ขด">10 กิโลกรัม/ขด</option>
                        <option value="ระบุเป็นความยาวที่ใช้">
                          ระบุเป็นความยาวที่ใช้
                        </option>
                      </select>
                    </p>
                  ) : null}
                  {barbedsize === "ระบุเป็นความยาวที่ใช้" && (
                    <p className="kanit-medium text-[#154360]">
                      ความยาว :
                      <input
                        name="customsize"
                        value={customsize}
                        onChange={handlecustomsize}
                        placeholder=""
                        className="text-[#ff9800] w-24 md:ml-4 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                      ></input>
                    </p>
                  )}
                  {productInfo.productName !== "ตาข่ายสี่เหลี่ยม (กรงไก่)" &&
                  productInfo.productName !==
                    "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" &&
                  productInfo.productName !==
                    "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" &&
                  productInfo.productName !==
                    "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" &&
                  productInfo.productName !== "ตะปูตอกไม้" &&
                  productInfo.productName !== "ลวดหนาม" &&
                  productInfo.productName !== "กิ๊บลวดหนาม" ? (
                    <p className="kanit-medium text-[#154360]">
                      ตา :
                      <select
                        name="text"
                        type=""
                        value={gauge}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-24 md:ml-16 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlegauge}
                      >
                        <option value="">เลือก</option>
                        {productInfo.productName ===
                        "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป" ? (
                          <>
                            {ProductType === "- แบบ 2 เส้น" ? (
                              <>
                                <option value="30m.">30m.</option>
                                <option value="50m.">40m.</option>
                                <option value="30m.">30m.</option>
                                <option value="50m.">40m.</option>
                                <option value="30m.">30m.</option>
                                <option value="50m.">40m.</option>
                                <option value="25m.">25m.</option>
                              </>
                            ) : ProductType === "- แบบ 3 เส้น" ? (
                              <>
                                <option value="25m.">25m.</option>
                              </>
                            ) : null}
                          </>
                        ) : productInfo.productName ===
                          "รั้วแรงดึง (ตาข่ายถักปม)" ? (
                          <>
                            <option value="10x10 cm เท่ากัน">
                              10x10 cm เท่ากัน
                            </option>
                            <option value="15 cm ไม่เท่ากัน (ถี่ล่าง ห่างบน)">
                              15 cm ไม่เท่ากัน (ถี่ล่าง ห่างบน)
                            </option>
                          </>
                        ) : productInfo.productName ===
                          "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)" ? (
                          <>
                            <option value='3/4" เต็ม'>3/4" เต็ม</option>
                            <option value='1" เต็ม'>1" เต็ม</option>
                            <option value='1-1/2" เต็ม'>1-1/2" เต็ม</option>
                            <option value='2" เต็ม'>2" เต็ม</option>
                          </>
                        ) : (
                          <>
                            <option value='1" เต็ม'>1" เต็ม</option>
                            <option value='1" ทั่วไป'>1" ทั่วไป</option>
                            <option value='1-1/2" เต็ม'>1-1/2" เต็ม</option>
                            <option value='1-1/2" ทั่วไป'>1-1/2" ทั่วไป</option>
                            <option value='2" เต็ม'>2" เต็ม</option>
                            <option value='2" ทั่วไป'>2" ทั่วไป</option>
                            <option value='2-1/2" เต็ม'>2-1/2" เต็ม</option>
                            <option value='2-1/2" ทั่วไป'>2-1/2" ทั่วไป</option>
                            <option value='3" เต็ม'>3" เต็ม</option>
                            <option value='3" ทั่วไป'>3" ทั่วไป</option>
                          </>
                        )}
                      </select>
                    </p>
                  ) : null}
                  {productInfo.productName !==
                    "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" &&
                  productInfo.productName !==
                    "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" &&
                  productInfo.productName !==
                    "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" &&
                  productInfo.productName !== "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป" &&
                  productInfo.productName !== "ตะปูตอกไม้" &&
                  productInfo.productName !== "ลวดหนาม" &&
                  productInfo.productName !== "กิ๊บลวดหนาม" ? (
                    <p className="kanit-medium text-[#154360]">
                      ขนาด(ต่อม้วน) :
                      <select
                        name="text"
                        type=""
                        value={coil}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-28 md:ml-5 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlecoil}
                      >
                        <option value="">เลือก</option>
                        {productInfo.productName ===
                        "ตาข่ายสี่เหลี่ยม (กรงไก่)" ? (
                          <>
                            <option value="0.9x25 m.">0.9x25 m.</option>
                            <option value="0.9x30 m.">0.9x30 m.</option>
                            <option value="1.2x30 m.">1.2x30 m.</option>
                          </>
                        ) : productInfo.productName ===
                          "รั้วแรงดึง (ตาข่ายถักปม)" ? (
                          <>
                            <option value="0.9x30 m.">0.9x30 m.</option>
                            <option value="0.9x50 m.">0.9x50 m.</option>
                            <option value="0.9x100 m.">0.9x100 m.</option>
                            <option value="1.2x30 m.">1.2x30 m.</option>
                            <option value="1.2x50 m.">1.2x50 m.</option>
                            <option value="1.2x100 m.">1.2x100 m.</option>
                            <option value="1.5x30 m.">1.5x30 m.</option>
                            <option value="1.5x50 m.">1.5x50 m.</option>
                            <option value="1.5x100 m.">1.5x100 m.</option>
                            <option value="1.65x30 m.">1.65x30 m.</option>
                            <option value="1.65x50 m.">1.65x50 m.</option>
                            <option value="1.65x100 m.">1.65x100 m.</option>
                            <option value="1.8x30 m.">1.8x30 m.</option>
                            <option value="1.8x50 m.">1.8x50 m.</option>
                            <option value="1.8x100 m.">1.8x100 m.</option>
                            <option value="2.0x30 m.">2.0x30 m.</option>
                            <option value="2.0x50 m.">2.0x50 m.</option>
                            <option value="2.0x100 m.">2.0x100 m.</option>
                          </>
                        ) : productInfo.productName ===
                          "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)" ? (
                          <>
                            <option value="1x20 m.">1x20 m.</option>
                            <option value="1.2x2.4 m.">1.2x2.4 m.</option>
                            <option value="ระบุขนาดเอง">ระบุขนาดเอง</option>
                          </>
                        ) : (
                          <>
                            <option value="0.8x10 m.">0.8x10 m.</option>
                            <option value="1.0x10 m.">1.0x10 m.</option>
                            <option value="1.2x10 m.">1.2x10 m.</option>
                            <option value="1.5x10 m.">1.5x10 m.</option>
                            <option value="1.8x10 m.">1.8x10 m.</option>
                            <option value="2.0x10 m.">2.0x10 m.</option>
                            <option value="ระบุขนาดเอง">ระบุขนาดเอง</option>
                          </>
                        )}
                      </select>
                      {coil === "ระบุขนาดเอง" && (
                        <p className="kanit-medium text-[#154360]">
                          ขนาด(ตรม.) :
                          <input
                            name="customsize"
                            value={customsize}
                            onChange={handlecustomsize}
                            placeholder="กว้างxยาว m."
                            className="text-[#ff9800] w-28 ml-9 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                          ></input>
                        </p>
                      )}
                    </p>
                  ) : null}
                  <p className="kanit-medium text-[#154360]">
                    จำนวน :
                    <input
                      name="Number"
                      type="Number"
                      min={1}
                      maxLength={10000}
                      step={1}
                      value={Number}
                      onChange={handleNumber}
                      placeholder=""
                      className="text-[#ff9800] w-24 md:ml-4 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                    ></input>
                  </p>
                  <p className="kanit-medium text-[#154360]">
                    หน่วย :
                    <select
                      name="Unit"
                      value={Unit}
                      onChange={handleUnit}
                      className="text-[#ff9800] w-24 md:ml-6 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                    >
                      <option value="">เลือก</option>
                      {productInfo.productName ===
                        "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป" ||
                      productInfo.productName ===
                        "ตาข่ายสี่เหลี่ยม (กรงไก่)" ? (
                        <>
                          {/* <option value="ขด">ขด</option> */}
                          <option value="ม้วน">ม้วน</option>
                        </>
                      ) : productInfo.productName === "ตะปูตอกไม้" ? (
                        <>
                          <option value="ลัง">ลัง (18kg/ลัง)</option>
                        </>
                      ) : productInfo.productName ===
                          "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" ||
                        productInfo.productName ===
                          "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" ||
                        productInfo.productName ===
                          "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" ? (
                        <>
                          <option value="ตัว">ตัว</option>
                          <option value="มัด">มัด (50ตัว/มัด)</option>
                          <option value="กระสอบ">
                            กระสอบ (25กิโลกรัม/กระสอบ)
                          </option>
                        </>
                      ) : productInfo.productName === "กิ๊บลวดหนาม" ? (
                        <>
                          <option value="ตัว">ตัว</option>
                          <option value="กระสอบ">
                            กระสอบ (25กิโลกรัม/กระสอบ)
                          </option>
                        </>
                      ) : productInfo.productName === "ลวดหนาม" ? (
                        <>
                          {barbedsize !== "ระบุเป็นความยาวที่ใช้" && (
                            <option value="ขด">ขด</option>
                          )}
                          {barbedsize === "ระบุเป็นความยาวที่ใช้" && (
                            <option value="เมตร">เมตร</option>
                          )}
                        </>
                      ) : productInfo.productName ===
                        "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)" ? (
                        <>
                          <option value="แผ่น">แผ่น</option>
                          <option value="ตารางเมตร">ตารางเมตร</option>
                        </>
                      ) : (
                        <>
                          <option value="ม้วน">ม้วน</option>
                          <option value="ตารางเมตร">ตารางเมตร</option>
                        </>
                      )}
                    </select>
                  </p>
                  <p className="kanit-medium sm:text-[13px] md:text-[15px] text-[#154360]">
                    จัดส่ง :
                    <select
                      name="text"
                      type=""
                      value={delivery}
                      placeholder="เลือก"
                      className="text-[#ff9800] w-20 h-9 md:w-24 md:h-10 md:ml-6 mb-5 md:mb-5 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                      onChange={handledelivery}
                    >
                      <option value="">เลือก</option>
                      <option value="รับเอง">รับเอง</option>
                      <option value="บริษัทจัดส่ง">บริษัทจัดส่ง</option>
                    </select>
                  </p>
                </div>
              </form>
            </span>
            <hr />
            <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
              <Link to="/quotation">
                <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
                  <div className="flex justify-center items-center">
                    <img
                      ref={iconRef}
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
                      alt="Cart Icon"
                      style={{
                        width: "2em",
                        height: "2em",
                        position: "absolute",
                        top: "0",
                        right: "0",
                      }}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="mx-auto mt-5 md:mt-10 flex justify-center items-center">
              <span>
                <button
                  className="w-20 mr-3 h-10 px-4 py-2 bg-[#154360] kanit-medium text-white text-center rounded-xl hover:bg-[#E74C3C] hover:text-white"
                  onClick={handleClosePopup}
                >
                  ยกเลิก
                </button>
                <button
                  className="w-20 h-10 px-4 py-2 bg-[#154360] kanit-medium text-white text-center rounded-xl hover:bg-[#2ECC71] hover:text-white"
                  onClick={handlePost}
                >
                  ตกลง
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
