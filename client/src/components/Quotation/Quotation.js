import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
// import "../Quotation/Quotation.css";
import { BsBorderBottom } from "react-icons/bs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "../../pages/Cart/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProductInfo from "../pageProps/productDetails/ProductInfo";
import "../../assets/font.css";
import "./Quotation.css";

const Quotation = (item) => {
  // const navigate = useNavigate();
  const [prevLocation, setPrevLocation] = useState("");
  const formRef = useRef(null);
  const location = useLocation();
  // const { ProductType } = location.state;
  // console.log("ProductType : ", ProductType);
  // const { Number, Unit } = location.state || {Number: "No number",Unit: "No unit",}; // Default values as fallback;
  // localStorage.setItem("Number", Number);
  // localStorage.setItem("Unit", Unit);

  // // เรียกข้อมูล
  // const savedNumber = localStorage.getItem("Number");
  // const savedUnit = localStorage.getItem("Unit");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalQuantity, setTotalQuantity] = useState("");
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  // const [productData, setProductData] = useState([]); // [ProductInfo]
  // เรียกข้อมูล
  // const savedNumber = localStorage.getItem("Number");
  // const savedUnit = localStorage.getItem("Unit");
  // const savedGauge = localStorage.getItem("Gauge");
  // const savedSize = localStorage.getItem("Size");
  // const savedDelivery = localStorage.getItem("Delivery");
  // const savedProductType = localStorage.getItem("ProductType");
  // const imageSrc = location.state?.imgSrc;
  // console.log("Product Image URL:", imageSrc);
  // console.log("Quotation des : ", savedProductType);
  // console.log("Product : ", products);
  // console.log(
  //   "Product : ",
  //   products.map((item) => item.name)
  // );
  // console.log("productName products : ", products && products.productName);
  // console.log("productName item : ", item.productName);

  const provinces = [
    "กระบี่",
    "กรุงเทพมหานคร",
    "กาญจนบุรี",
    "กาฬสินธุ์",
    "กำแพงเพชร",
    "ขอนแก่น",
    "จันทบุรี",
    "ฉะเชิงเทรา",
    "ชลบุรี",
    "ชัยนาท",
    "ชัยภูมิ",
    "ชุมพร",
    "เชียงราย",
    "เชียงใหม่",
    "ตรัง",
    "ตราด",
    "ตาก",
    "นครนายก",
    "นครปฐม",
    "นครพนม",
    "นครราชสีมา",
    "นครศรีธรรมราช",
    "นครสวรรค์",
    "นนทบุรี",
    "นราธิวาส",
    "น่าน",
    "บึงกาฬ",
    "บุรีรัมย์",
    "ปทุมธานี",
    "ประจวบคีรีขันธ์",
    "ปราจีนบุรี",
    "ปัตตานี",
    "พระนครศรีอยุธยา",
    "พะเยา",
    "พังงา",
    "พัทลุง",
    "พิจิตร",
    "พิษณุโลก",
    "เพชรบุรี",
    "เพชรบูรณ์",
    "แพร่",
    "ภูเก็ต",
    "มหาสารคาม",
    "มุกดาหาร",
    "แม่ฮ่องสอน",
    "ยโสธร",
    "ยะลา",
    "ร้อยเอ็ด",
    "ระนอง",
    "ระยอง",
    "ราชบุรี",
    "ลพบุรี",
    "ลำปาง",
    "ลำพูน",
    "เลย",
    "ศรีสะเกษ",
    "สกลนคร",
    "สงขลา",
    "สตูล",
    "สมุทรปราการ",
    "สมุทรสงคราม",
    "สมุทรสาคร",
    "สระแก้ว",
    "สระบุรี",
    "สิงห์บุรี",
    "สุโขทัย",
    "สุพรรณบุรี",
    "สุราษฎร์ธานี",
    "สุรินทร์",
    "หนองคาย",
    "หนองบัวลำภู",
    "อ่างทอง",
    "อำนาจเจริญ",
    "อุดรธานี",
    "อุตรดิตถ์",
    "อุทัยธานี",
    "อุบลราชธานี",
  ];

  useEffect(() => {
    if (location.state) {
      setPrevLocation(location.state.data);
    } else {
      setPrevLocation("Default value or handle error");
    }
  }, [location]);

  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [tel, setTel] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [company, setCompany] = useState("");
  const [province, setProvince] = useState("");
  const [branch, setBranch] = useState("");
  const [Address, setAddress] = useState("");
  const [productsData, setProductsData] = useState([]);
  // const formRef = useRef(null);

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errTel, setErrTel] = useState("");
  const [errMobile, setErrMobile] = useState("");
  const [errFax, setErrFax] = useState("");
  const [errCompany, setErrCompany] = useState("");
  const [errProvince, setErrProvince] = useState("");
  const [errBranch, setErrBranch] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errMessages, setErrMessages] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  // กลุ่มสินค้าตามชื่อและประเภท
  // const groupProducts = (products) => {
  //   const grouped = {};

  //   products.forEach((product) => {
  //     const key = `${product.name}-${product.ProductType}`;
  //     if (!grouped[key]) {
  //       grouped[key] = { ...product, quantity: 0 };
  //     }
  //     grouped[key].quantity += product.quantity;
  //   });

  //   return Object.values(grouped);
  // };

  // // การใช้งานในคอมโพเนนต์ Quotation
  // const groupedProducts = groupProducts(products);

  // Function to group products by type
  // const groupProductsByType = () => {
  //   const groupedProducts = {};
  //   products.forEach((product) => {
  //     const productType = product.ProductType;
  //     if (!groupedProducts[productType]) {
  //       groupedProducts[productType] = [];
  //     }
  //     groupedProducts[productType].push(product);
  //   });
  //   return groupedProducts;
  // };

  const handleName = (e) => {
    setclientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleTel = (e) => {
    setTel(e.target.value);
    setErrTel("");
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setErrMobile("");
  };
  const handleFax = (e) => {
    setFax(e.target.value);
    // setErrFax("");
  };
  const handleCompany = (e) => {
    setCompany(e.target.value);
    setErrCompany("");
  };
  const handleBranch = (e) => {
    setBranch(e.target.value);
    setErrBranch("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleProvince = (e) => {
    setProvince(e.target.value);
    setErrProvince("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    // setErrMessages("");
  };

  // const handleNavigate = () => {
  //   // navigate("/quotation", { number: Number, unit: Unit });
  //   navigate("/quotation", { state: { Number, Unit } });
  // };

  // ================= Email Validation start here =============
  // const ClientNameValidation = (clientName) => {
  //   return String(clientName)
  //     .toLowerCase()
  //     .match(/^[A-Za-zก-๙]+$/);
  // };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const TelValidation = (tel) => {
    return (
      String(tel)
        .toLowerCase()
        // .match(/^[0][0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/);
        .match(/^0[0-9]{9}$/)
    );
  };

  const MobileValidation = (mobile) => {
    return (
      String(mobile)
        .toLowerCase()
        // .match(/^[0][0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/);
        .match(/^0[0-9]{9}$/)
    );
  };

  const FaxValidation = (fax) => {
    return (
      String(fax)
        .toLowerCase()
        // .match(/^[0][0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/);
        .match(/[0-9-]{1,20}$/)
    );
  };

  // const ProvinceValidation = (province) => {
  //   return (
  //     String(province)
  //       .toLowerCase()
  //       // .match(/^[0][0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/);
  //       .match(/[A-Za-z][ก-ฮ][0-9]{20}$/)
  //   );
  // };

  // const AddressValidation = (Address) => {
  //   return String(Address)
  //     .toLowerCase()
  //     .match(/^[A-Za-zก-๙0-9]+$/);
  // };
  // ================= Email Validation End here ===============

  // const baseUrl = "http://localhost:3001";

  // const SendEmail = async () => {
  //   let dataSend = {
  //     clientName,
  //     email,
  //     tel,
  //     mobile,
  //     fax,
  //     company,
  //     province,
  //     branch,
  //     messages,
  //   };

  //   const res = await fetch(`${baseUrl}/quotation`, {
  //     method: "POST",
  //     body: JSON.stringify(dataSend),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         alert("Email sent successfully!");
  //       }
  //     })
  // };

  // ================= Send Email start here ===============
  // const SendEmail = (e) => {
  //   e.preventDefault();

  //   // const productsData = products.map((item) => ({
  //   //   productName: item.name,
  //   //   Number: item.Number,
  //   //   Unit: item.Unit,
  //   // }));
  //   // console.log("productName : ",item.name)
  //   // console.log("productsData : ",productsData)

  //   // const templateParams = {
  //   //   clientName,
  //   //   email,
  //   //   // products: JSON.stringify(productsData),
  //   //   tel,
  //   //   mobile,
  //   //   fax,
  //   //   company,
  //   //   province,
  //   //   messages,
  //   //   // productName: item.productName,
  //   //   // Unit: item.Unit,
  //   //   // Number: item.Number,
  //   //   productsData: productsData
  //   //     .map(
  //   //       (item) =>
  //   //         `สินค้า : ${item.productName} จำนวน : ${item.Number} หน่วย : ${item.Unit}`
  //   //     )
  //   //     .join("\n"),
  //   // };
  //   // console.log("productsData : ", productsData);
  //   // console.log("productName : ",item.productName);
  //   emailjs
  //     .sendForm(
  //       "service_1elhhfb",
  //       "template_13cy5n3",
  //       // e.target,
  //       formRef.current,
  //       "pfVA7svaamKwJhJIM"
  //       // templateParams
  //       // ).then(res=>{
  //       //     console.log(res);
  //       // }).catch(err => console.log(err))
  //     )
  //     .then((res) => {
  //       console.log("Email successfully sent!");
  //       // setSuccessMsg(`ขอบคุณที่ติดต่อเรา คุณ${clientName} ข้อความของคุณได้ทำการส่งเรียบร้อยแล้ว เราจะรีบตอบกลับในภายหลังไปที่ ${email}.`);
  //     })
  //     .catch((err) => {
  //       console.error("Failed to send email:", err);
  //     });
  // };

  // const handlePost = (e) => {
  //   e.preventDefault();
  //   if (!clientName) {
  //     setErrClientName("กรุณากรอกชื่อ-นามสกุล");
  //   }
  //   if (!email) {
  //     setErrEmail("กรุณากรอกอีเมล");
  //   } else {
  //     if (!EmailValidation(email)) {
  //       setErrEmail("กรุณากรอกอีเมล");
  //     }
  //   }
  //   if (!mobile) {
  //     setErrMobile("กรุณากรอกเบอร์โทรศัพท์");
  //   } else {
  //     if (!MobileValidation(tel)) {
  //       setErrMobile("กรุณากรอกเบอร์โทรศัพท์");
  //     }
  //   }
  //   if (!tel) {
  //     setErrTel("กรุณากรอกเบอร์โทรศัพท์");
  //   } else {
  //     if (!TelValidation(tel)) {
  //       setErrTel("กรุณากรอกเบอร์โทรศัพท์");
  //     }
  //   }
  //   if (!fax) {
  //     setErrFax("กรุณากรอกเบอร์โทรศัพท์");
  //   } else {
  //     if (!FaxValidation(tel)) {
  //       setErrFax("กรุณากรอกเบอร์โทรศัพท์");
  //     }
  //   }
  //   if (!province) {
  //     setErrProvince("กรุณากรอกชื่อจังหวัด");
  //   }
  //   if (!company) {
  //     setErrCompany("กรุณากรอกชื่อหน่วยงาน");
  //   }
  //   if (!branch) {
  //     setErrBranch("กรุณากรอกสาขา");
  //   }
  //   if (
  //     clientName &&
  //     email &&
  //     EmailValidation(email) &&
  //     tel &&
  //     TelValidation(tel) &&
  //     mobile &&
  //     MobileValidation &&
  //     fax &&
  //     FaxValidation &&
  //     company &&
  //     branch &&
  //     province &&
  //     ProvinceValidation
  //   ) {
  //     SendEmail(e);
  //     setSuccessMsg(
  //       `ขอบคุณที่ติดต่อเรา คุณ${clientName}  ข้อความของคุณได้ทำการส่งเรียบร้อยแล้ว เราจะรีบตอบกลับในภายหลังไปที่ ${email}.`
  //     );
  //   }
  // };

  // const handlePost = async (e) => {
  //   e.preventDefault();

  //   // เริ่มต้นด้วยการรีเซ็ตข้อผิดพลาดทั้งหมดเป็นค่าเริ่มต้น
  //   setErrClientName("");
  //   setErrEmail("");
  //   setErrMobile("");
  //   setErrTel("");
  //   setErrFax("");
  //   setErrProvince("");
  //   setErrCompany("");
  //   setErrBranch("");

  // if (products.length === 0) {
  //   alert("กรุณาเพิ่มสินค้าในรายการก่อนส่งคำขอ");
  //   return;
  // }

  // // ตรวจสอบข้อมูลที่กรอกในแต่ละฟิลด์
  // if (!clientName) {
  //   setErrClientName("กรุณากรอกชื่อ-นามสกุล");
  // }
  // if (!email) {
  //   setErrEmail("กรุณากรอกอีเมล");
  // } else if (!EmailValidation(email)) {
  //   setErrEmail("กรุณากรอกอีเมลให้ถูกต้อง");
  // }
  // if (!mobile) {
  //   setErrMobile("กรุณากรอกเบอร์โทรศัพท์มือถือ");
  // } else if (!MobileValidation(mobile)) {
  //   setErrMobile("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้อง");
  // }
  // if (!tel) {
  //   setErrTel("กรุณากรอกเบอร์โทรศัพท์");
  // } else if (!TelValidation(tel)) {
  //   setErrTel("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
  // }
  // if (!fax) {
  //   setErrFax("กรุณากรอกหมายเลขแฟกซ์");
  // } else if (!FaxValidation(fax)) {
  //   setErrFax("กรุณากรอกหมายเลขแฟกซ์ให้ถูกต้อง");
  // }
  // if (!province) {
  //   setErrProvince("กรุณาเลือกจังหวัด");
  // }
  // if (!company) {
  //   setErrCompany("กรุณากรอกชื่อหน่วยงาน");
  // }
  // if (!branch) {
  //   setErrBranch("กรุณากรอกสาขา");
  // }

  //   // หากข้อมูลถูกต้องทั้งหมด จะทำการส่งอีเมล
  //   if (
  //     clientName &&
  //     email &&
  //     EmailValidation(email) &&
  //     tel &&
  //     TelValidation(tel) &&
  //     mobile &&
  //     MobileValidation(mobile) &&
  //     fax &&
  //     FaxValidation(fax) &&
  //     company &&
  //     branch &&
  //     province &&
  //     ProvinceValidation(province)
  //   ) {
  //     try {
  //       const response = await fetch(`http://localhost:3001/sendEmail`, {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name : clientName,
  //           email : email,
  //           tel : tel,
  //           Mobile : mobile,
  //           Fax : fax,
  //           Company : company,
  //           province : province,
  //           branch : branch,
  //           messages : messages,
  //           products : products,
  //         }),
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const responseData = await response.text(); // เพื่อรับข้อมูล response ในรูปแบบข้อความ
  //       if (response.ok) {
  //         // การจัดการเมื่อสำเร็จ
  //         console.log('ส่งใบคำร้องสำเร็จ');
  //       } else {
  //         // การจัดการเมื่อไม่สำเร็จ
  //         console.error('เกิดข้อผิดพลาดในการส่งใบคำร้อง');
  //       }
  //     } catch (error) {
  //       console.error('เกิดข้อผิดพลาดในการส่งใบคำร้อง', error);
  //     }
  //   }
  //   else {
  //     // หากข้อมูลไม่ถูกต้อง ให้แสดงข้อความเตือน
  //     alert("กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง");
  //   }
  // };

  const handlePost = (e) => {
    let hasError = false;
    e.preventDefault(); // Prevent form submission

    if (products.length === 0) {
      alert("กรุณาเพิ่มสินค้าในรายการก่อนส่งคำขอ");
      return;
    }

    // ตรวจสอบข้อมูลที่กรอกในแต่ละฟิลด์
    if (!clientName) {
      setErrClientName("กรุณากรอกชื่อ-นามสกุล");
      hasError = true;
    }
    //  else if (!ClientNameValidation(clientName)) {
    //   setErrClientName("กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง");
    //   hasError = true;
    // }
    if (!email) {
      setErrEmail("กรุณากรอกอีเมล");
      hasError = true;
    } else if (!EmailValidation(email)) {
      setErrEmail("กรุณากรอกอีเมลให้ถูกต้อง");
      hasError = true;
    }
    if (!tel) {
      setErrTel("กรุณากรอกเบอร์โทรศัพท์");
      hasError = true;
    } else if (!TelValidation(tel)) {
      setErrTel("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
      hasError = true;
    }
    if (!mobile) {
      setErrMobile("กรุณากรอกเบอร์โทรศัพท์มือถือ");
      hasError = true;
    } else if (!MobileValidation(mobile)) {
      setErrMobile("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้อง");
      hasError = true;
    }
    // if (!fax) {
    //   setErrFax("กรุณากรอกหมายเลขแฟกซ์");
    //   hasError = true;
    // } else if (!FaxValidation(fax)) {
    //   setErrFax("กรุณากรอกหมายเลขแฟกซ์ให้ถูกต้อง");
    //   hasError = true;
    // }
    if (!FaxValidation) {
      setErrFax("กรุณากรอกหมายเลขแฟกซ์ให้ถูกต้อง");
      hasError = true;
    }
    if (!province) {
      setErrProvince("กรุณาเลือกจังหวัด");
      hasError = true;
    }
    if (!company) {
      setErrCompany("กรุณากรอกชื่อหน่วยงาน");
      hasError = true;
    }
    if (!branch) {
      setErrBranch("กรุณากรอกสาขา");
      hasError = true;
    }
    if (!Address) {
      setErrAddress("กรุณากรอกที่อยู่");
      hasError = true;
    }  
    //   else if (!AddressValidation(Address)) {
    //     setErrAddress("กรุณากรอกเบอร์โทรศัพท์มือถือให้ถูกต้อง");
    //     hasError = true;
    // }

    // หากมีข้อมูลที่ไม่ถูกต้องหรือไม่ครบถ้วนจะไม่ส่งคำขอไปยังเซิร์ฟเวอร์
    // if (!clientName || !email || !mobile || !tel || !fax || !province || !company || !branch) {
    //   return;
    // }
    if (!hasError) {
      // ส่งข้อมูล
      const formData = {
        clientName,
        email,
        tel,
        mobile,
        fax,
        company,
        branch,
        province,
        Address,
        messages,
        productsData: products.map((item) => ({
          productName: item.name,
          Number: item.Number,
          Unit: item.Unit,
          wiresize: item.wiresize,
          barbedsize: item.barbedsize,
          clipsize: item.clipsize,
          nailsize: item.nailsize,
          coil: item.coil,
          customsize: item.customsize,
          gauge: item.gauge,
          delivery: item.delivery,
          ProductType: item.ProductType,
          // ProductType: item.ProductType,
        })),
      };
      // Replace 'YOUR_API_ENDPOINT' with your actual endpoint URL
      fetch("http://localhost:3001/Quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("ส่งคำใบคำร้องสําเร็จ");
          // Reset the form and cart after successful submission
          dispatch(resetCart());
          setclientName("");
          setEmail("");
          setTel("");
          setMobile("");
          setFax("");
          setCompany("");
          setBranch("");
          setProvince("");
          setAddress("");
          setMessages("");
          setProductsData([]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="max-w-container mx-auto flex flex-wrap">
      <Breadcrumbs title="ข้อมูลผู้ติดต่อ" />
      {/* <div className="flex flex-row w-full"> */}
      <div className="w-1/2 pl-10">
        {successMsg ? (
          <p className="pb-20 font-medium text-green-500 text-xl">
            {successMsg}
          </p>
        ) : (
          // <form ref={formRef} className="pb-20">
          <form ref={formRef} className="pb-20">
            {/* <h1 className="font-titleFont font-semibold text-3xl">
            ติดต่อ / สอบถาม
          </h1> */}
            {/* <input
              type="hidden"
              name="productName"
              value={products.map(item => item.name)}
            />
            <input
              type="hidden"
              name="Number"
              value={products.map(item => item.Number)}
            />
            <input
              type="hidden"
              name="Unit"
              value={products.map(item => item.Unit)}
              // value={products.map(item => `<li>${item.name} - Quantity: ${item.Number}, Unit: ${item.Unit}</li>`).join('')}
              // value={encodeURIComponent(products.map(item => `<li>${item.name} - Quantity: ${item.Number}, Unit: ${item.Unit}</li>`).join(''))}
            /> */}
            <input
              type="hidden"
              name="productsData"
              value={
                products.map((item) => {
                  if (item.name === "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)" || item.name === "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)") {
                    // return {
                      // productName: item.name,
                      // ProductType: item.ProductType,
                      // wiresize: item.wiresize,
                      // gauge: item.gauge,
                      // coil: item.coil,
                      // Number: item.Number,
                      // Unit: item.Unit,
                      // delivery: item.delivery,

                      return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ตา : ${item.gauge} ขนาด(ต่อม้วน) : ${item.coil} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                    // };
                  } 
                  // else if (item.name === "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)") {
                  //   return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ตา : ${item.gauge} ขนาด(ต่อม้วน) : ${item.coil} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  // }
                  else if (item.name === "ตาข่ายสี่เหลี่ยม (กรงไก่)") {
                    return `สินค้า : ${item.name} ประเภท : ${item.ProductType} ขนาดลวด : ${item.wiresize} ตา : ${item.gauge} ขนาด(ต่อม้วน) : ${item.coil} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  else if (item.name === "ลวดหนาม") {
                    return `สินค้า : ${item.name} น้ำหนัก(กิโลกรัม/ขด) : ${item.barbedsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  else if (item.name === "กิ๊บลวดหนาม") {
                    return `สินค้า : ${item.name} ความยาว : ${item.clipsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  else if (item.name === "ปลอกเสา-ปลอกคาน") {
                    return `สินค้า : ${item.name} ประเภท : ${item.ProductType} ขนาดลวด : ${item.wiresize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  else if (item.name === "ปลอกสามเหลี่ยม") {
                    return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  else if (item.name === "ปลอกสี่เหลี่ยม") {
                    return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  else if (item.name === "ตะปูตอกไม้") {
                    return `สินค้า : ${item.name} ขนาดตะปู : ${item.nailsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  else if (item.name === "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป") {
                    return `สินค้า : ${item.name} ประเภท : ${item.ProductType} ขนาดลวด : ${item.wiresize} ตา : ${item.gauge} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  else if (item.name === "รั้วแรงดึง (ตาข่ายถักปม)") {
                    return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ตา : ${item.gauge} ขนาด(ต่อม้วน) : ${item.coil} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`
                  }
                  //   else {
                  //   // return {
                  //     // productName: item.name,
                  //     // Number: item.Number,
                  //     // Unit: item.Unit,
                  //     return`สินค้า : ${item.name} ประเภท : ${item.ProductType} จำนวน : ${item.Number} หน่วย : ${item.Unit}`
                  //   // };
                  // }
                })
              }
            />
            {/* `สินค้า : ${item.name} ประเภท : ${item.ProductType} จำนวน : ${item.Number} หน่วย : ${item.Unit}` */}

            <div className="kanit-medium text-[#154360] w-[500px] pl-10 h-auto py-6 flex flex-col gap-6">
              {/* <div className="kanit-medium"> */}
              <div>
                {/* <label>Name</label> */}
                <p className="kanit-medium px-2">ชื่อ-นามสกุล</p>
                <input
                  name="name"
                  onChange={handleName}
                  value={clientName}
                  maxLength={40}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="text"
                  placeholder="กรุณากรอกชื่อ-นามสกุล"
                />
                {errClientName && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Email</label> */}
                <p className="kanit-medium px-2">อีเมล</p>
                <input
                  name="email"
                  onChange={handleEmail}
                  // onSubmit={SendEmail}
                  value={email}
                  maxLength={40}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="email"
                  placeholder="กรุณากรอกอีเมล"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Tel</label> */}
                <p className="kanit-medium px-2">เบอร์ติดต่อ</p>
                <input
                  name="Tel"
                  onChange={handleTel}
                  value={tel}
                  maxLength={10}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="tel"
                  placeholder="กรุณากรอกเบอร์ติดต่อ"
                />
                {errTel && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errTel}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Tel</label> */}
                <p className="kanit-medium px-2">เบอร์โทรศัพท์มือถือ</p>
                <input
                  name="Mobile"
                  onChange={handleMobile}
                  value={mobile}
                  maxLength={10}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="tel"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
                {errMobile && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errMobile}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Tel</label> */}
                <p className="kanit-medium px-2">FAX</p>
                <input
                  name="Fax"
                  onChange={handleFax}
                  value={fax}
                  maxLength={20}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="tel"
                  placeholder="กรุณากรอกหมายเลขแฟกซ์"
                />
                {/* {errFax && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errFax}
                  </p>
                )} */}
              </div>
              <div>
                {/* <label>Tel</label> */}
                <p className="kanit-medium px-2">หน่วยงาน</p>
                <input
                  name="Company"
                  onChange={handleCompany}
                  value={company}
                  maxLength={50}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="text"
                  placeholder="กรุณากรอกชื่อหน่วยงาน"
                />
                {errCompany && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errCompany}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Tel</label> */}
                <p className="kanit-medium px-2">สาขา</p>
                <input
                  name="branch"
                  onChange={handleBranch}
                  value={branch}
                  maxLength={50}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="text"
                  placeholder="กรุณากรอกสาขา"
                />
                {errBranch && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errBranch}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Tel</label> */}
                <p className="kanit-medium px-2">ที่อยู่</p>
                <input
                  name="Address"
                  onChange={handleAddress}
                  value={Address}
                  maxLength={50}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="text"
                  placeholder="กรุณากรอกที่อยู่"
                />
                {errAddress && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errAddress}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Tel</label> */}
                <p className="kanit-medium px-2">จังหวัด</p>
                <select
                  name="province"
                  onChange={handleProvince}
                  value={province}
                  maxLength={30}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  // type="text"
                  placeholder="กรุณากรอกชื่อจังหวัด"
                >
                  <option value="" style={{ color: "GrayText" }}>
                    -- เลือกรายการ --
                  </option>
                  {provinces.map((province) => (
                    // <option value="">เลือก</option>
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
                </select>
                {errProvince && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errProvince}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Messages</label> */}
                <p className="kanit-medium px-2">หมายเหตุ</p>
                <textarea
                  name="message"
                  onChange={handleMessages}
                  value={messages}
                  maxLength={1000}
                  cols="30"
                  rows="6"
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800] resize-none"
                  type="text"
                  placeholder="กรุณากรอกข้อความ"
                ></textarea>
                {/* {errMessages && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errMessages}
                </p>
              )} */}
              </div>
              </div>
              <button
                onClick={handlePost}
                // type="submit"
                // value={send}
                // onClick={SendEmail}
                className="w-36 h-14 ml-44 kanit-medium text-lg text-white bg-[#154360] rounded-lg font-semibold hover:bg-[#ff9800] hover:text-white duration-200"
              >
                ส่งใบคำร้อง
              </button>
            {/* </div> */}
          </form>
        )}
        {/* </div> */}
      </div>
      <div className="w-1/2 mt-10">
        {/* <div className="col-span-1 pl-80 py-10"> */}
        {products.length > 0 ? (
          <div className="pb-20">
            <div className="w-full h-20 bg-[#F5F7F7] kanit-medium text-[#154360] hidden lgl:grid grid-cols-3 place-content-center text-lg">
              <h2 className="pl-8">รายการสินค้า</h2>
              {/* <h2>Price</h2> */}
              <h2 className="pl-72">จำนวน</h2>
              {/* <h2>Sub Total</h2> */}
              <h2 className="pl-44">หน่วย</h2>
            </div>
            {/* -------------------------------------- */}
            <div className="mt-5">
              {products.map((item) => (
                <div key={item._id}>
                  <ItemCard
                    item={item}
                    Number={item.Number}
                    Unit={item.Unit}
                    wiresize={item.wiresize}
                    barbedsize={item.barbedsize}
                    clipsize={item.clipsize}
                    gauge={item.guage}
                    coil={item.coil}
                    customsize={item.customsize}
                    delivery={item.delivery}
                    ProductType={item.ProductType}
                  />
                </div>
              ))}
            </div>
            {/* Render products by type */}
            <button
              onClick={() => dispatch(resetCart())}
              className="kanit-medium py-3 px-4 bg-red-500 rounded-xl text-white font-semibold uppercase mb-4 hover:bg-red-700 hover:text-[#E74C3C] duration-300"
            >
              ล้างรายการ
            </button>

            <Link to="/shop">
              <button
                // onClick={() => '/shop'}
                className="kanit-medium ml-5 py-3 px-5 bg-green-500 rounded-xl text-white font-semibold uppercase mb-4 hover:bg-green-700 hover:text-[#2ECC71] duration-300"
              >
                เพิ่มสินค้า
              </button>
            </Link>

            {/* <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
              <div className="flex items-center gap-4">
                <input
                  className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                  type="text"
                  placeholder="Coupon Number"
                />
                <p className="text-sm mdl:text-base font-semibold">
                  Apply Coupon
                </p>
              </div>
              <p className="text-lg font-semibold">Update Cart</p>
            </div> */}
            <div className="w-full gap-4 flex justify-end mt-4">
              <div className=" flex flex-col gap-4">
                <h1 className="text-2xl kanit-medium text-right text-[#154360]">
                  รายการขอใบเสนอราคา
                </h1>
                <div>
                  {/* <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Subtotal
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${totalAmt}
                    </span>
                  </p> */}
                  {/* Number: {Number}, Unit: {Unit} */}
                  <p className="flex items-center kanit-medium text-[#154360] justify-between border-[5px] border-[#ff9800] py-1.5 text-lg px-4">
                    จำนวนรายการ
                    <span className="kanit-medium text-[#ff9800] tracking-wide">
                      {/* {item} */}
                      {products.length}
                    </span>
                  </p>
                  {/* <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                    Shipping Charge
                    <span className="font-semibold tracking-wide font-titleFont">
                      ${shippingCharge}
                    </span>
                  </p> */}
                  {/* <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                    Total
                    <span className="font-bold tracking-wide text-lg font-titleFont">
                      ${totalAmt + shippingCharge}
                    </span>
                  </p> */}
                </div>
                {/* <div className="flex justify-end">
                  <Link to="/paymentgateway">
                    <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
          >
            <div>
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src={emptyCart}
                alt="emptyCart"
              />
            </div>
            <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-xl shadow-xl">
              <h1 className="kanit-medium text-xl text-[#154360] uppercase">
                ไม่มีสินค้า
              </h1>
              {/* <p className="text-sm text-center px-10 -mt-2">
                Your Shopping cart lives to serve. Give it purpose - fill it
                with books, electronics, videos, etc. and make it happy.
              </p> */}
              <Link to="/shop">
                <button className="kanit-medium bg-[#154360] w-34 rounded-xl cursor-pointer hover:bg-[#ff9800] hover:text-white px-8 py-2 text-lg text-white duration-300">
                  เลือกสินค้า
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Quotation;
