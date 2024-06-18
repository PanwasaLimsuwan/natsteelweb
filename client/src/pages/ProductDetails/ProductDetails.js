import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          {/* <Breadcrumbs title={productInfo.productName} /> */}
          <Breadcrumbs title="" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full xl:col-span-2">
            <Link to="/shop">
              <FaArrowLeft className="text-[#154360] text-4xl ml-5 mt-5 cursor-pointer hover:text-[#ff9800]" />
            </Link>
            <img
              className="w-full h-full "
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
