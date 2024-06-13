import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import ShopCategory from "../../components/pageProps/shopPage/ShopCategory";
// import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
// import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";
import Category from "../../components/pageProps/shopPage/shopBy/Category";
import AllProduct from "../../components/pageProps/shopPage/AllProduct";
import Image from "../../components/designLayouts/Image";
import logofish from "../../assets/images/ปลาคู่.jpg";

const Shop = () => {
  const [itemsPerPage] = useState(48);
  // const itemsPerPageFromBanner = (itemsPerPage) => {
  //   setItemsPerPage(itemsPerPage);
  // };

  return (
    <div className="max-w-container mx-auto px-4">
      {/* <Image className="w-[70px] ml-36 object-cover" imgSrc={logofish} /> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div 
        style={{ marginRight: "10px" }}>
          {" "}
          {/* เพิ่มสไตล์นี้ให้กับ Breadcrumbs เพื่อปรับระยะห่าง */}
          <Breadcrumbs title="สินค้า" />
        </div>
        {/* <Image className="w-[80px]" imgSrc={logofish} /> */}
      </div>
      {/* <div className="max-w-container mx-auto px-4">
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    <Breadcrumbs title="สินค้า" style={{ marginRight: '10px' }} />
    <Image className="w-24 object-cover" imgSrc={logofish} />
  </div>
</div> */}

      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          {/* <ShopSideNav /> */}
          <div className="w-full flex flex-col gap-6">
            <Category icons={false} />
            {/* <Brand /> */}
            {/* <Color /> */}
            {/* <Price /> */}
          </div>
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          {/* <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} /> */}
          <AllProduct itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
