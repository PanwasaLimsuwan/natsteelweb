import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
// import { MdSwitchAccount } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaNewspaper } from "react-icons/fa";
import { useState } from "react";
// import { useEffect } from "react";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductInfo from "../pageProps/productDetails/ProductInfo";
import "./SpecialCase.css";
import { Button } from "bootstrap";

// const SpecialCase = () => {
//   const products = useSelector((state) => state.orebiReducer.products);
//   const newsProductRef = useRef(null);

// const SpecialCase = () => {
//   const products = useSelector((state) => state.orebiReducer.products);
//   const iconRef = useRef(null);
//   // const newsProductRef = useRef(null);
//   console.log("IconRef:", iconRef.current);

// const SpecialCase = ({ productInfo }) => {
//   const [productInfo, setProductInfo] = useState(null);

// const SpecialCase = forwardRef((props, ref) => {

  const SpecialCase = () => {
    
  // const [productInfo, setProductInfo] = useState(null);
  const products = useSelector((state) => state.orebiReducer.products);
  // const iconRef = useRef(null);
  // const location = useLocation();
  // const imgSrc = location.state?.imgSrc; // ใช้ location.state?.imgSrc เพื่อเข้าถึง imgSrc
  // const imageRef = useRef(null);
  // const newsProductRef = useRef(null);
  // console.log("IconRef:", iconRef);

  // useEffect(() => {
  //   if (imageRef?.current && iconRef.current) {
  //     const imageRect = imageRef.current.getBoundingClientRect();
  //     const iconRect = iconRef.current.getBoundingClientRect();
  
  //     const deltaX = iconRect.left - imageRect.left;
  //     const deltaY = iconRect.top - imageRect.top;
  
  //     iconRef.current.style.transition = "transform 0.5s";
  //     iconRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  
  //     flyToIcon(imgSrc, iconRef.current, iconRef); // เปลี่ยนตรงนี้
  //   }
  // }, [imgSrc, imageRef]);  

//  ------------------------------------------------------------------------------------

// useEffect(() => {
//   console.log("IconRef:", iconRef.current);
// }, [iconRef]);
// const localIconRef = useRef(null); // สร้าง iconRef แบบ local

// ถ้าไม่มีค่า iconRef ที่ส่งเข้ามา ให้ใช้ iconRef แบบ local แทน
// const finalIconRef = iconRef || localIconRef;

// useEffect(() => {
//   console.log("IconRef:", iconRef.current);  // Logs after component mounts
// }, []);
// const newsProductRef = useRef(null);
// const location = useLocation();
// const imageSrc = location.state?.imgSrc;
// const iconRef = location.state?.iconRef;

// console.log("Product Image URL location:", imageSrc);
// console.log("Product IconRef location:", iconRef);
// console.log("Product Image URL: ",productInfo.img)

// export const flyToIcon = (imageSrc, startElement, targetRef) => {
//   if (!targetRef.current) return; // Ensure the target ref is available

//   const iconRect = targetRef.current.getBoundingClientRect();
//   const startRect = startElement.getBoundingClientRect();

//   const flyingImage = document.createElement('img');
//   flyingImage.src = imageSrc;
//   flyingImage.style.position = 'fixed';
//   flyingImage.style.left = `${startRect.left}px`;
//   flyingImage.style.top = `${startRect.top}px`;
//   flyingImage.style.width = `${startRect.width}px`;
//   flyingImage.style.height = `${startRect.height}px`;
//   flyingImage.style.transition = 'all 0.8s ease-out';
//   flyingImage.style.zIndex = 1000;
//   document.body.appendChild(flyingImage);

//   setTimeout(() => {
//       flyingImage.style.left = `${iconRect.left}px`;
//       flyingImage.style.top = `${iconRect.top}px`;
//       flyingImage.style.width = '20px';
//       flyingImage.style.height = '20px';
//       flyingImage.style.opacity = 0;
//   }, 10);

//   setTimeout(() => {
//       document.body.removeChild(flyingImage);
//   }, 820); // slightly longer than the transition
// };

//     setTimeout(() => {
//       document.body.removeChild(flyingImage);
//     }, 820); // slightly longer than the transition
//  ------------------------------------------------------------------------
// const SpecialCase = ({ imgSrc, imageRef, onClose }) => {
//   const products = useSelector((state) => state.orebiReducer.products);
//   const iconRef = useRef(null);
//   console.log("iconRef :", iconRef)

//   useEffect(() => {
//     if (imageRef?.current && iconRef.current) {
//       const imageRect = imageRef.current.getBoundingClientRect();
//       const iconRect = iconRef.current.getBoundingClientRect();

//       const deltaX = iconRect.left - imageRect.left;
//       const deltaY = iconRect.top - imageRect.top;

//       iconRef.current.style.transition = "transform 0.5s";
//       iconRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
//     }
//   }, [imgSrc, imageRef]);

//   const handleIconClick = () => {
//     // โค้ดที่ต้องการเมื่อคลิกที่รูปภาพ
//     console.log("Icon clicked!");
//   };

// const SpecialCase = () => {
//   const products = useSelector((state) => state.orebiReducer.products);
//   const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
//   const iconRef = useRef(null);
//   const location = useLocation();
//   const imgSrc = location.state?.imgSrc;
//   // const productInfo = useSelector((state) => state.productInfo);
//   // console.log("ProductInfo img: ", productInfo.img)

//   useEffect(() => {
//     const icon = iconRef.current;
//     if (icon) {
//       const handleMouseMove = (e) => {
//         setIconPosition({
//           x: e.clientX - 25,
//           y: e.clientY - 25,
//         });
//       };
//       icon.addEventListener("mousemove", handleMouseMove);
//       return () => {
//         icon.removeEventListener("mousemove", handleMouseMove);
//       };
//     }
//   }, [iconRef]);

  return (
    <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
      <Link to="/quotation">
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
          <div className="flex justify-center items-center">
            {/* <ProductInfo productInfo={productInfo} iconRef={iconRef} /> */}
            {/* <FaNewspaper ref={iconRef} className="icon" onMouseMove={handleMouseMove} /> */}
            {/* <button ref={iconRef} className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer"> */}
              <FaNewspaper className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            {/* {productInfo && productInfo.img && ( */}
            {/* <img
              src={imgSrc} 
              // src={products.img} // เปลี่ยนเป็น URL หรือ path ของรูปภาพจาก ProductInfo
              // alt="Product Image"
              className="floating-image"
              style={{ top: iconPosition.y, left: iconPosition.x }}
            /> */}
          {/* )} */}
            <FaNewspaper className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
            {/* </button> */}
          </div>
          <p className="text-xs text-center font-semibold font-titleFont">
            ใบเสนอราคา
          </p>
           {products.length > 0 && ( 
            <p
              className="absolute top-1 right-2 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold"
              style={{ backgroundColor: "red" }}
              // aria-label={`${products.length} items in quotation`}
            >
              {products.length}
            </p>
          )}
        </div>
      </Link>
      <Link to="/shop">
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">ดูสินค้า</p>
          {/* {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )} */}
        </div>
        {/* <ProductInfo iconRef={iconRef} productInfo={productInfo} /> */}
      </Link>
      {/* {iconRef && <ProductInfo iconRef={iconRef} />} */}
      {/* <ProductInfo productInfo={productInfo} iconRef={iconRef} /> */}
    </div>
  );
};
{/* }; */}

export default SpecialCase;
