import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../../assets/font.css";
import { FaEnvelope, FaFax, FaMobile } from "react-icons/fa";
import logo from "../../../assets/images/logo2.png";
import line from "../../../assets/images/qrcode.png";
import addfriend from "../../../assets/images/addfriend2.png";
import FB from "../../../assets/images/FB.png";
import Image from "../../designLayouts/Image";

const FacebookPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.FB.XFBML.parse(); // เมื่อโหลด Component นี้ให้ทำการ parse XFBML
    }
  }, []);
};

const Footer = () => {
  const handleAddFriend = () => {
    // รหัสสำหรับเพิ่มเพื่อนบน Line
    const lineFriendId = "lida426";
    // URL ของหน้าเพิ่มเพื่อนบน Line
    const lineAddFriendUrl = `https://line.me/R/ti/p/~${lineFriendId}`;
    // เปิดหน้าเพิ่มเพื่อนบน Line ในหน้าต่างใหม่
    window.open(lineAddFriendUrl, "_blank");
  };

  return (
    <div className="w-full bg-[#154360] py-16">
      <div className="mx-auto flex flex-wrap">
        {/* ส่วนทางซ้าย */}
        <div className="w-full md:w-1/2 lg:w-1/3 md:px-4 mb-10 md:mb-0">
          <div className="flex items-center justify-center mt-10 md:mt-20">
            <span className="flex items-center text-white">
              <h1 className="text-xl mb-4 kanit-semibold">
                บริษัท นัท สตีล จำกัด
              </h1>
              <h1 className="text-xl mb-4 nunito-extrabold md:ml-1">
                (NAT STEEL CO.,LTD.)
              </h1>
            </span>
            <Link to="/">
              <Image
                className="w-[50px] mb-3 md:ml-3 object-cover image-container-hover"
                imgSrc={logo}
              />
            </Link>
          </div>
          <a
            href="https://maps.app.goo.gl/7a94sQmJc9e4uD9e7"
            target="_blank" // เพื่อให้เปิดลิงก์ในหน้าต่างใหม่
          >
            <div className="flex justify-center">
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
        {/* ส่วนทางกลาง */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 md:mb-0 flex justify-center duration-300">
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            {/* <iframe
            title="facebook"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNATSTEELTH&tabs=timeline&width=400&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="350"
            height="350"
            style={{ border: "7px solid #D0D3D4", boxShadow: "0 0 24px rgba(255, 255, 255, 0.3)", overflow: "hidden", borderRadius: "24px" }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe> */}

            {/* <blockquote
            cite="https://www.facebook.com/NATSTEELTH"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/NATSTEELTH"><Image imgSrc={FB} /></a>
          </blockquote> */}
            <blockquote cite="https://www.facebook.com/NATSTEELTH">
              <a
                href="https://www.facebook.com/NATSTEELTH"
                target="_blank" // เพื่อให้เปิดลิงก์ในหน้าต่างใหม่
                rel="noopener noreferrer" // เพื่อป้องกันปัญหาความปลอดภัย
                style={{
                  display: "block",
                  textDecoration: "none",
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  border: "7px solid #D0D3D4",
                  boxShadow: "0 0 24px rgba(255, 255, 255, 0.3)",
                  overflow: "hidden",
                  borderRadius: "24px",
                }}
              >
                <img
                  src={FB}
                  alt="Facebook Profile"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </a>
            </blockquote>
          </div>
        </div>
        {/* ส่วนทางขวา */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-10 md:mb-0 flex justify-center">
          <ul className="flex flex-col gap-5">
            <p className="kanit-semibold text-white text-xl mt-4">
              ช่องทางการติดต่อ
            </p>
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
              <span className="rounded-full text-[#ff9800] bg-gray-200 p-2 mr-5 flex items-center justify-center">
                <FaMobile />
              </span>
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
