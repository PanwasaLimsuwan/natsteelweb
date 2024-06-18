import React, { useState } from "react";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
import { cat4 } from "../../../constants";
import { useNavigate } from "react-router-dom";

const items = cat4;

function Items({ currentItems, selectedBrands, selectedCategories }) {
  // Filter items based on selected brands and categories
  const filteredItems = currentItems.filter((item) => {
    const isBrandSelected =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) => brand.title === item.brand);

    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => category.title === item.cat);

    return isBrandSelected && isCategorySelected;
  });

  const navigate = useNavigate();
  const encodedProductName = encodeURIComponent(items.productName);

  return (
    <>
      {filteredItems.map((item) => (
        <div
        key={item._id}
          onClick={() =>
            navigate(
              `/product/${encodedProductName.toLowerCase().split(" ").join("")}`,
              {
                state: {
                  item: item,
                },
              }
            )
          }
        >
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              link={item.link}
            />
          </div>
        </div>
      ))}
    </>
  );
}

const Cat4 = ({ itemsPerPage }) => {
  const [itemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const selectedBrands = useSelector(
    (state) => state.orebiReducer.checkedBrands
  );
  const selectedCategories = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          currentItems={currentItems}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
        />{" "}
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
      </div>
    </div>
  );
};

export default Cat4;
