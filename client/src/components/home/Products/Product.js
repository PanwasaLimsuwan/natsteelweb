import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
// import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart } from "../../../redux/orebiSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { cat1 } from "../../../constants";
import "../../../assets/font.css";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const [isHovered, setIsHovered] = useState(false);

  // const [totlaQuantity , setTotalQuantity] = useState("");
  // const [totalAmt, setTotalAmt] = useState("");
  // const products = useSelector((state) => state.orebiReducer.products);
  // useEffect(() => {
  //   let price = 0;
  //   products.map((item) => {
  //     price += item.price * item.quantity;
  //     return price;
  //   });
  //   setTotalAmt(price);
  // }, [products]);

  // useEffect(() => {
  //   let quantity = 0;
  //   products.map((item) => {
  //     quantity += item.quantity;
  //     return quantity;
  //   });
  //   setTotalQuantity(quantity);
  // }, [products]);

  // const rootId = idString(_id);
  // const [wishList, setWishList] = useState([]);
  // const navigate = useNavigate();
  // const productItem = props;

  // const handleProductClick = () => {
  //   navigate(`/product/${_id}`, { state: { productName, img, price, color, badge } });
  //   // navigate(`/product/${_id}`, { state: { props } });
  // };

  // const handleProductClick = () => {
  //   // ใช้ navigate เพื่อเปลี่ยนหน้า โดยส่ง state ที่มีข้อมูลของสินค้าไปด้วย
  //   // navigate(`/product-details/${props.productName}`, { state: { props } });
  //   navigate(`/product-details/${props.productName}`, { state: { props } });
  // };

  // const items = cat1;

  // const handleProductDetails = () => {
  //   navigate(`/product/${rootId}`, {
  //     state: {
  //       item: productItem,
  //     },
  //   });
  // };

  // const handleWishList = () => {
  //   toast.success("Product add to wish List");
  //   setWishList(wishList.push(props));
  //   console.log(wishList);
  // };
  return (
    // <div className="w-full relative group">
    <div
      className="w-full relative group shadow-xl border rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }} // Apply scale transform on hover
    >
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        {/* <div onClick={handleProductDetails}> */}
        {/* <div className="product" onClick={handleProductClick}> */}
        {/* <div
          onClick={() =>
            navigate(
              `/product/${props.productName.toLowerCase().split(" ").join("")}`,
              {
                state: {
                  props: props,
                },
              }
            )
          }
        > */}
        <Image
          className="w-full h-[250px] cursor-pointer"
          imgSrc={props.img}
          alt={props}
        />
        {/* </div> */}
        {/* <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div> */}
        {/* <div className="w-full h-24 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
          {<ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r"> */}
        {/* <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li> */}
        {/* <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    // badge: props.badge,
                    // price: props.price,
                    // colors: props.color,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li> */}
        {/* <li
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li> */}
        {/* <li
              onClick={handleWishList}
              className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li> */}
        {/* </ul>}
          </div> */}
      </div>
      <div
        className="max-w-80 max-h-28 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <div
          className="flex items-center justify-center font-titleFont"
          // style={{
          //   backgroundColor: "#f0f0f0"
          // }}
        >
          <h2
            // style={{
            //   color: "#154360",
            //   cursor: "pointer"
            // }}
            className="text-lg kanit-medium cursor-pointer mt-5"
            style={{ color: isHovered ? "#ff9800" : "#154360" }} // Change color on hover
            // Apply hover effect
            // onMouseOver={(e) => e.target.style.color = "#ff9800"} // Change color on hover
            // onMouseOut={(e) => e.target.style.color = "#154360"}   // Revert color when not hovered
          >
            {props.productName}
          </h2>
          {/* <Link to={props.link}>
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            ดูเพิ่มเติม
          </button>
        </Link> */}
          {/* <button
            style={{
              backgroundColor: "black" /* Green background '#4CAF50' ,
              border: "none" /* No borders ,
              color: "white" /* White text ,
              padding: "10px 12px" /* Padding around the text ,
              textAlign: "center" /* Centered text ,
              textDecoration: "none" /* No underline ,
              display: "inline-block" /* Fit the content width ,
              fontSize: "13px" /* Text size ,
              margin: "4px 2px" /* Margin around the button ,
              cursor: "pointer" /* Pointer cursor on hover ,
              borderRadius: "4px" /* Rounded corners ,
            }}
          >
            ดูเพิ่มเติม
          </button> */}
        </div>
        {/* <Link to={props.link}>
          <button className="mt-5 w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            ดูเพิ่มเติม
          </button>
        </Link> */}
        
        {/* {!props.hideButtons && (
          <div>
            <Link to={props.link}>
              <button className="mt-5 w-36 h-10 bg-primeColor text-white rounded hover:bg-black duration-300">
                ดูเพิ่มเติม
              </button>
            </Link>
          </div>
        )} */}
        {/* <p className="text-[#767676] text-[14px]">ดูเพิ่มเติม</p> */}
        {/* <p className="mt-5 text-[#767676] text-[14px]">
          {props.description}
          {props.des2}
        </p> */}

        {/* <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
