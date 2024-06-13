// import { Link } from "react-router-dom";
// import {
//   saleImgOne,
//   saleImgTwo,
//   saleImgThree,
// } from "../../../assets/images/index";
// import Image from "../../designLayouts/Image";
// import ShopNow from "../../designLayouts/buttons/ShopNow";
import React from "react";
import B from "../../../../src/assets/images/banner/officeblend2.png";
// import B from "../../../../src/assets/images/banner/bestseller5.png";
import guarantee from "../../../../src/assets/images/banner/guarantee.png";
import delivery from "../../../../src/assets/images/banner/delivery.png";
import goodprice from "../../../../src/assets/images/banner/goodprice.png";
import service from "../../../../src/assets/images/banner/service.png";
import Image from "../../designLayouts/Image";
import "../../Banner/banner.css";
import "../../../assets/font.css";
import { Link } from "react-router-dom";

const Sale = () => {
  const containerStyle = {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  };
  const imageTextStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // marginRight: "10px", // Adjust as necessary for spacing between items
    // margin: "0 20px", // เพิ่ม margin ซ้ายและขวา
    justifyContent: "center",
    color: "#154360",
  };
  // const imageTextStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   marginRight: "auto",
  //   marginLeft: "auto",
  //   color: "#154360",
  // };
  const iconContainerStyle = {
    display: "flex",
  justifyContent: "center",
  // flexWrap: "wrap", // เพิ่ม flexWrap เพื่อให้ไอคอนเรียงกันได้ดีขึ้นในหน้าจอขนาดเล็ก
  gap: "10px", // เพิ่ม gap ระหว่างไอคอน
  };
  return (
    <div style={containerStyle}>
      {/* <div
        style={{
          position: "absolute",
          top: "18%",
          left: "77%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          className="poppins-bold"
          style={{
            // fontFamily: "Prompt",
            color: "#E22021",
            fontWeight: "500",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          Best Seller
        </h1>
        </div> */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "53%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1
          className="kanit-light"
          style={{
            // fontFamily: "Prompt",
            color: "#154360",
            fontWeight: "500",
            fontSize: "2.75rem",
            textAlign: "center",
          }}
        >
          บริษัท นัทสตีล จำกัด
        </h1>
        <p
          className="kanit-medium mt-5"
          style={{
            color: "#ff9800",
            // fontFamily: "Prompt",
            fontWeight: "500",
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          " บริษัท นัทสตีล คือหนึ่งในผู้ผลิตสินค้าป้อนสู่ตลาดวงการวัสดุก่อสร้าง
        </p>
        <p
          className="kanit-medium mt-2"
          style={{
            color: "#ff9800",
            // fontFamily: "Prompt",
            fontWeight: "500",
            fontSize: "1.25rem",
            textAlign: "center",
          }}
        >
          ที่ได้มาตรฐานและมีคุณภาพ แห่งหนึ่งของประเทศไทย "
        </p>
        <Link to="/about" className="flex justify-center items-center">
          <button
            className="kanit-medium mt-10 w-28 h-12 bg-[#154360] text-white rounded-xl hover:bg-[#ff9800] hover:text-white"
            // style={{ backgroundColor: "#154360" }}
          >
            เกี่ยวกับเรา
          </button>
        </Link>
        <div className="mt-20" style={iconContainerStyle}>
        {/* <div className="mt-20" style={{ display: "flex" }}> */}
        <div style={imageTextStyle}>
            <Image imgSrc={guarantee} />
            <p className="kanit-medium mt-5 ">
              รับประกันคุณภาพสินค้า
            </p>
            <p 
            className="kanit-medium mt-2"
            style={{ fontSize: "0.8rem", textAlign: "center" }}
            >
              ผ่านการตรวจสอบ QC
            </p>
          </div>
          <div style={imageTextStyle}>
            <Image imgSrc={delivery} />
            <p className="kanit-medium mt-5">
            มีบริการจัดส่งสินค้า
            </p>
            <p 
            className="kanit-medium mt-2"
            style={{ fontSize: "0.8rem", textAlign: "center" }}
            >
              จัดส่งทั่วประเทศไทย
            </p>
          </div>
          <div style={imageTextStyle}>
            <Image imgSrc={goodprice} />
            <p className="kanit-medium mt-5">
              ราคาคุ้มค่า
            </p>
            <p 
            className="kanit-medium mt-2"
            style={{ fontSize: "0.8rem", textAlign: "center" }}
            >
              ได้รับสินค้าคุณภาพดีในราคาเป็นกันเอง
            </p>
          </div>
          <div style={imageTextStyle}>
            <Image imgSrc={service} className="mt-5"/>
            <p className="kanit-medium mt-7">
              มีบริการให้คำปรึกษา
            </p>
            <p 
            className="kanit-medium mt-2"
            style={{ fontSize: "0.8rem", textAlign: "center" }}
            >
              ให้คำปรึกษาโดยผู้เชี่ยวชาญ<br />เกี่ยวกับการแนะนำและประมาณราคา
            </p>
          </div>
        </div>
      </div>
      <Image imgSrc={B} className="custom-banner" />
    </div>
  );
};

export default Sale;
