import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { Link } from "react-router-dom";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "../../pages/ItemCard/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "../../assets/font.css";

const Quotation = (item) => {
  const [prevLocation, setPrevLocation] = useState("");
  const formRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);

  console.log(item.polesize);

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
  const [taxpayerId, setTaxpayerId] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [tel, setTel] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [company, setCompany] = useState("");
  const [province, setProvince] = useState("");
  const [branch, setBranch] = useState("");
  const [Address, setAddress] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [productsData, setProductsData] = useState([]);
  // const formRef = useRef(null);

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errTaxpayerId, setErrTaxpayerId] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errTel, setErrTel] = useState("");
  const [errMobile, setErrMobile] = useState("");
  const [errFax, setErrFax] = useState("");
  const [errCompany, setErrCompany] = useState("");
  const [errProvince, setErrProvince] = useState("");
  const [errBranch, setErrBranch] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errpostalCode, setErrpostalCode] = useState("");
  // const [errMessages, setErrMessages] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setclientName(e.target.value);
    setErrClientName("");
  };
  const handleTaxpayerId = (e) => {
    setTaxpayerId(e.target.value);
    setErrTaxpayerId("");
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
  const handlepostalCode = (e) => {
    setpostalCode(e.target.value);
    setErrpostalCode("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
  };

  // ================= Email Validation start here =============

  const ClientNameValidation = (clientName) => {
    return (
      String(clientName)
        .toLowerCase()
        // .match(/^[A-Za-zก-๙]+$/);
        .match(/^([A-Za-zก-๙]+(?:\s+[A-Za-zก-๙]+)+)$/)
    );
    // .match(/^[^\s]+( [\u0E00-\u0E7FA-Za-z]+)*$/);
  };

  const TaxpayerIdValidation = (taxpayerId) => {
    return String(taxpayerId)
      .toLowerCase()
      .match(/^[0-9]{13}$/);
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const TelValidation = (tel) => {
    return String(tel)
      .toLowerCase()
      .match(/^0[0-9]{9}$/);
  };

  const MobileValidation = (mobile) => {
    return String(mobile)
      .toLowerCase()
      .match(/^0[0-9]{9}$/);
  };

  const FaxValidation = (fax) => {
    return String(fax)
      .toLowerCase()
      .match(/[0-9-]{1,20}$/);
  };

  const postalCodeValidation = (postalCode) => {
    return String(postalCode)
      .toLowerCase()
      .match(/^[0-9]{5}$/);
  };

  const handlePost = async (e) => {
    let isValid = false;
    e.preventDefault(); // Prevent form submission

    if (products.length === 0) {
      alert("กรุณาเพิ่มสินค้าในรายการก่อนส่งคำขอ");
      return;
    }

    // ตรวจสอบข้อมูลที่กรอกในแต่ละฟิลด์
    if (!clientName) {
      setErrClientName("กรุณากรอกชื่อ-นามสกุล");
      isValid = true;
    } else if (!ClientNameValidation(clientName)) {
      setErrClientName("กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง");
      isValid = true;
    }
    if (!taxpayerId) {
      setErrTaxpayerId("กรุณากรอกเลขประจําตัวผู้เสียภาษี");
      isValid = true;
    } else if (!TaxpayerIdValidation(taxpayerId)) {
      setErrTaxpayerId("กรุณากรอกเลขประจําตัวผู้เสียภาษีให้ถูกต้อง");
      isValid = true;
    }
    if (!email) {
      setErrEmail("กรุณากรอกอีเมล");
      isValid = true;
    } else if (!EmailValidation(email)) {
      setErrEmail("กรุณากรอกอีเมลให้ถูกต้อง");
      isValid = true;
    }
    if (!tel) {
      setErrTel("กรุณากรอกเบอร์ติดต่อ");
      isValid = true;
    } else if (!TelValidation(tel)) {
      setErrTel("กรุณากรอกเบอร์ติดต่อให้ถูกต้อง");
      isValid = true;
    }
    if (!FaxValidation) {
      setErrFax("กรุณากรอกหมายเลขแฟกซ์ให้ถูกต้อง");
      isValid = true;
    }
    if (!province) {
      setErrProvince("กรุณาเลือกจังหวัด");
      isValid = true;
    }
    if (!company) {
      setErrCompany("กรุณากรอกชื่อหน่วยงาน");
      isValid = true;
    }
    if (!branch) {
      setErrBranch("กรุณากรอกสาขา");
      isValid = true;
    }
    if (!Address) {
      setErrAddress("กรุณากรอกที่อยู่");
      isValid = true;
    }
    if (!postalCode) {
      setErrpostalCode("กรุณากรอกรหัสไปรษณีย์");
      isValid = true;
    } else if (!postalCodeValidation(postalCode)) {
      setErrpostalCode("กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง");
      isValid = true;
    }
    if (!isValid) {
      // ส่งข้อมูล
      const formData = {
        clientName,
        taxpayerId,
        email,
        tel,
        // mobile,
        fax,
        company,
        branch,
        province,
        Address,
        postalCode,
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
          // coil: item.coil === "ระบุค่าเอง" ? item.customsize : item.coil, // ใช้ customsize ถ้า coil เป็น "ระบุค่าเอง"
          customsize: item.customsize,
          // customsize: item.customsize || "", // กำหนดค่า customsize
          // coilSize: item.coilSize,
          gauge: item.gauge,
          delivery: item.delivery,
          ProductType: item.ProductType,

          polesize: item.polesize,
          stirrupssize: item.stirrupssize,
          twohunsize: item.twohunsize,
          wiremeshsize1: item.wiremeshsize1,
          wiremeshsize2: item.wiremeshsize2,
          dowelsize: item.dowelsize,
          dowelsize2: item.dowelsize2,
          sheet: item.sheet,
          Panelheight: item.Panelheight,
          Panelwidth: item.Panelwidth,
          gabion1: item.gabion1,
          gabion2: item.gabion2,
          weight: item.weight,
        })),
      };
      try {
        const response = await fetch(
          // "http://localhost:3001/Quotation",
          "https://natsteelweb-1.onrender.com/Quotation",
          
          // "http://localhost:3000/Quotation",
          // "http://natsteel.co.th/Quotation",
          // "https://natsteelweb.onrender.com/Quotation",
          // "https://natsteelweb-1.onrender.com/Quotation",
          // "http://natsteel.co.th:3000/Quotation",
          // "https://natsteelweb-git-test-panwasa-limsuwans-projects.vercel.app/Quotation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) {
          throw new Error("เครือข่ายไม่ตอบสนอง");
        }
        const data = await response.json();
        alert("ส่งข้อมูลสําเร็จ");
        dispatch(resetCart());
        setclientName("");
        setTaxpayerId("");
        setEmail("");
        setTel("");
        // setMobile("");
        setFax("");
        setCompany("");
        setBranch("");
        setProvince("");
        setAddress("");
        setMessages("");
        setProductsData([]);
      } catch (error) {
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
      }
    }
  };

  return (
    <div className="max-w-container mx-auto flex flex-wrap">
      <Breadcrumbs title="ข้อมูลผู้ติดต่อ" />
      <div className="w-full md:w-1/2 md:pl-10">
        {successMsg ? (
          <p className="pb-20 font-medium text-green-500 text-xl">
            {successMsg}
          </p>
        ) : (
          <form ref={formRef} className="pb-20">
            <input
              type="hidden"
              name="productsData"
              value={products.map((item) => {
                if (
                  item.name === "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)" ||
                  item.name === "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)"
                ) {
                  const coilSize =
                    item.coil === "ระบุค่าเอง" ? item.customsize : item.coil;

                  return `สินค้า : ${item.name} 
                ขนาดลวด : ${item.wiresize} 
                ตา : ${item.gauge} 
                ขนาด(ต่อม้วน) : ${coilSize} 
                จำนวน : ${item.Number} 
                หน่วย : ${item.Unit} 
                วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ตาข่ายสี่เหลี่ยม (กรงไก่)") {
                  return `สินค้า : ${item.name} ประเภท : ${item.ProductType} ขนาดลวด : ${item.wiresize} ตา : ${item.gauge} ขนาด(ต่อม้วน) : ${item.coil} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ลวดหนาม") {
                  return `สินค้า : ${item.name} น้ำหนัก(กิโลกรัม/ขด) : ${item.barbedsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "กิ๊บลวดหนาม") {
                  return `สินค้า : ${item.name} ความยาว : ${item.clipsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)") {
                  return `สินค้า : ${item.name} ประเภท : ${item.ProductType} ขนาดลวด : ${item.wiresize} ขนาดปลอก : ${item.stirrupssize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)") {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ขนาดปลอก : ${item.stirrupssize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)") {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ขนาดปลอก : ${item.stirrupssize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ตะปูตอกไม้") {
                  return `สินค้า : ${item.name} ขนาดตะปู : ${item.nailsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป") {
                  return `สินค้า : ${item.name} ประเภท : ${item.ProductType} ขนาดลวด : ${item.wiresize} ตา : ${item.gauge} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "รั้วแรงดึง (ตาข่ายถักปม)") {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ตา : ${item.gauge} ขนาด(ต่อม้วน) : ${item.coil} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)") {
                  return `สินค้า : ${item.name} น้ำหนัก(กิโลกรัม/ขด) : ${item.barbedsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ลวดชุบสังกะสี") {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (
                  item.name === "เหล็กวงบ่อ" ||
                  item.name === "เหล็กวงท่อ"
                ) {
                  return `สินค้า : ${item.name} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ตะแกรงเหล็กฉีก") {
                  return `สินค้า : ${item.name} ขนาด(ต่อแผ่น) : ${item.sheet} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "เหล็กเพลทตัดสำเร็จ") {
                  return `สินค้า : ${item.name} ขนาด(ต่อแผ่น) : ${item.sheet} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (
                  item.name === "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)"
                ) {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ขนาดตกตะแกรง : ${item.gauge} ขนาด(ต่อม้วน) : ${item.wiremeshsize1}${item.wiremeshsize2} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "สังกะสีแผ่นเรียบ") {
                  const coilSize =
                    item.coil === "ระบุค่าเอง" ? item.customsize : item.coil;
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ขนาด(ต่อม้วน) : ${coilSize}  จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "เหล็กตัด หนวดกุ้ง") {
                  return `สินค้า : ${item.name} ความยาว : ${item.dowelsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "เหล็กจ๊อย (โดเวล)") {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} ขนาดข้ออ้อย : ${item.dowelsize2} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "เเหล็ก 2 หุนลาย") {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} น้ำหนัก(กิโลกรัม/เส้น) : ${item.twohunsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ลวดเหล็กตะปูรีดเย็น") {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "แผงรั้วสำเร็จ (รั้วไวร์เมช)") {
                  return `สินค้า : ${item.name} ขนาดเหล็กรั้ว : ${item.Panelheight} ความกว้างแผง : ${item.Panelwidth} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)") {
                  return `สินค้า : ${item.name} ขนาดลวด : ${item.wiresize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "เหล็กนั่งร้าน") {
                  return `สินค้า : ${item.name} ประเภท : ${item.ProductType} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                }
                // else if (item.name === "กล่องเกเบี้ยน") {
                //   return `สินค้า : ${item.name} ขนาด : ${item.gabion1} ตา : ${item.gabion2} ระบุเป็นน้ำหนัก : ${item.weight} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                // }
                else if (item.name === "กล่องเกเบี้ยน") {
                  let sizeInfo = "";
                  if (item.weight) {
                    sizeInfo = `ระบุเป็นน้ำหนัก : ${item.weight}`;
                  } else if (item.gabion1 && item.gabion2) {
                    sizeInfo = `ขนาด : ${item.gabion1} ตา : ${item.gabion2}`;
                  }
                  return `สินค้า : ${item.name} ${sizeInfo} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "ลวดPC wire เบอร์#8 (4มิล)") {
                  return `สินค้า : ${item.name} ประเภท : ${item.ProductType} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                } else if (item.name === "แบบเหล็กเสา-คานเทสำเร็จ") {
                  if (item.ProductType === "- แบบเสามาตรฐาน (สูง3เมตร)") {
                    return `สินค้า : ${item.name} ประเภท : ${item.ProductType} ขนาด : ${item.polesize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                  } else if (item.ProductType === "- แบบคานมาตรฐาน") {
                    return `สินค้า : ${item.name} ประเภท : ${item.ProductType} ขนาด : ${item.customsize} จำนวน : ${item.Number} หน่วย : ${item.Unit} วิธีจัดส่ง : ${item.delivery}`;
                  }
                }
                return null;
              })}
            />
            <div className="kanit-medium text-[#154360] w-full md:w-[500px] pl-5 md:pl-10 h-auto py-6 flex flex-col gap-6">
              <div>
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
                <p className="kanit-medium px-2">เลขประจำตัวผู้เสียภาษี</p>
                <input
                  name="name"
                  onChange={handleTaxpayerId}
                  value={taxpayerId}
                  maxLength={13}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="text"
                  placeholder="กรุณากรอกเลขประจำตัวผู้เสียภาษี"
                />
                {errTaxpayerId && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errTaxpayerId}
                  </p>
                )}
              </div>
              <div>
                <p className="kanit-medium px-2">อีเมล</p>
                <input
                  name="email"
                  onChange={handleEmail}
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
              </div>
              <div>
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
                <p className="kanit-medium px-2">จังหวัด</p>
                <select
                  name="province"
                  onChange={handleProvince}
                  value={province}
                  maxLength={30}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  placeholder="กรุณากรอกชื่อจังหวัด"
                >
                  <option value="" style={{ color: "GrayText" }}>
                    -- เลือกรายการ --
                  </option>
                  {provinces.map((province) => (
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
                <p className="kanit-medium px-2">รหัสไปรษณีย์</p>
                <input
                  name="postalCode"
                  onChange={handlepostalCode}
                  value={postalCode}
                  maxLength={5}
                  className="w-full py-1 border-b-2 px-2 text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="text"
                  placeholder="กรุณากรอกรหัสไปรษณีย์"
                />
                {errpostalCode && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="kanit-medium text-sm italic font-bold">
                      !
                    </span>
                    {errpostalCode}
                  </p>
                )}
              </div>
              <div>
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
              </div>
            </div>
            <p className="text-red-500 text-sm kanit-medium ml-10 md:ml-20 mb-5">
              * เมื่อกดส่งแล้วกรุณารอ 1 - 2 นาที หรือจนกว่าจะมีข้อความปรากฎ *
            </p>
            <button
              onClick={handlePost}
              className="w-36 h-14 ml-36 md:ml-44 kanit-medium text-lg text-white bg-[#154360] rounded-lg font-semibold hover:bg-[#ff9800] hover:text-white duration-200"
            >
              ส่งใบคำร้อง
            </button>
            {/* <p className="text-red-500 text-sm kanit-medium ml-10 md:ml-20 mt-5">
              * เมื่อกดส่งแล้วกรุณารอ 1 - 2 นาที หรือจนกว่าจะมีข้อความปรากฎ *
            </p> */}
          </form>
        )}
      </div>
      <div className="w-full md:w-1/2 mt-0 md:mt-10">
        {products.length > 0 ? (
          <div className="pb-20">
            <div className="w-full h-20 bg-[#F5F7F7] kanit-medium text-[#154360] hidden lgl:grid grid-cols-3 place-content-center text-lg">
              <h2 className="md:pl-8">รายการสินค้า</h2>
              <h2 className="md:pl-72">จำนวน</h2>
              <h2 className="md:pl-44">หน่วย</h2>
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
                    stirrupssize={item.stirrupssize}
                    gauge={item.guage}
                    coil={item.coil}
                    customsize={item.customsize}
                    delivery={item.delivery}
                    ProductType={item.ProductType}
                    polesize={item.polesize}
                    twohunsize={item.twohunsize}
                    wiremeshsize1={item.wiremeshsize1}
                    wiremeshsize2={item.wiremeshsize2}
                    dowelsize={item.dowelsize}
                    dowelsize2={item.dowelsize2}
                    sheet={item.sheet}
                    Panelheight={item.Panelheight}
                    Panelwidth={item.Panelwidth}
                    gabion1={item.gabion1}
                    gabion2={item.gabion2}
                    weight={item.weight}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => dispatch(resetCart())}
              className="kanit-medium py-3 px-4 bg-red-500 rounded-xl text-white font-semibold uppercase mb-4 hover:bg-red-700 hover:text-[#E74C3C] duration-300"
            >
              ล้างรายการ
            </button>

            <Link to="/shop">
              <button className="kanit-medium ml-5 py-3 px-5 bg-green-500 rounded-xl text-white font-semibold uppercase mb-4 hover:bg-green-700 hover:text-[#2ECC71] duration-300">
                เพิ่มสินค้า
              </button>
            </Link>
            <div className="w-full gap-4 flex justify-end mt-4">
              <div className=" flex flex-col gap-4">
                <h1 className="text-2xl kanit-medium text-right text-[#154360]">
                  รายการขอใบเสนอราคา
                </h1>
                <div>
                  <p className="flex items-center kanit-medium text-[#154360] justify-between border-[5px] border-[#ff9800] py-1.5 text-lg px-4">
                    จำนวนรายการ
                    <span className="kanit-medium text-[#ff9800] tracking-wide">
                      {products.length}
                    </span>
                  </p>
                </div>
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
            <div className="max-w-[500px] p-4 bg-white flex gap-4 flex-col items-center rounded-xl shadow-xl">
              <h1 className="kanit-medium text-xl text-[#154360] uppercase">
                ไม่มีสินค้า
              </h1>
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
