import React from "react";
import {
  เหล็กปลอกเสาปลอกคาน,
  ปลอกเสาปลอกคาน,
  ลวดตาข่ายทอ,
  ลวดหนาม,
  ตาข่ายกรงไก่3,
  ตะปู,
  ตะแกรงกรงไก่2,
  กรงไก่,
} from "../../../assets/images/index";
import "../../../assets/font.css";
import "./BestSellers.css"; // นำเข้าไฟล์ CSS
import Image from "../../designLayouts/Image";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { bestSellers } from "../../../constants";
import { allproduct } from "../../../constants";
import "../../../pages/About/About.css";
// import B1 from "../../../assets/images/banner/กิ๊บลวดหนาม5.png";
// import B2 from "../../../assets/images/banner/ปลอกเสาสี่เหลี่ยม5.png";
// import B3 from "../../../assets/images/banner/ปลอกเสาสามเหลี่ยม5.png";
// import B4 from "../../../assets/images/banner/ลวดหนาม5.png";
// import B5 from "../../../assets/images/banner/เสาเอ็น7.png";
// import B6 from "../../../assets/images/banner/ลวดตาข่ายทอ5.png";
// import B7 from "../../../assets/images/banner/ตาข่ายสาน6.png";
// import seller from "../../../assets/images/banner/seller.png";
// import Product from "../../home/Products/Product";
// import B1 from "../../../assets/images/products/bestSeller/กิ๊บลวดหนาม31.png";
// import B2 from "../../../assets/images/products/bestSeller/ปลอกสี่เหลี่ยม.png";
// import B3 from "../../../assets/images/products/bestSeller/ปลอกสามเหลี่ยม.png";
// import B4 from "../../../assets/images/products/bestSeller/ลวดหนาม2.png";
// import B5 from "../../../assets/images/products/bestSeller/เสาเอ็นทับหลัง.png";
// import B6 from "../../../assets/images/products/bestSeller/ลวดตาข่ายทอ.png";
// import B7 from "../../../assets/images/products/bestSeller/ตาข่ายสาน3.png";
import seller from "../../../assets/images/banner/seller.png";

// function Items({ currentItems }) {
//   const navigate = useNavigate();

//   const handleNavigate = (productName) => {
//     navigate(`/product/${productName.toLowerCase().split(" ").join("")}`);
//   };

//   return (
//     <>
//       {currentItems.map((item) => (
//         <div key={item._id} onClick={() => handleNavigate(item.productName)}>
//           <Product
//             _id={item._id}
//             img={item.img}
//             productName={item.productName}
//             price={item.price}
//             color={item.color}
//             badge={item.badge}
//             pdf={item.pdf}
//             link={item.link}
//             hideButtons={item.hideButtons}
//           />
//         </div>
//       ))}
//     </>
//   );
// }

const products = [
  // { id: "1", img: เหล็กปลอกเสาปลอกคาน, name: "Steel Coils" },
  {
    id: "1",
    img: ปลอกเสาปลอกคาน,
    name: "เหล็กปลอก ทุกชนิด Bender wire",
    link: "/category1",
  },
  {
    id: "2",
    img: ลวดตาข่ายทอ,
    name: "ตาข่ายทอ chain link",
    link: "/category2",
  },
  { id: "3", img: ลวดหนาม, name: "ลวดหนาม Barbed wire", link: "/category3" },
  { id: "4", img: กรงไก่, name: "ลวดตาข่ายต่างๆ", link: "/category4" },
  { id: "5", img: ตะปู, name: "สินค้าทั่วไป", link: "/category5" },
];

// const B = [
//   {
//     id: "6",
//     img: B1,
//     name: "กิ๊บลวดหนาม",
//     // link: "/category5"
//   },
//   {
//     id: "7",
//     img: B2,
//     name: "ปลอกสี่เหลี่ยม",
//     // link: "/category5"
//   },
//   {
//     id: "8",
//     img: B3,
//     name: "ปลอกสามเหลี่ยม",
//     // link: "/category5"
//   },
//   {
//     id: "9",
//     img: B4,
//     name: "ลวดหนาม",
//     // link: "/category5"
//   },
//   {
//     id: "10",
//     img: B5,
//     name: "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป",
//     // link: "/category5"
//   },
//   {
//     id: "11",
//     img: B6,
//     name: "ลวดตาข่ายทอ",
//     // link: "/category5"
//   },
//   {
//     id: "12",
//     img: B7,
//     name: "ตาข่ายสาน",
//     // link: "/category5"
//   },
// ];

