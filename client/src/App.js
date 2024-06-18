import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import C1 from "./pages/Shop/C1";
import C2 from "./pages/Shop/C2";
import C3 from "./pages/Shop/C3";
import C4 from "./pages/Shop/C4";
import C5 from "./pages/Shop/C5";
import Quotation from "./components/Quotation/Quotation";

const Layout = () => {
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
    <Route forceRefresh={true}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/category1" element={<C1 />}></Route>
        <Route path="/category2" element={<C2 />}></Route>
        <Route path="/category3" element={<C3 />}></Route>
        <Route path="/category4" element={<C4 />}></Route>
        <Route path="/category5" element={<C5 />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/quotation" element={<Quotation />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/product/:productName" element={<ProductDetails />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}
// }

export default App;
