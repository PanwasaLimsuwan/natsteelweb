import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import เหล็กนั่งร้าน1 from "../../assets/images/products/เหล็กนั่งร้าน1.png";

const ProductDetails = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    // ตรวจสอบว่า location.state และ location.state.item มีค่าที่ถูกต้อง
    if (location.state.item) {
      setProductInfo(location.state.item);
    }
  }, [location]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4 pt-10">
        <div className="xl:-mt-10 -mt-7">
          {/* <Breadcrumbs title={productInfo.productName} /> */}
          <Breadcrumbs title="" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4">
          <div className="h-full xl:col-span-2">
            <Link to="/shop">
              <FaArrowLeft className="text-[#154360] text-4xl ml-5 mt-5 cursor-pointer hover:text-[#ff9800]" />
            </Link>
            {/* <div className="flex mt-5"> */}
            <img
              className="w-full max-h-[375px] mb-10 ml-5 mt-5 rounded-xl"
              // className="w-[300px] h-[300px]"
              src={productInfo.img}
              alt={productInfo.img}
            />
            {/* {productInfo.img2 && (
                <img
                  className="w-[300px] h-[400px]"
                  src={productInfo.img2}
                  alt={productInfo.img2}
                />
              )} */}
            {/* </div> */}
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        {/* <div className="bg-gray-100 flex justify-center items-center p-10"> */}
        {productInfo.productName === "เหล็กนั่งร้าน" && (
          <>
            <hr className="w-full border-[3px] border-[#ff9800] shadow-2xl" />
            <div className="bg-gray-100 flex flex-col justify-center items-center p-10 md:flex-row md:p-20">
              <img
                className="w-full max-w-[400px] h-auto rounded-lg shadow-2xl"
                src={เหล็กนั่งร้าน1}
                alt={เหล็กนั่งร้าน1}
              />
              <div className="flex flex-col mt-10 md:mt-0 md:ml-20 gap-4">
                <p className="kanit-medium text-xl text-[#154360] text-shadow">
                  เหล็กนั่งร้าน 1 ชุด ประกอบไปด้วย
                </p>
                <p className="kanit-medium ml-5 text-[#154360] text-shadow">
                  1.ขาตั้ง 1219x1700 mm. <br />
                  2.กากบาท 1829x1219x2198 mm. <br />
                  3.ฝาครอบ 1080x1829 mm. <br />
                  4.ข้อต่อ
                </p>
                <h1 className="text-4xl mt-10 kanit-medium text-[#154360]">
                  สนใจติดต่อ
                </h1>
                <p className="kanit-medium text-[#ff9800] text-shadow">
                  line : @lida426 <br />
                  Tel : 091-426-9654 , 085-903-0698 , 081-760-3348
                </p>
              </div>
            </div>
          </>
        )}
        {productInfo.img2 && (
          <>
            <hr className="w-full border-[3px] border-[#ff9800] shadow-2xl" />
            <div className="bg-gray-100 flex flex-col justify-center items-center p-10 md:flex-row md:p-20">
              <img
                className="w-full max-w-[400px] h-auto"
                src={productInfo.img2}
                alt={productInfo.img2}
              />
              <div className="flex flex-col mt-10 md:mt-0 md:ml-16 gap-4">
                <img
                  className="w-full max-w-[300px] h-auto rounded-lg shadow-2xl"
                  src={productInfo.img3}
                  alt={productInfo.img3}
                />
                <img
                  className="w-full max-w-[300px] h-auto mt-5 rounded-lg shadow-2xl"
                  src={productInfo.img4}
                  alt={productInfo.img4}
                />
              </div>
              <div className="flex flex-col mt-10 md:mt-0 md:ml-16 gap-4">
                <h1 className="text-4xl kanit-medium text-[#154360]">
                  สนใจติดต่อ
                </h1>
                <p className="kanit-medium text-[#ff9800] text-shadow">
                  line : @lida426 <br />
                  Tel : 091-426-9654 , 085-903-0698 , 081-760-3348
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;