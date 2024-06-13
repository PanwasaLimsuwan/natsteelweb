import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { ImPlus } from "react-icons/im";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../../redux/orebiSlice";
// import { NavDropdown } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import { useEffect } from "react";
import "../../../../assets/font.css";
import "./Category.css";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(true);

  // const Category = () => {
  //   const [expanded, setExpanded] = useState(false); // State to handle dropdown visibility

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

  // const toggleExpand = () => {
  //   setExpanded(!expanded); // Toggle dropdown open/close
  // };

  const category = [
    {
      _id: 9006,
      title: "เหล็กปลอก ทุกชนิด Bender wire",
      // title: "สินค้าประเภทลวดตาข่าย",
    },
    {
      _id: 9007,
      title: "ตาข่ายทอ chain link",
      // title: "สินค้าประเภทลวด",
    },
    {
      _id: 9008,
      title: "ลวดหนาม Barbed wire",
      // title: "สินค้าประเภทเหล็ก",
    },
    {
      _id: 9009,
      title: "ลวดตาข่ายต่างๆ",
      // title: "สินค้าประเภทตะแกรงเหล็ก",
    },
    {
      _id: 9010,
      title: "สินค้าทั่วไป",
      // title: "สินค้าประเภทตะปู",
    },
    // {
    //   _id: 9011,
    //   title: "สินค้าประเภทสำเร็จรูป",
    // },
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

  // const handleToggleCategory = (category) => {
  //   dispatch(toggleCategory(category.title)); // Dispatching by title
  // };

  return (
    <div className="w-full">
      <div
        onClick={() => setShowSubCatOne(!showSubCatOne)}
        className="cursor-pointer kanit-medium"
        style={{
          color: "#154360",
          // #ff9800
        }}
      >
        <NavTitle title="ประเภทสินค้า" icons={true} color="#154360" />
      </div>
      {/* {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colors.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
              >
                <span
                  style={{ background: item.base }}
                  className={`w-3 h-3 bg-gray-500 rounded-full`}
                ></span>
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )} */}
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
                    className="kanit-medium label cursor-pointer duration-300"
                    style={{
                      color: checkedCategorys.some((b) => b._id === item._id)
                        ? "#ff9800"
                        : "",
                    }}
                  >
                    {item.title}
                  </label>
                  {/* <input
                type="checkbox"
                id={item._id}
                checked={checkedCategorys.includes(item.title)} // Check based on title
                onChange={() => handleToggleCategory(item)}
              /> */}
                  {/* {item.title} */}
                  {/* {item.icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )} */}
                </li>
              ))}
              {/* <li onClick={() => console.log(checkedCategorys)}>test</li> */}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Category;
