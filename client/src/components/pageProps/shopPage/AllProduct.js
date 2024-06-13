import React, { useState } from "react";
// import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
import { allproduct } from "../../../constants";
import { useNavigate } from "react-router-dom";

const items = allproduct;

function Items({ currentItems, selectedBrands, selectedCategories, item }) {
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
  // const productName = item.productName;
  // const encodedProductName = encodeURIComponent(items.productName);
{/* <Link to={`/product/${encodedProductName}`}>View Product</Link> */}
  return (
    <>
      {filteredItems.map((item) => (
        // <Product key={item._id} {...item} />
        <div
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
            description={item.description}
            link={item.link}            
            hideButtons={item.hideButtons}
          />
          </div>
        </div>
      ))}
    </>
  );
}

const AllProduct = ({ itemsPerPage }) => {
  const [itemOffset] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // // const items = useSelector((state) => state.products.allProducts);
  // const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const selectedBrands = useSelector(
    (state) => state.orebiReducer.checkedBrands
  );
  const selectedCategories = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );
  // const pageCount = Math.ceil(items.length / itemsPerPage);

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   const newStart = newOffset + 1; // Adjust the start index

  //   setItemOffset(newOffset);
  //   setItemStart(newStart);
  // };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          currentItems={currentItems}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
        />{" "}
      </div>
    </div>
  );
};

export default AllProduct;
