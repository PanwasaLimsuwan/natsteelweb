import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import logo from "../../assets/images/logo.jpg";
import office from "../../assets/images/office.JPG";
import logofish from "../../assets/images/ปลาคู่.jpg";
import i1 from "../../assets/images/industry5.jpg";
// import i1 from "../../assets/images/industry8.png";
// import i2 from "../../assets/images/industry7.jpg";
import i2 from "../../assets/images/industry3.jpg";
import Image from "../../components/designLayouts/Image";
// import '../../components/Banner/banner.css';
import "./About.css";
import "../../assets/font.css";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state) {
      setPrevLocation(location.state.data);
    } else {
      setPrevLocation("Default value or handle error");
    }
  }, [location]);

  const products = [
    "ลวดหนาม , ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)",
    // "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)",
    "ตาข่ายสานหยิก (ตาข่ายตัวหนอน) , ตาข่ายสี่เหลียม (กรงไก่)",
    // "ตาข่ายสี่เหลียม (กรงไก่)",
    "ตาข่ายสี่เหลี่ยม (อาร์ค) , ตาข่ายรั้วแรงดึง (ตาข่ายถักปม)",
    // "ตาข่ายรั้วแรงดึง (ตาข่ายถักปม)",
    // "เหล็กปลอกเสา-ปลอกคาน",
    "เหล็กปลอกเสาสามเหลี่ยม , เหล็กปลอกเสาสี่เหลี่ยม",
    // "เหล็กปลอกเสาสี่เหลี่ยม",
    "เหล็กปลอกเสา-ปลอกคาน , เหล็กเสาเอ็น-ทับหลัง สำเร็จรูป",
    "ลวดผูกเหล็ก , ลวดชุบสังกะสี , ลวดเหล็กตะปูรีดเย็น",
    "ตะปูตอกไม้ , กิ๊บล็อคลวดหนาม",
    "เหล็กวงบ่อ วงท่อ , เหล็กตัดหนวดกุ้ง",
    "ตะแกรงเหล็กฉีก , รั้วเหล็ก ไวร์เมช",
    "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)",
    "สังกะสีแผ่นเรียบ , เหล็กเพลทตัดสำเร็จ",
    // "เหล็กตัดหนวดกุ้ง",
    "เหล็กจ๊อย (โดเวล) , เหล็ก 2 หุนลาย",
    // "เหล็ก 2 หุนลาย",
    // "รั้วเหล็ก ไวร์เมช",
    "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)",
    // "เหล็กเพลทตัดสำเร็จ",
    // "กิ๊บล็อคลวดหนาม",
    // "ลวดชุบสังกะสี",
  ];

  // const products = [
  //   "ตาข่ายทอ (ถัก)",
  //   "ตาข่ายสาน",
  //   "ตาข่ายกรงไก่",
  //   "ลวดหยิก",
  //   "ลวดหนาม",
  //   "ลวดเหล็ก",
  //   "ลวดผูกเหล็ก",
  //   "กิ๊บลวดหนาม",
  //   "ลวดชุบสังกะสี",
  //   "ลวดเหล็กตัดตรง",
  //   "เสาเอ็น-ทับหลัง สำเร็จรูป",
  //   "เหล็กรูป",
  //   "เหล็กเส้น",
  //   "เหล็กวงบ่อ",
  //   "เหล็กปลอกเสาเล็ก",
  //   "เหล็กเพลทตัดสำเร็จตามขนาด",
  //   "เหล็กปลอกเสา-ปลอกคาน (สั่งทำตามขนาดได้)",
  //   "ตะแกรงเหล็กสำเร็จรูป (ไวร์เมช) ฯลฯ",
  //   "ตะปูตอกไม้",
  // ];

  return (
    <div>
      <div className="max-w-container mx-auto px-10 py-8 flex flex-wrap">
        <Breadcrumbs title="เกี่ยวกับบริษัท" />
        <div className="w-full w-1/2 pb-10 px-16">
           <h1 className="text-2xl mb-4">
            <span className="flex items-center text-[#154360]">
              <p className="kanit-semibold">
              บริษัท นัท สตีล จำกัด  
              </p>
              <p className="nunito-bold ml-1">
              (NAT STEEL CO.,LTD.)
              </p>
              <Link to="/">
                <Image
                  className="w-10 ml-3 object-cover image-container-hover"
                  imgSrc={logo}
                  alt="Nat Steel Logo"
                />
              </Link>
            </span>
          </h1>
          {/* <p className="kanit-medium mt-5 text-[#ff9800]">
          " หนึ่งในผู้ผลิตสินค้าป้อนสู่ตลาดวงการวัสดุก่อสร้างที่ได้มาตรฐาน และมีคุณภาพแห่งหนึ่งของประเทศไทย "
        </p> */}
          <p className="kanit-medium text-xl text-[#154360] mt-5 mb-4">
            ผู้ผลิตและจำหน่าย
          </p>
          <ul className="kanit-regular text-sm list-disc list-inside ml-4 mb-4">
            {products.map((product, index) => (
              <li
                className="mb-2 marker:text-[#ff9800] text-[#154360]"
                key={index}
              >
                {product}
              </li>
            ))}
          </ul>
          {/* <p className="kanit-medium mt-5 text-[#ff9800]">
          " หนึ่งในผู้ผลิตสินค้าป้อนสู่ตลาดวงการวัสดุก่อสร้างที่ได้มาตรฐาน และมีคุณภาพแห่งหนึ่งของประเทศไทย "
        </p> */}
          <Link to="/shop">
            <button className="mt-5 w-36 h-10 rounded-lg bg-[#154360] kanit-medium text-white hover:bg-[#ff9800] duration-300">
              ดูสินค้า
            </button>
          </Link>
        </div>
        <div className="w-full w-1/2">
          <Image
            className="rounded-xl shadow-2xl"
            imgSrc={office}
            alt="Nat Steel Office"
          />
          {/* Uncomment and adjust the iframe code below if needed */}
          {/* <iframe
          src="https://www.google.com/maps/embed/v1/place?q=บริษัท+นัท+สตีล+จำกัด+ตำบล+พงตึก+อำเภอท่ามะกา+กาญจนบุรี+ประเทศไทย&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          title="Google maps About"
          width="100%"
          height="300"
          style={{ border: "0", marginTop: "20px", borderRadius: "8px" }}
          loading="lazy"
          allowFullScreen
        ></iframe> */}
        </div>
      </div>
      <p
        className="text-center kanit-semibold mt-24 text-[#ff9800] text-shadow"
        style={{ fontSize: "1.75rem" }}
      >
        " หนึ่งในผู้ผลิตสินค้าป้อนสู่ตลาดวงการวัสดุก่อสร้างที่ได้มาตรฐาน
        และมีคุณภาพแห่งหนึ่งของประเทศไทย "
      </p>
      <div className="max-w-container mx-auto mb-24 px-16 py-8 flex flex-wrap">
        <div className="w-full w-1/2 mt-24 px-10">
          <span className="flex">
            <Image
              className="custom-banner-container rounded-lg shadow-2xl"
              imgSrc={logofish}
            />
            <Image
              className="custom-banner-container rounded-lg shadow-2xl"
              imgSrc={i1}
            />
          </span>
          <Image
            className="custom-banner-a rounded-lg shadow-2xl"
            imgSrc={i2}
          />
        </div>
        <div className="w-full w-1/2 mt-56 px-10">
          <h1 className="kanit-semibold text-[#154360] text-2xl md:text-4xl lg:text-5xl">
            ผลิตและจำหน่ายสินค้าเกรดดี <br />
            มีคุณภาพ ผ่านการ QC
          </h1>
          <p className="kanit-regular text-[#154360] text-lg mt-6 leading-[1.8]">
            มั่นใจในคุณภาพสินค้าด้วยประสบการณ์กว่า 10 ปี <br />
            ราคาคุ้มค่า บริการลูกค้าอย่างมืออาชีพพร้อมให้คำแนะนำ <br />
            จัดส่งสินค้ารวดเร็ว ทันใจ ทั่วประเทศ
          </p>
          <p className="kanit-medium text-[#ff9800] text-center text-xl mt-16 text-shadow">
            " เรามุ่งมั่นที่จะให้บริการอย่างรวดเร็วและมีประสิทธิภาพ <br />
            เพื่อให้ลูกค้าได้รับประสบการณ์และสินค้าที่ดีที่สุด "
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