const BestSellers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  // const handleNavigate = (name, id, img) => {
  // const item = allproduct;
  // const handleNavigate = (item) => {
  //   // navigate(
  //   //   `/product/${(item.name.toLowerCase().split(" ").join("")
  //   //   )}`,
  //   //   {
  //   //     state: {
  //   //       // _id: item._id,
  //   //       // img: item.img,
  //   //       // productName: item.name,
  //   //       item: item,
  //   //     },
  //   //   }
  //   // );
  //   navigate(
  //     `/product/${item.productName.toLowerCase().split(" ").join("")}`,
  //     {
  //       state: {
  //         item: item,
  //       },
  //     }
  //   )
  // };

  // const handleNavigate = (item) => {
  //   const product = allproduct.find(p => item.productName === item.name);
  //   if (product) {
  //     navigate(`/product/${product.productName.toLowerCase().replace(/ /g, "")}`, {
  //     // navigate(`/product/${item.productName.toLowerCase().split(" ").join("")}`,
  //     // {
  //       state: { item: product },
  //     });
  //   }
  // };

  const handleNavigate = (item) => {
    console.log("Item:", item); // ตรวจสอบค่า item ที่ถูกส่งเข้ามา
    const product = allproduct.find((p) => p.productName === item.productName);
    console.log("Product:", product); // ตรวจสอบค่า product ที่ได้จากการค้นหา
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
            // fontWeight: "500",
            fontSize: "3rem",
            textAlign: "center",
            margin: "0", // เพิ่ม margin: 0 เพื่อลบระยะห่างเปล่าที่กำหนดไว้เริ่มต้น
          }}
        >
          Best Seller
        </h1>
        {/* <Image imgSrc={seller} className={"ml-5"} /> */}
        {/* เพิ่มกำหนดระยะห่างด้วย marginLeft */}
      </div>
      {/* <div className="ml-20"> */}
      {/* <span className="image-container">
        <Image imgSrc={B1} className="image-container-hover" />
        <Image imgSrc={B2} className="image-container-hover" />
        <Image imgSrc={B3} className="image-container-hover" />
        <Image imgSrc={B4} className="image-container-hover" />
        <Image imgSrc={B5} className="image-container-hover" />
        <Image imgSrc={B6} className="image-container-hover" />
        <Image imgSrc={B7} className="image-container-hover" />
      </span> */}
      <span className="image-container">
        {/* {B.map((item) => (
          <div
            key={item._id}
            onClick={() => handleNavigate(item.name, item._id, item.img)}
          >
            <Image imgSrc={item.img} className="image-container-hover" />
          </div>
        ))} */}
        {/* {bestSellers.map((item) => (
          <div key={item.id} onClick={() =>
            navigate(
              `/product/${item.name.toLowerCase().split(" ").join("")}`,
              {
                state: {
                  item: item,
                },
              }
            )
          }> */}
        <div className="flex justify-center mt-5">
  {bestSellers.map((item) => (
    <div
      key={item.id}
      className="flex flex-col items-center justify-center m-4 cursor-pointer transition duration-300 hover:scale-105"
      onClick={() => handleNavigate(item)}
      style={{ width: "150px", textAlign: "center" }}
    >
      <Image imgSrc={item.img} className="w-full h-auto mb-2" />
      <p className="kanit-medium text-shadow text-[#E22021]">{item.productName}</p>
    </div>
  ))}
</div>

      </span>
      {/* <div key={item._id} className="w-full">
        {B.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            img={product.img}
            name={product.name}
            link={product.link}
          />
        ))}
      </div> */}
      {/* <div key={item._id} className="w-full">
        {bestSellers.map((product) => (
          <Product key={item.id} _id={item.id} img={item.img} name={item.name} link={item.link} />
        ))}
      </div> */}
      {/* </div> */}
      <h1
        className="kanit-medium mt-20 ml-10"
        style={{
          // fontFamily: "Prompt",
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
              <p
                className="product-name kanit-medium"
                // style={{
                //   color: "#154360",
                // }}
              >
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
