import React, { useState } from "react";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../../redux/orebiSlice";
import { motion } from "framer-motion";
import { useEffect } from "react";
import "../../../../assets/font.css";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(true);
  const checkedCategorys = useSelector(
    (state) => state.orebiReducer.checkedCategorys
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCategories = JSON.parse(
      localStorage.getItem("checkedCategorys") || "[]"
    );
    savedCategories.forEach((category) => {
      dispatch(toggleCategory(category));
    });
  }, [dispatch]);

  const category = [
    {
      _id: 1,
      title: "เหล็กปลอกทุกชนิด Bender wire",
    },
    {
      _id: 2,
      title: "ตาข่ายทอ chain link",
    },
    {
      _id: 3,
      title: "ลวดหนาม Barbed wire",
    },
    {
      _id: 4,
      title: "ลวดตาข่ายต่างๆ",
    },
    {
      _id: 5,
      title: "สินค้าทั่วไป",
    },
  ];

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));

    const updatedCheckedCategorys = checkedCategorys.includes(category)
      ? checkedCategorys.filter((c) => c._id !== category._id)
      : [...checkedCategorys, category];
    localStorage.setItem(
      "checkedCategorys",
      JSON.stringify(updatedCheckedCategorys)
    );
  };
  return (
    <div className="w-full">
      <div
        onClick={() => setShowSubCatOne(!showSubCatOne)}
        className="cursor-pointer kanit-medium"
        style={{
          color: "#154360",
        }}
      >
        <NavTitle title="ประเภทสินค้า" icons={true} color="#154360" />
      </div>
      <div>
        {showSubCatOne && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
              {category.map((item) => (
                <li
                  key={item._id}
                  className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:border-[#ff9800] duration-300"
                >
                  <input
                    type="checkbox"
                    id={item._id}
                    checked={checkedCategorys.some((b) => b._id === item._id)}
                    onChange={() => handleToggleCategory(item)}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor={item._id}
                    className="kanit-medium cursor-pointer duration-300"
                    style={{
                      color: checkedCategorys.some((b) => b._id === item._id)
                        ? "#ff9800"
                        : "",
                    }}
                  >
                    {item.title}
                  </label>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Category;
