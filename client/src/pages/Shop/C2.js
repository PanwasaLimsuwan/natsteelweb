import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Cat2 from "../../components/pageProps/shopPage/Cat2";
// import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
// import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
// import Category from "../../components/pageProps/shopPage/shopBy/Category";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const C2 = () => {
  const [itemsPerPage] = useState(48);
  // const itemsPerPageFromBanner = (itemsPerPage) => {
  //   setItemsPerPage(itemsPerPage);
  // };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="ตาข่ายทอ chain link" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          {/* <ShopSideNav /> */}
          <div className="w-full flex flex-col gap-6">
            {/* <Category icons={false} /> */}
            {/* <Brand /> */}
            {/* <Color /> */}
            {/* <Price /> */}
          </div>
        </div>
        <Link to="/">
          <FaArrowLeft className="text-[#154360] text-4xl mr-10 cursor-pointer hover:text-[#ff9800]" />
        </Link>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          {/* <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} /> */}
          <Cat2 itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default C2;
