import React from "react";
import {
  ปลอกเสาปลอกคาน2,
  ลวดตาข่ายทอ2,
  ลวดหนาม,
  ตะปู,
  กรงไก่,
} from "../../../assets/images/index";
import "../../../assets/font.css";
import "./BestSellers.css"; // นำเข้าไฟล์ CSS
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { bestSellers } from "../../../constants";
import { allproduct } from "../../../constants";
import "../../../pages/About/About.css";

const products = [
  {
    id: "1",
    img: ปลอกเสาปลอกคาน2,
    name: "เหล็กปลอกทุกชนิด Bender wire",
    link: "/category1",
  },
  {
    id: "2",
    img: ลวดตาข่ายทอ2,
    name: "ตาข่ายทอ chain link",
    link: "/category2",
  },
  { id: "3",
    img: ลวดหนาม,
    name: "ลวดหนาม Barbed wire",
    link: "/category3"
  },
  { id: "4",
    img: กรงไก่,
    name: "ลวดตาข่ายต่างๆ",
    link: "/category4"
  },
  { id: "5",
    img: ตะปู,
    name: "สินค้าทั่วไป",
    link: "/category5"
  },
];

const BestSellers = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const { state } = location;

  const handleNavigate = (item) => {
    const product = allproduct.find((p) => p.productName === item.productName);
    if (product) {
      navigate(
        `/product/${product.productName.toLowerCase().replace(/ /g, "")}`,
        {
          state: { item: product },
        }
      );
    }
  };

  return (
    <div className="best-sellers mt-24">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          className="seymour-one-regular text-shadow"
          style={{
            color: "#E22021",
            fontSize: "3rem",
            textAlign: "center",
            margin: "0", // เพิ่ม margin: 0 เพื่อลบระยะห่างเปล่าที่กำหนดไว้เริ่มต้น
          }}
        >
          Best Seller
        </h1>
      </div>
      <div className="image-container">
        <div className="flex justify-center flex-wrap mt-5">
  {bestSellers.map((item) => (
    <div
      key={item._id}
      className="flex flex-col items-center justify-center m-4 cursor-pointer transition duration-300 hover:scale-105"
      onClick={() => handleNavigate(item)}
      style={{ width: "150px", textAlign: "center" }}
    >
      <Image imgSrc={item.img} className="w-full h-auto mb-2" />
      <p className="kanit-medium text-shadow text-[#E22021]">{item.productName}</p>
    </div>
  ))}
</div>

      </div>
      <h1
        className="kanit-medium mt-20 ml-10"
        style={{
          color: "#154360",
          fontWeight: "500",
          fontSize: "2.25rem",
          textAlign: "left",
        }}
      >
        ประเภทสินค้า
      </h1>
      <div className="grid-container mt-5 mb-20">
        {products.map((product) => (
          <a key={product.id} href={product.link} className="product-link">
            <div className="product-card">
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
              <p className="product-name kanit-medium">
                {product.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
