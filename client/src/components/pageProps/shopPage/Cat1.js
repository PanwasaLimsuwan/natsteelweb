import React, { useState } from "react";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
import { cat1 } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const items = cat1;

function Items({ currentItems, selectedBrands, selectedCategories }) {
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

  return (
    <>
      {filteredItems.map((item) => (
        <div
          key={item._id}
          onClick={() =>
            navigate(
              `/product/${item.productName.toLowerCase().split(" ").join("")}`,
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

const Cat1 = ({ itemsPerPage }) => {
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
      {/* <Link to="/">
          <FaArrowLeft className="text-[#154360] text-4xl mr-10 cursor-pointer hover:text-[#ff9800]" />
        </Link> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          currentItems={currentItems}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
        />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center"></div>
    </div>
  );
};

export default Cat1;
