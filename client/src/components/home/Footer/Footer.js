import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import FooterListTitle from "./FooterListTitle";
import { Link } from "react-router-dom";
import "../../../assets/font.css";
import LineButton from "./LineButton";
import {
  FaLine,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaFax,
  FaMobile,
  FaClock,
} from "react-icons/fa";
import logo from "../../../assets/images/logo2.png";
import line from "../../../assets/images/qrcode.png";
import addfriend from "../../../assets/images/addfriend2.png";
import Image from "../../designLayouts/Image";
// import { paymentCard } from "../../../assets/images";
// import Image from "../../designLayouts/Image";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import './footer.css'

// const LineButton = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div
//       className="line-it-button"
//       data-lang="en"
//       data-type="friend"
//       data-env="REAL"
//       data-count="true"
//       data-home="true"
//       data-lineid="@lida426" /* เปลี่ยนจาก `data-lineId` เป็น `data-lineid` */
//       style={{ display: "none" }}
//     ></div>
//   );
// };

const Footer = () => {
  console.log("Footer component rendered");
  const handleAddFriend = () => {
    // รหัสสำหรับเพิ่มเพื่อนบน Line
    const lineFriendId = "lida426";
    // URL ของหน้าเพิ่มเพื่อนบน Line
    const lineAddFriendUrl = `https://line.me/R/ti/p/~${lineFriendId}`;
    // เปิดหน้าเพิ่มเพื่อนบน Line ในหน้าต่างใหม่
    window.open(lineAddFriendUrl, "_blank");
  };

  // const [emailInfo, setEmailInfo] = useState("");
  // const [setSubscription] = useState(false);
  // const [setErrMsg] = useState("");

  // const emailValidation = () => {
  //   return String(emailInfo)
  //     .toLocaleLowerCase()
  //     .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  // };

  // const handleSubscription = () => {
  //   if (emailInfo === "") {
  //     setErrMsg("Please provide an Email !");
  //   } else if (!emailValidation(emailInfo)) {
  //     setErrMsg("Please give a valid Email!");
  //   } else {
  //     setSubscription(true);
  //     setErrMsg("");
  //     setEmailInfo("");
  //   }
  // };
  return (
    <div className="w-full bg-[#154360] py-16">
      {/* <div className="w-full bg-[#F5F5F3] py-20"> */}
      {/* <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-10"> */}
      {/* <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-10"> */}
      <div className="mx-auto flex flex-wrap">
        {/* <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 gap-10"> */}
        <div className="w-1/3 col-span-1">
          {/* <div className="w-1/2"> */}
          {/* <FooterListTitle title="บริษัท นัท สตีล จำกัด (NAT STEEL CO.,LTD.)" /> */}
          <div className="flex items-center justify-center mt-20">
          <span className="flex items-center text-white">
            <h1 className="text-xl mb-4 kanit-semibold">
            บริษัท นัท สตีล จำกัด
            </h1>
            <h1 className="text-xl mb-4 nunito-extrabold ml-1">
              (NAT STEEL CO.,LTD.)
            </h1>
            </span>
            <Link to="/">
              <Image
                className="w-[50px] mb-3 ml-3 object-cover image-container-hover"
                imgSrc={logo}
              />
            </Link>
          </div>
          <a href="https://maps.app.goo.gl/7a94sQmJc9e4uD9e7">
            <div className="flex justify-center">
              {/* <p className="kanit-semibold text-white text-center">
                ที่อยู่ :
              </p> */}
              <p className="kanit-medium text-white text-center hover:text-[#ff9800]">
                <span className="kanit-semibold">ที่อยู่ :</span> เลขที่ 11/5
                หมู่ที่ 2 ตำบลพงตึก <br />
                อำเภอท่ามะกา จังหวัดกาญจนบุรี 71120 <br />
              </p>
            </div>
          </a>
          <p className="kanit-medium text-white mt-5 text-center">
            <span className="kanit-semibold">เวลาทำการ :</span> จันทร์ - เสาร์
            เวลา 08:00 น. - 17:00 น.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-10 md:mb-0 flex justify-center duration-300">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNATSTEELTH&tabs=timeline&width=400&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="350"
            height="350"
            // className="cursor-pointer"
            style={{ border: "7px solid #D0D3D4", boxShadow: "0 0 24px rgba(255, 255, 255, 0.3)", overflow: "hidden", borderRadius: "24px" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="w-full md:w-1/3 mb-10 md:mb-0 flex justify-center">
          {/* <div className="col-span-1 pl-32"> */}
          {/* <div className="col-span-1 mb-10 md:mb-0 footer-bottom"> */}
          <ul className="flex flex-col gap-5">
            {/* <h3 className="flex items-center font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">ฝ่ายขาย</h3> */}
            {/* <li className="flex items-center text-white hover:text-white decoration-[1px] decoration-gray-500 underline-offset-2 duration-300">
              <span className="rounded-full bg-gray-200 mr-5 p-2 flex items-center justify-center">
                <FaClock />
              </span>
              <span className="kanit-medium">
                จันทร์ - เสาร์ เวลา 08:00 น. - 17:00 น.
              </span>
            </li> */}
            {/* <a href="https://maps.app.goo.gl/7a94sQmJc9e4uD9e7"> */}
            {/* <Image
              className="w-[100px] mb-3 object-cover border-[10px] border-white"
              imgSrc={line}
            /> */}
            <p className="kanit-semibold text-white text-xl mt-4">
              ช่องทางการติดต่อ
            </p>
            {/* <div
      className="line-it-button"
      data-lang="en"
      data-type="friend"
      data-env="REAL"
      data-count="true"
      data-home="true"
      data-lineId="@lida426"
      style={{ display: "none" }}
    ><LineButton /></div> */}
            {/* <div className="w-[100px] h-[100px] mt-2 overflow-hidden border-[10px] border-white rounded-xl">
                <Image className="w-full h-full object-cover" imgSrc={line} />
              </div> */}
            <li className="flex items-center text-white hover:text-[#ff9800] duration-300">
              <div className="relative">
                <div className="w-[100px] h-[100px] overflow-hidden border-[10px] border-white rounded-xl">
                  <Image className="w-full h-full object-cover" imgSrc={line} />
                </div>
                <div className="absolute top-[24px] left-[120px] flex flex-col items-center justify-center">
                  <p className="nunito-bold text-sm">ID : lida426</p>
                  <div
                    className="w-[80px] h-[80px] cursor-pointer image-container-hover"
                    onClick={() => handleAddFriend()}
                  >
                    <Image imgSrc={addfriend} />
                  </div>
                </div>
              </div>
            </li>

            {/* </a> */}
            <Link to="/contact">
              <li className="flex items-center text-white hover:text-[#ff9800] decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                <span className="rounded-full text-[#ff9800] bg-gray-200 p-2 mr-5 flex items-center justify-center">
                  <FaEnvelope />
                </span>
                <span className="nunito-bold">
                  EMAIL : natsteel.2013@gmail.com
                </span>
              </li>
            </Link>
            <li className="flex items-center text-white decoration-[1px] decoration-gray-500 underline-offset-2 duration-300">
              {/* <span>ฝ่ายขาย</span> */}
              <span className="rounded-full text-[#ff9800] bg-gray-200 p-2 mr-5 flex items-center justify-center">
                <FaMobile />
              </span>
              {/* <span>คุณจุฑามาศ เพ็งวงษ์ : 085-903-0698 , คุณณัฐพล หงวนไธสง : 081-760-3348</span> */}
              <span className="nunito-bold">
                091-426-9654 , 085-903-0698 , 081-760-3348
              </span>
            </li>
            <li className="flex items-center text-white decoration-[1px] decoration-gray-500 underline-offset-2 duration-300">
              <span className="rounded-full text-[#ff9800] bg-gray-200 p-2 mr-5 flex items-center justify-center">
                <FaFax />
              </span>
              <span className="nunito-bold">FAX : 034-541-106</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
