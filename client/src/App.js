import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Price from "./pages/price/Price";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import C1 from "./pages/Shop/C1";
import C2 from "./pages/Shop/C2";
import C3 from "./pages/Shop/C3";
import C4 from "./pages/Shop/C4";
import C5 from "./pages/Shop/C5";
import C6 from "./pages/Shop/C6";
import Quotation from "./components/Quotation/Quotation";
import { useEffect, useState } from "react";
import Axios from "axios";
import TestIcon from "./testIcon";
// import SomeComponent from "./SomeComponent";
// import SomeComponent from "./components/pageProps/productDetails/ProductInfo"

const Layout = () => {
  // const iconRef = useRef(null);
  // const productName = "ตาข่ายกรงไก่ (3/4\" 24#)";
  // const encodedProductName = encodeURIComponent(productName);
  // const productPath = encodeURIComponent(productName);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Link to={`/product/${encodedProductName}`}>View Product</Link> */}
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        {/* <Route path="/price" element={<Price />}></Route> */}
        <Route path="/TestIcon" element={<TestIcon />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/category1" element={<C1 />}></Route>
        <Route path="/category2" element={<C2 />}></Route>
        <Route path="/category3" element={<C3 />}></Route>
        <Route path="/category4" element={<C4 />}></Route>
        <Route path="/category5" element={<C5 />}></Route>
        <Route path="/category6" element={<C6 />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        <Route path="/quotation" element={<Quotation />}></Route>
        {/* <Route path="/quotation" element={<SomeComponent />}></Route> */}
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/category/:category" element={<Offer />}></Route>
        {/* <Route path="/product/:_id" element={<ProductDetails />}></Route> */}
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/product/:productName" element={<ProductDetails />} />
        {/* <Route path="/product/:productPath" element={<ProductDetails />} /> */}
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await Axios.get("http://localhost:3001/");
  //       console.log(res.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}
// }

export default App;
