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
  const [sheet, setsheet] = useState("");
  const [twohunsize, settwohunsize] = useState("");
  const [wiremeshsize1, setwiremeshsize1] = useState("");
  const [wiremeshsize2, setwiremeshsize2] = useState("");
  const [polesize, setpolesize] = useState("");
  const [dowelsize, setdowelsize] = useState("");
  const [dowelsize2, setdowelsize2] = useState("");
  const [barbedsize, setbarbedsize] = useState("");
  const [clipsize, setclipsize] = useState("");
  const [nailsize, setnailsize] = useState("");
  const [stirrupssize, setstirrupssize] = useState("");
  const [customsize, setcustomsize] = useState("");
  const [delivery, setdelivery] = useState("");
  const [ProductType, setProductType] = useState("");
  const [weight, setweight] = useState("");
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

  const handletwohunsize = (e) => {
    settwohunsize(e.target.value);
  };

  const handledowelsize = (e) => {
    setdowelsize(e.target.value);
  };

  const handledowelsize2 = (e) => {
    setdowelsize2(e.target.value);
  };

  const handlewiremeshsize1 = (e) => {
    setwiremeshsize1(e.target.value);
  };

  const handlepolesize = (e) => {
    setpolesize(e.target.value);
  };

  const handlewiremeshsize2 = (e) => {
    setwiremeshsize2(e.target.value);
  };

  const handlesheet = (e) => {
    setsheet(e.target.value);
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

  const handleweight = (e) => {
    setweight(e.target.value);
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
        productInfo.productName === "เหล็กปลอกรางV (วัตถุดิบ มอก.)" ||
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
        twohunsize,
        wiremeshsize1,
        wiremeshsize2,
        dowelsize,
        dowelsize2,
        sheet,
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
          twohunsize,
          wiremeshsize1,
          wiremeshsize2,
          dowelsize,
          dowelsize2,
          sheet,
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
                  className="w-40 h-80 md:w-80 md:mb-10 md:mt-10 mr-24 md:mr-16 self-center rounded-xl"
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
                  {productInfo.productName === "แบบเหล็กเสา-คานเทสำเร็จ" ? (
                    <>
                      {ProductType === "แบบเสามาตรฐาน (สูง3เมตร)" ? (
                        <>
                          <p className="kanit-medium text-[#154360]">
                            ขนาด :
                            <select
                              name="text"
                              type=""
                              value={polesize}
                              placeholder="เลือก"
                              className="text-[#ff9800] w-24 md:mt-5 mb-2 md:ml-5 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                              onChange={handlepolesize}
                            >
                              <option value="">เลือก</option>
                              <>
                                <option value="150x150 mm.">150x150 mm.</option>
                                <option value="200x200 mm.">200x200 mm.</option>
                                <option value="250x250 mm.">250x250 mm.</option>
                                <option value="300x300 mm.">300x300 mm.</option>
                                <option value="400x400 mm.">400x400 mm.</option>
                              </>
                            </select>
                          </p>
                        </>
                      ) : ProductType === "แบบคานมาตรฐาน" ? (
                        <>
                          <p className="kanit-medium text-[#154360]">
                            ขนาด :
                            <input
                              name="customsize"
                              value={customsize}
                              onChange={handlecustomsize}
                              placeholder="กว้างxยาว mm."
                              className="text-[#ff9800] w-32 ml-6 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                            ></input>
                          </p>
                        </>
                      ) : null}
                    </>
                  ) : null}
                  {productInfo.productName === "แผงรั้วสำเร็จ (รั้วไวร์เมช)" ? (
                    <>
                      <p className="kanit-medium text-[#154360]">
                        ขนาดเล็กรั้ว :
                        <select
                          name="text"
                          type=""
                          value={wiresize}
                          placeholder="เลือก"
                          className="text-[#ff9800] w-24 md:mt-5 mb-2 md:ml-5 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                          onChange={handlewireSize}
                        >
                          <option value="">เลือก</option>
                          <>
                            <option value="4.50 m.">4.50 m.</option>
                            <option value="5.00 m.">5.00 m.</option>
                            <option value="6.00 m.">6.00 m.</option>
                          </>
                        </select>
                      </p>
                      <p className="kanit-medium text-[#154360]">
                        ความสูงแผง :
                        <select
                          name="text"
                          type=""
                          value={wiresize}
                          placeholder="เลือก"
                          className="text-[#ff9800] w-24 mb-2 md:ml-5 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                          onChange={handlewireSize}
                        >
                          <option value="">เลือก</option>
                          <>
                            <option value="1.20 m.">1.20 m.</option>
                            <option value="1.50 m.">1.50 m.</option>
                            <option value="2.00 m.">2.00 m.</option>
                          </>
                        </select>
                      </p>
                      <p className="kanit-medium text-[#154360]">
                        ความกว้างแผง :
                        <select
                          name="text"
                          type=""
                          value={wiresize}
                          placeholder="เลือก"
                          className="text-[#ff9800] w-24 mb-2 md:ml-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                          onChange={handlewireSize}
                        >
                          <option value="">เลือก</option>
                          <>
                            <option value="2.40 m.">2.40 m.</option>
                            <option value="2.50 m.">2.50 m.</option>
                          </>
                        </select>
                      </p>
                    </>
                  ) : null}
                  {productInfo.productName === "เหล็กตัด หนวดกุ้ง" ? (
                    <>
                      <p className="kanit-medium text-[#154360]">
                        ความยาว :
                        <input
                          name="text"
                          value={dowelsize}
                          placeholder="30-50 cm."
                          className="text-[#ff9800] w-24 md:ml-2 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                          onChange={handledowelsize}
                        ></input>
                      </p>
                    </>
                  ) : null}
                  {productInfo.productName !== "กิ๊บลวดหนาม" &&
                  productInfo.productName !== "เหล็กวงบ่อ" &&
                  productInfo.productName !== "เหล็กวงท่อ" &&
                  productInfo.productName !== "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)" &&
                  productInfo.productName !== "แบบเหล็กเสา-คานเทสำเร็จ" &&
                  productInfo.productName !== "ลวดPC wire เบอร์#8 (4มิล)" &&
                  productInfo.productName !== "กล่องเกเบี้ยน" &&
                  productInfo.productName !== "เหล็กนั่งร้าน" &&
                  productInfo.productName !== "แผงรั้วสำเร็จ (รั้วไวร์เมช)" &&
                  productInfo.productName !== "เหล็กตัด หนวดกุ้ง" &&
                  productInfo.productName !== "เหล็กเพลทตัดสำเร็จ" &&
                  productInfo.productName !== "ตะแกรงเหล็กฉีก" &&
                  productInfo.productName !== "ลวดผูกเหล็ก เบอร์#18 (1.2มิล)" &&
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
                                <option value="3.00 mm.">3.00 mm.</option>
                                <option value="3.00 mm.">3.00 mm.</option>
                                <option value="3.20 mm.">3.20 mm.</option>
                                <option value="3.20 mm.">3.20 mm.</option>
                                <option value="4.00 mm.">4.00 mm.</option>
                                <option value="4.00 mm.">4.00 mm.</option>
                                <option value="6.00 mm.">6.00 mm.</option>
                              </>
                            ) : ProductType === "- แบบ 3 เส้น" ? (
                              <>
                                <option value="4.0mm.">4.0mm.</option>
                              </>
                            ) : null}
                          </>
                        ) : productInfo.productName === "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" ? (
                          <>
                          <option value="2.60 mm.">2.60 mm.</option>
                          <option value="2.80 mm.">2.80 mm.</option>
                          <option value="3.00 mm.">3.00 mm.</option>
                          <option value="3.20 mm.">3.20 mm.</option>
                          <option value="3.40 mm.">3.40 mm.</option>
                          <option value="3.60 mm.">3.60 mm.</option>
                          <option value="3.80 mm.">3.80 mm.</option>
                          <option value="4.00 mm.">4.00 mm.</option>
                          <option value="5.00 mm.">5.00 mm.</option>
                          <option value="6.00 mm.">6.00 mm.</option>
                        </>
                        ) : productInfo.productName ===
                          "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)" ? (
                          <>
                            <option value="5.50 มิล">5.50 มิล</option>
                            <option value="6.00 มิล">6.00 มิล</option>
                            <option value="9.00 มิล">9.00 มิล</option>
                            <option value="12.00 มิล">12.00 มิล</option>
                          </>
                        ) : productInfo.productName === "เหล็ก 2 หุนลาย" ? (
                          <>
                            <option value="5.50 มิล 8.00 m.">
                              5.50 มิล 8.00 m.
                            </option>
                            <option value="4.50 มิล 9.00 m.">
                              4.50 มิล 9.00 m.
                            </option>
                            <option value="3.50 มิล 9.00 m.">
                              3.50 มิล 9.00 m.
                            </option>
                            <option value="2.60 มิล 9.00 m.">
                              2.60 มิล 9.00 m.
                            </option>
                          </>
                        ) : productInfo.productName === "เหล็กจ๊อย (โดเวล)" ? (
                          <>
                            <option value="6.00 มิล">6.00 มิล</option>
                            <option value="9.00 มิล">9.00 มิล</option>
                            <option value="15.00 มิล">15.00 มิล</option>
                            <option value="19.00 มิล">19.00 มิล</option>
                            <option value="25.00 มิล">25.00 มิล</option>
                          </>
                        ) : productInfo.productName ===
                          "รั้วแรงดึง (ตาข่ายถักปม)" ? (
                          <>
                            <option value="2.00 มิล">2.00 มิล</option>
                            <option value="2.50 มิล">2.50 มิล</option>
                          </>
                        ) : productInfo.productName === "ลวดหนาม" ? (
                          <>
                            <option value="#10 (3.20มิล)">#10 (3.20มิล)</option>
                            <option value="#11 (2.90มิล)">#11 (2.90มิล)</option>
                            <option value="#12 (2.50มิล)">#12 (2.50มิล)</option>
                            <option value="#13 (2.35มิล)">#13 (2.35มิล)</option>
                            <option value="#14 (2.00มิล)">#14 (2.00มิล)</option>
                          </>
                        ) : productInfo.productName === "สังกะสีแผ่นเรียบ" ? (
                          <>
                            <option value="#22 (0.70มิล)">#22 (0.70มิล)</option>
                            <option value="#24 (0.50มิล)">#24 (0.50มิล)</option>
                            <option value="#25 (0.40มิล)">#25 (0.40มิล)</option>
                            <option value="#26 (0.30มิล)">#26 (0.30มิล)</option>
                            <option value="#28 (0.25มิล)">#28 (0.25มิล)</option>
                            <option value="#30 (0.20มิล)">#30 (0.30มิล)</option>
                          </>
                        ) : productInfo.productName ===
                          "ลวดเหล็กตะปูรีดเย็น" ? (
                          <>
                            <option value="#4 (6.00มิล)">#4 (6.00มิล)</option>
                            <option value="#5 (5.50มิล)">#5 (5.50มิล)</option>
                            <option value="#6 (5.00มิล)">#6 (5.00มิล)</option>
                            <option value="#7 (5.50มิล)">#7 (4.40มิล)</option>
                            <option value="#8 (4.00มิล)">#8 (4.00มิล)</option>
                            <option value="#9 (3.50มิล)">#9 (3.50มิล)</option>
                            <option value="#10 (3.20มิล)">#10 (3.20มิล)</option>
                            <option value="#11 (3.00มิล)">#11 (3.00มิล)</option>
                            <option value="#12 (2.65มิล)">#12 (2.65มิล)</option>
                            <option value="#13 (2.40มิล)">#13 (2.40มิล)</option>
                            <option value="#14 (2.00มิล)">#14 (2.00มิล)</option>
                            <option value="#15 (1.80มิล)">#15 (1.80มิล)</option>
                            <option value="#16 (1.60มิล)">#16 (1.60มิล)</option>
                            <option value="#17 (1.40มิล)">#17 (1.40มิล)</option>
                            <option value="#18 (1.25มิล)">#18 (1.25มิล)</option>
                            <option value="#19 (1.07มิล)">#19 (1.07มิล)</option>
                            <option value="#20 (0.90มิล)">#20 (0.90มิล)</option>
                            <option value="#21 (0.80มิล)">#21 (0.80มิล)</option>
                            <option value="#22 (0.70มิล)">#22 (0.07มิล)</option>
                            <option value="#23 (0.62มิล)">#23 (0.62มิล)</option>
                            <option value="#24 (0.55มิล)">#24 (0.55มิล)</option>
                            <option value="#25 (0.50มิล)">#25 (0.50มิล)</option>
                            <option value="#26 (0.45มิล)">#26 (0.45มิล)</option>
                            <option value="#27 (0.40มิล)">#27 (0.40มิล)</option>
                            <option value="#28 (0.35มิล)">#28 (0.35มิล)</option>
                          </>
                        ) : productInfo.productName === "ลวดชุบสังกะสี" ? (
                          <>
                            <option value="#6 (5.00มิล)">#6 (5.00มิล)</option>
                            <option value="#7 (5.50มิล)">#7 (4.40มิล)</option>
                            <option value="#8 (4.00มิล)">#8 (4.00มิล)</option>
                            <option value="#9 (3.50มิล)">#9 (3.50มิล)</option>
                            <option value="#10 (3.20มิล)">#10 (3.20มิล)</option>
                            <option value="#11 (3.00มิล)">#11 (3.00มิล)</option>
                            <option value="#12 (2.65มิล)">#12 (2.65มิล)</option>
                            <option value="#13 (2.40มิล)">#13 (2.40มิล)</option>
                            <option value="#14 (2.00มิล)">#14 (2.00มิล)</option>
                            <option value="#15 (1.80มิล)">#15 (1.80มิล)</option>
                            <option value="#16 (1.60มิล)">#16 (1.60มิล)</option>
                            <option value="#17 (1.40มิล)">#17 (1.40มิล)</option>
                            <option value="#18 (1.25มิล)">#18 (1.25มิล)</option>
                            <option value="#19 (1.07มิล)">#19 (1.07มิล)</option>
                            <option value="#20 (0.90มิล)">#20 (0.90มิล)</option>
                            <option value="#22 (0.70มิล)">#22 (0.70มิล)</option>
                            <option value="#24 (0.56มิล)">#24 (0.56มิล)</option>
                          </>
                        ) : (
                          <>
                            <option value="#8 (4.00มิล)">#8 (4.00มิล)</option>
                            <option value="#9 (3.60มิล)">#9 (3.60มิล)</option>
                            <option value="#10 (3.20มิล)">#10 (3.20มิล)</option>
                            <option value="#11 (2.90มิล)">#11 (2.90มิล)</option>
                            <option value="#12 (2.50มิล)">#12 (2.50มิล)</option>
                            <option value="#13 (2.35มิล)">#13 (2.35มิล)</option>
                            <option value="#14 (2.00มิล)">#14 (2.00มิล)</option>
                          </>
                        )}
                      </select>
                    </p>
                  ) : null}
                                    {productInfo.productName ===
                  "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" ? (
                    <p className="kanit-medium text-[#154360]">
                      ขนาดตกตะแกรง :
                      <select
                        name="text"
                        type=""
                        value={gauge}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-24 mb-2 md:ml-5 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlegauge}
                      >
                        <option value="">เลือก</option>
                        <>
                        <>
                            <option value="10x30 cm.">10x30 cm.</option>
                            <option value="15x15 cm.">15x15 cm.</option>
                            <option value="20x20 cm.">20x20 cm.</option>
                            <option value="25x25 cm.">25x25 cm.</option>
                            <option value="30x30 cm.">30x30 cm.</option>
                          </>
                        </>
                      </select>
                    </p>
                  ) : null}

                  {productInfo.productName ===
                    "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" ||
                  productInfo.productName === "เหล็กปลอกรางV (วัตถุดิบ มอก.)" ||
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
                  {productInfo.productName === "เหล็ก 2 หุนลาย" ? (
                    <p className="kanit-medium text-[#154360]">
                      น้ำหนัก(กิโลกรัม/เส้น) :
                      <select
                        name="text"
                        value={twohunsize}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-24 md:ml-5 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handletwohunsize}
                      >
                        <option value="">เลือก</option>
                        <option value="1.30 กิโลกรัม/เส้น">
                          1.30 กิโลกรัม/เส้น
                        </option>
                        <option value="1.03 กิโลกรัม/เส้น">
                          1.03 กิโลกรัม/เส้น
                        </option>
                        <option value="0.55 กิโลกรัม/เส้น">
                          0.55 กิโลกรัม/เส้น
                        </option>
                        <option value="0.35 กิโลกรัม/เส้น">
                          0.35 กิโลกรัม/เส้น
                        </option>
                      </select>
                    </p>
                  ) : null}
                  {(productInfo.productName === "ลวดหนาม" ||
                    // productInfo.productName !== "ตะแกรงเหล็กฉีก"
                    //   productInfo.productName !== "ลวดชุบสังกะสี" ||
                    productInfo.productName ===
                      "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)") && (
                    <p className="kanit-medium text-[#154360]">
                      น้ำหนัก(กิโลกรัม/ขด) :
                      <select
                        name="text"
                        value={barbedsize}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-24 md:ml-5 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlebarbedsize}
                      >
                        <option value="">เลือก</option>
                        {productInfo.productName === "ลวดหนาม" ? (
                          <>
                            <option value="3 กิโลกรัม/ขด">3 กิโลกรัม/ขด</option>
                            <option value="4 กิโลกรัม/ขด">4 กิโลกรัม/ขด</option>
                            <option value="5 กิโลกรัม/ขด">5 กิโลกรัม/ขด</option>
                            <option value="6 กิโลกรัม/ขด">6 กิโลกรัม/ขด</option>
                            <option value="7 กิโลกรัม/ขด">7 กิโลกรัม/ขด</option>
                            <option value="8 กิโลกรัม/ขด">8 กิโลกรัม/ขด</option>
                            <option value="9 กิโลกรัม/ขด">9 กิโลกรัม/ขด</option>
                            <option value="10 กิโลกรัม/ขด">
                              10 กิโลกรัม/ขด
                            </option>
                            <option value="ระบุเป็นความยาวที่ใช้">
                              ระบุเป็นความยาวที่ใช้
                            </option>
                          </>
                        ) : productInfo.productName ===
                          "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)" ? (
                          <>
                            <option value="2.00 กิโลกรัม/ขด">
                              2.00 กิโลกรัม/ขด
                            </option>
                            <option value="2.30 กิโลกรัม/ขด">
                              2.30 กิโลกรัม/ขด
                            </option>
                            <option value="2.50 กิโลกรัม/ขด">
                              2.50 กิโลกรัม/ขด
                            </option>
                            <option value="2.90 กิโลกรัม/ขด">
                              2.90 กิโลกรัม/ขด
                            </option>
                          </>
                        ) : null}
                      </select>
                    </p>
                  )}
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
                  productInfo.productName !== "เหล็กวงบ่อ" &&
                  productInfo.productName !== "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" &&
                  productInfo.productName !== "เหล็กวงท่อ" &&
                  productInfo.productName !== "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)" &&
                  productInfo.productName !== "แบบเหล็กเสา-คานเทสำเร็จ" &&
                  productInfo.productName !== "ลวดPC wire เบอร์#8 (4มิล)" &&
                  productInfo.productName !== "กล่องเกเบี้ยน" &&
                  productInfo.productName !== "เหล็กนั่งร้าน" &&
                  productInfo.productName !== "ลวดเหล็กตะปูรีดเย็น" &&
                  productInfo.productName !== "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)" &&
                  productInfo.productName !== "แผงรั้วสำเร็จ (รั้วไวร์เมช)" &&
                  productInfo.productName !== "ลวดชุบสังกะสี" &&
                  productInfo.productName !== "เหล็ก 2 หุนลาย" &&
                  productInfo.productName !== "เหล็กจ๊อย (โดเวล)" &&
                  productInfo.productName !== "เหล็กตัด หนวดกุ้ง" &&
                  productInfo.productName !== "สังกะสีแผ่นเรียบ" &&
                  productInfo.productName !== "เหล็กเพลทตัดสำเร็จ" &&
                  productInfo.productName !== "ตะแกรงเหล็กฉีก" &&
                  productInfo.productName !== "ลวดผูกเหล็ก เบอร์#18 (1.2มิล)" &&
                  productInfo.productName !==
                    "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" &&
                  productInfo.productName !== "เหล็กปลอกรางV (วัตถุดิบ มอก.)" &&
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
                        className="text-[#ff9800] w-24 md:ml-12 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlegauge}
                      >
                        <option value="">เลือก</option>
                        {productInfo.productName ===
                        "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป" ? (
                          <>
                            {ProductType === "- แบบ 2 เส้น" ? (
                              <>
                                <option value="30 m.">30 m.</option>
                                <option value="50 m.">40 m.</option>
                                <option value="30 m.">30 m.</option>
                                <option value="50 m.">40 m.</option>
                                <option value="30 m.">30 m.</option>
                                <option value="50 m.">40 m.</option>
                                <option value="25 m.">25 m.</option>
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
                  {/* {productInfo.productName === "ลวดPC wire เบอร์#8 (4มิล)" ? (
                    <>
                      <p className="kanit-medium text-[#154360]">
                         ระบุเป็นน้ำหนัก :
                         <input
                           name="weight"
                           value={weight}
                           onChange={handleweight}
                           placeholder="กิโลกรัม/ม้วน"
                           className="text-[#ff9800] w-28 ml-9 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                         />
                       </p>
                    </>
                  ) : null} */}
                  {productInfo.productName === "กล่องเกเบี้ยน" ? (
                    <>
                      {!weight && (
                        <>
                          <p className="kanit-medium text-[#154360]">
                            ขนาด :
                            <input
                              name="customsize"
                              value={customsize}
                              onChange={handlecustomsize}
                              placeholder="กว้างxยาวxสูง m."
                              className="text-[#ff9800] w-28 ml-9 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                            ></input>
                          </p>
                          <p className="kanit-medium text-[#154360]">
                            ตา :
                            <input
                              name="customsize"
                              value={customsize}
                              onChange={handlecustomsize}
                              placeholder="กว้างxยาว cm."
                              className="text-[#ff9800] w-28 ml-9 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                            ></input>
                          </p>
                        </>
                      )}
                      {!customsize && (
                        <p className="kanit-medium text-[#154360]">
                          ระบุเป็นน้ำหนัก :
                          <input
                            name="weight"
                            value={weight}
                            onChange={handleweight}
                            placeholder="กิโลกรัม"
                            className="text-[#ff9800] w-28 ml-9 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                          />
                        </p>
                      )}
                    </>
                  ) : null}
                  {productInfo.productName === "ตะแกรงเหล็กฉีก" ||
                  productInfo.productName === "เหล็กเพลทตัดสำเร็จ" ? (
                    <p className="kanit-medium text-[#154360]">
                      ขนาด(ต่อแผ่น) :
                      <select
                        name="text"
                        type=""
                        value={sheet}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-28 md:ml-5 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handlesheet}
                      >
                        <option value="">เลือก</option>
                        {productInfo.productName === "ตะแกรงเหล็กฉีก" ? (
                          <>
                            <option value='4"x8" ฟุต'>4"x8" ฟุต</option>
                            <option value='5"x10" ฟุต'>5"x10" ฟุต</option>
                          </>
                        ) : productInfo.productName === "เหล็กเพลทตัดสำเร็จ" ? (
                          <>
                            <option value='2"x2"x4.00 mm'>2"x2"x4.00 mm</option>
                            <option value='3"x3"x4.00 mm'>3"x3"x4.00 mm</option>
                            <option value='4"x4"x4.00 mm'>4"x4"x4.00 mm</option>
                            <option value='5"x5"x4.00 mm'>5"x5"x4.00 mm</option>
                            <option value='6"x6"x4.00 mm'>6"x6"x4.00 mm</option>
                            <option value='8"x8"x4.00 mm'>8"x8"x4.00 mm</option>
                            <option value='3"x3"x6.00 mm'>3"x3"x6.00 mm</option>
                            <option value='4"x4"x6.00 mm'>4"x4"x6.00 mm</option>
                            <option value='5"x5"x6.00 mm'>5"x5"x6.00 mm</option>
                            <option value='6"x6"x6.00 mm'>6"x6"x6.00 mm</option>
                            <option value='8"x8"x6.00 mm'>8"x8"x6.00 mm</option>
                            <option value='10"x10"x6.00 mm'>
                              10"x10"x6.00 mm
                            </option>
                            <option value='3"x3"x9.00 mm'>3"x3"x9.00 mm</option>
                            <option value='4"x4"x9.00 mm'>4"x4"x9.00 mm</option>
                            <option value='5"x5"x9.00 mm'>5"x5"x9.00 mm</option>
                            <option value='6"x6"x9.00 mm'>6"x6"x9.00 mm</option>
                            <option value='8"x8"x9.00 mm'>8"x8"x9.00 mm</option>
                            <option value='10x10"x9.00 mm'>
                              10x10"x9.00 mm
                            </option>
                            <option value='12"x12"x9.00 mm'>
                              12"x12"x9.00 mm
                            </option>
                            <option value='14"x14"x9.00 mm'>
                              14"x14"x9.00 mm
                            </option>
                            <option value='6"x6"x12 mm'>6"x6"x12 mm</option>
                            <option value='8"x8"x12 mm'>8"x8"x12 mm</option>
                            <option value='10"x10"x12 mm'>10"x10"x12 mm</option>
                            <option value='12"x12"x12 mm'>12"x12"x12 mm</option>
                            <option value='14"x14"x12 mm'>14"x14"x12 mm</option>
                            <option value='10"x10"x15 mm'>10"x10"x15 mm</option>
                            <option value='12"x12"x15 mm'>12"x12"x15 mm</option>
                            <option value='14"x14"x15 mm'>14"x14"x15 mm</option>
                          </>
                        ) : null}
                      </select>
                    </p>
                  ) : null}
                  {productInfo.productName ===
                  "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" ? (
                    <p className="kanit-medium text-[#154360]">
                      ขนาด(ต่อม้วน) :
                      <input
                        name="wiremeshsize1"
                        value={wiremeshsize1}
                        onChange={handlewiremeshsize1}
                        placeholder="กว้าง 2-4 m."
                        className="text-[#ff9800] w-28 md:ml-8 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                      ></input>
                      <input
                        name="wiremeshsize2"
                        value={wiremeshsize2}
                        onChange={handlewiremeshsize2}
                        placeholder="ยาว 5-50 m."
                        className="text-[#ff9800] w-28 ml-1 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                      ></input>
                    </p>
                  ) : null}
                  {productInfo.productName === "เหล็กจ๊อย (โดเวล)" ? (
                    <p className="kanit-medium text-[#154360]">
                      ขนาดข้ออ้อย :
                      <select
                        name="text"
                        type=""
                        value={dowelsize2}
                        placeholder="เลือก"
                        className="text-[#ff9800] w-28 md:ml-5 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                        onChange={handledowelsize2}
                      >
                        <option value="">เลือก</option>
                        <option value="DB12 12มิล">DB12 12มิล</option>
                        <option value="DB16 16มิล">DB16 16มิล</option>
                      </select>
                    </p>
                  ) : null}
                  {productInfo.productName !==
                    "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" &&
                    productInfo.productName !== "เหล็กวงบ่อ" &&
                  productInfo.productName !== "เหล็กวงท่อ" &&
                    productInfo.productName !== "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)" &&
                  productInfo.productName !== "สังกะสีแผ่นเรียบ" &&
                  productInfo.productName !== "แบบเหล็กเสา-คานเทสำเร็จ" &&
                  productInfo.productName !== "ลวดPC wire เบอร์#8 (4มิล)" &&
                  productInfo.productName !== "กล่องเกเบี้ยน" &&
                  productInfo.productName !== "เหล็กนั่งร้าน" &&
                  productInfo.productName !== "ลวดเหล็กตะปูรีดเย็น" &&
                  productInfo.productName !== "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)" &&
                  productInfo.productName !== "เหล็กจ๊อย (โดเวล)" &&
                  productInfo.productName !== "แผงรั้วสำเร็จ (รั้วไวร์เมช)" &&
                  productInfo.productName !== "เหล็กตัด หนวดกุ้ง" &&
                  productInfo.productName !==
                    "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" &&
                  productInfo.productName !== "เหล็ก 2 หุนลาย" &&
                  productInfo.productName !== "เหล็กเพลทตัดสำเร็จ" &&
                  productInfo.productName !== "ตะแกรงเหล็กฉีก" &&
                  productInfo.productName !== "ลวดชุบสังกะสี" &&
                  productInfo.productName !== "เหล็กปลอกรางV (วัตถุดิบ มอก.)" &&
                  productInfo.productName !==
                    "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" &&
                  productInfo.productName !==
                    "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" &&
                  productInfo.productName !== "ลวดผูกเหล็ก เบอร์#18 (1.2มิล)" &&
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
                            <option value="0.90x25 m.">0.90x25 m.</option>
                            <option value="0.90x30 m.">0.90x30 m.</option>
                            <option value="1.20x30 m.">1.20x30 m.</option>
                          </>
                        ) : productInfo.productName ===
                          "รั้วแรงดึง (ตาข่ายถักปม)" ? (
                          <>
                            <option value="0.90x30 m.">0.90x30 m.</option>
                            <option value="0.90x50 m.">0.90x50 m.</option>
                            <option value="0.90x100 m.">0.90x100 m.</option>
                            <option value="1.20x30 m.">1.20x30 m.</option>
                            <option value="1.20x50 m.">1.20x50 m.</option>
                            <option value="1.20x100 m.">1.20x100 m.</option>
                            <option value="1.50x30 m.">1.50x30 m.</option>
                            <option value="1.50x50 m.">1.50x50 m.</option>
                            <option value="1.50x100 m.">1.50x100 m.</option>
                            <option value="1.65x30 m.">1.65x30 m.</option>
                            <option value="1.65x50 m.">1.65x50 m.</option>
                            <option value="1.65x100 m.">1.65x100 m.</option>
                            <option value="1.80x30 m.">1.80x30 m.</option>
                            <option value="1.80x50 m.">1.80x50 m.</option>
                            <option value="1.80x100 m.">1.80x100 m.</option>
                            <option value="2.00x30 m.">2.00x30 m.</option>
                            <option value="2.00x50 m.">2.00x50 m.</option>
                            <option value="2.00x100 m.">2.00x100 m.</option>
                          </>
                        ) : productInfo.productName ===
                          "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)" ? (
                          <>
                            <option value="1x20 m.">1x20 m.</option>
                            <option value="1.20x2.40 m.">1.20x2.40 m.</option>
                            <option value="ระบุขนาดเอง">ระบุขนาดเอง</option>
                          </>
                        ) : (
                          <>
                            <option value="0.80x10 m.">0.80x10 m.</option>
                            <option value="1.00x10 m.">1.00x10 m.</option>
                            <option value="1.20x10 m.">1.20x10 m.</option>
                            <option value="1.50x10 m.">1.50x10 m.</option>
                            <option value="1.80x10 m.">1.80x10 m.</option>
                            <option value="2.00x10 m.">2.00x10 m.</option>
                            <option value="ระบุขนาดเอง">ระบุขนาดเอง</option>
                          </>
                        )}
                      </select>
                      {coil === "ระบุขนาดเอง" ? (
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
                      ) : null}
                    </p>
                  ) : null}
{productInfo.productName === "สังกะสีแผ่นเรียบ" && (
        <>
          <p className="kanit-medium text-[#154360]">
            ขนาด(ต่อม้วน) :
            <select
              name="text"
              value={coil}
              placeholder="เลือก"
              className="text-[#ff9800] w-28 md:ml-5 mb-2 md:mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
              onChange={handlecoil}
            >
              <option value="">เลือก</option>
              <option value="4x8 ฟุต">4x8 ฟุต</option>
              <option value="ระบุขนาดเอง">ระบุขนาดเอง</option>
            </select>
          </p>
          
          {coil === "ระบุขนาดเอง" && (
            <p className="kanit-medium text-[#154360]">
              ขนาด :
              <input
                name="customsize"
                value={customsize}
                onChange={handlecustomsize}
                placeholder="กว้างxยาว ฟุต"
                className="text-[#ff9800] w-28 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
              />
            </p>
          )}
        </>
      )}
                  {/* {productInfo.productName === "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" ? (
                        <p className="kanit-medium text-[#154360]">
                          ขนาด :
                          <input
                            name="customsize"
                            value={customsize}
                            onChange={handlecustomsize}
                            placeholder="กว้าง 2-4 m."
                            className="text-[#ff9800] w-28 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                          ></input>
                          <input
                            name="customsize"
                            value={customsize}
                            onChange={handlecustomsize}
                            placeholder="ยาว 5-50 m."
                            className="text-[#ff9800] w-28 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                          ></input>
                        </p>
                  ) : null} */}
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
                      ) : productInfo.productName === "ลวดเหล็กตะปูรีดเย็น" ? (
                        <>
                          <option value="ขด">ขด (115กิโลกรัม/ขด)</option>
                        </>
                      ) : productInfo.productName === "ตะปูตอกไม้" ? (
                        <>
                          <option value="ลัง">ลัง (18kg/ลัง)</option>
                        </>
                      ) : productInfo.productName ===
                          "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" ||
                        productInfo.productName ===
                          "เหล็กปลอกรางV (วัตถุดิบ มอก.)" ||
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
                          "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)" ||
                        productInfo.productName === "ลวดชุบสังกะสี" ? (
                        <>
                          <option value="ขด">ขด</option>
                        </>
                      ) : productInfo.productName === "ตะแกรงเหล็กฉีก" ? (
                        <>
                          <option value="แผ่น">แผ่น</option>
                        </>
                      ) : productInfo.productName === "สังกะสีแผ่นเรียบ" ? (
                        <>
                          <option value="ฟุต">ฟุต</option>
                        </>
                      ) : productInfo.productName === "เหล็กตัด หนวดกุ้ง" ? (
                        <>
                          <option value="กิโลกรัม">กิโลกรัม</option>
                          <option value="มัด">มัด(25กิโล/มัด)</option>
                        </>
                      ) : productInfo.productName === "เหล็กเพลทตัดสำเร็จ" ? (
                        <>
                          <option value="แผ่น">แผ่น</option>
                          <option value="กิโลกรัม/แผ่น">กิโลกรัม/แผ่น</option>
                        </>
                      ) : productInfo.productName ===
                        "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)" ? (
                        <>
                          <option value="แผ่น">แผ่น</option>
                          <option value="ตารางเมตร">ตารางเมตร</option>
                        </>
                      ) : productInfo.productName ===
                        "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" ? (
                        <>
                          <option value="ตารางเมตร">ตารางเมตร</option>
                        </>
                      ) : productInfo.productName === "เหล็กจ๊อย (โดเวล)" ? (
                        <>
                          <option value="กิโลกรัม">
                            กิโลกรัม (ตัดยาว 50 cm./ท่อน)
                          </option>
                        </>
                      ) : productInfo.productName === "เหล็ก 2 หุนลาย" ? (
                        <>
                          {twohunsize === "1.30 กิโลกรัม/เส้น" ||
                          twohunsize === "1.03 กิโลกรัม/เส้น" ? (
                            <option value="มัด">400เส้น/มัด</option>
                          ) : twohunsize === "0.55 กิโลกรัม/เส้น" ||
                            twohunsize === "0.35 กิโลกรัม/เส้น" ? (
                            <option value="มัด">1000เส้น/มัด</option>
                          ) : null}
                        </>
                      ) : productInfo.productName ===
                        "แผงรั้วสำเร็จ (รั้วไวร์เมช)" ? (
                        <>
                          <option value="แผง">แผง</option>
                        </>
                      ) : productInfo.productName ===
                        "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)" ? (
                        <>
                          <option value="ขด">ขด/2000กิโลกรัม</option>
                        </>
                      ) : productInfo.productName === "เหล็กนั่งร้าน" ? (
                        <>
                          <option value="ชุด">ชุด</option>
                        </>
                      ) : productInfo.productName === "กล่องเกเบี้ยน" ? (
                        <>
                          <option value="กล่อง">กล่อง</option>
                        </>
                      ) : productInfo.productName ===
                        "ลวดPC wire เบอร์#8 (4มิล)" ? (
                        <>
                          <option value="ม้วน">ม้วน/1000กิโลกรัม</option>
                        </>
                        ) : productInfo.productName !== "เหล็กวงบ่อ" ||
                      productInfo.productName !== "เหล็กวงท่อ" ? (
                        <>
                          <option value="ขด">30กิโลกรัม/ขด</option>
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
