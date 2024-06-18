import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import logo from "../../assets/images/logo.jpg";
import office from "../../assets/images/office.JPG";
import logofish from "../../assets/images/ปลาคู่.jpg";
import i1 from "../../assets/images/industry5.jpg";
import i2 from "../../assets/images/industry3.jpg";
import Image from "../../components/designLayouts/Image";
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
    "ตาข่ายสานหยิก (ตาข่ายตัวหนอน) , ตาข่ายสี่เหลียม (กรงไก่)",
    "ตาข่ายสี่เหลี่ยม (อาร์ค) , ตาข่ายรั้วแรงดึง (ตาข่ายถักปม)",
    "เหล็กปลอกเสาสามเหลี่ยม , เหล็กปลอกเสาสี่เหลี่ยม",
    "เหล็กปลอกเสา-ปลอกคาน , เหล็กเสาเอ็น-ทับหลัง สำเร็จรูป",
    "ลวดผูกเหล็ก , ลวดชุบสังกะสี , ลวดเหล็กตะปูรีดเย็น",
    "ตะปูตอกไม้ , กิ๊บล็อคลวดหนาม",
    "เหล็กวงบ่อ วงท่อ , เหล็กตัดหนวดกุ้ง",
    "ตะแกรงเหล็กฉีก , รั้วเหล็ก ไวร์เมช",
    "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)",
    "สังกะสีแผ่นเรียบ , เหล็กเพลทตัดสำเร็จ",
    "เหล็กจ๊อย (โดเวล) , เหล็ก 2 หุนลาย",
    "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)",
  ];

  return (
    <div>
      <div className="max-w-container mx-auto px-10 py-8 flex flex-wrap">
        <Breadcrumbs title="เกี่ยวกับบริษัท" />
        <div className="w-full md:w-1/2 pb-10 px-4 md:px-16">
          <h1 className="text-xl md:text-2xl mb-4">
            <span className="flex items-center text-[#154360]">
              <p className="kanit-semibold">บริษัท นัท สตีล จำกัด</p>
              <p className="nunito-bold md:ml-1">(NAT STEEL CO.,LTD.)</p>
              <Link to="/">
                <Image
                  className="w-8 md:w-10 md:ml-3 object-cover image-container-hover"
                  imgSrc={logo}
                  alt="Nat Steel Logo"
                />
              </Link>
            </span>
          </h1>
          <p className="kanit-medium text-lg md:text-xl text-[#154360] mt-2 md:mt-5 mb-3 md:mb-4">
            ผู้ผลิตและจำหน่าย
          </p>
          <ul className="kanit-regular text-sm md:text-base list-disc list-inside ml-4 mb-3 md:mb-4">
            {products.map((product, index) => (
              <li
                className="mb-1 md:mb-2 marker:text-[#ff9800] text-[#154360]"
                key={index}
              >
                {product}
              </li>
            ))}
          </ul>
          <Link to="/shop">
            <button className="mt-3 md:mt-5 w-full md:w-36 h-10 rounded-lg bg-[#154360] kanit-medium text-white hover:bg-[#ff9800] duration-300">
              ดูสินค้า
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            className="rounded-xl shadow-2xl"
            imgSrc={office}
            alt="Nat Steel Office"
          />
        </div>
      </div>
      <p
        className="text-center kanit-semibold mt-24 text-[#ff9800] text-shadow"
        style={{ fontSize: "1.75rem" }}
      >
        " หนึ่งในผู้ผลิตสินค้าป้อนสู่ตลาดวงการวัสดุก่อสร้างที่ได้มาตรฐาน
        และมีคุณภาพแห่งหนึ่งของประเทศไทย "
      </p>
      <div className="max-w-container mx-auto mb-12 md:mb-24 md:px-16 md:py-8 flex flex-wrap">
        <div className="w-full md:w-1/2 mt-24 md:px-10">
          <span className="flex">
            {/* <span className="flex flex-col md:flex-row md:space-x-4"> */}
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
            className="custom-banner-i2 rounded-lg shadow-2xl"
            imgSrc={i2}
          />
        </div>
        <div className="w-full px-10 mt-14 md:mt-28 lg:mt-56 md:w-1/2">
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
