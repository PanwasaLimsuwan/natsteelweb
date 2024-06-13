import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import {
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaFax,
  FaMobile,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/font.css";
// import emailjs from "emailjs-com";
// import LineButton from "../../components/home/Footer/LineButton";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const formRef = useRef(null);

  // useEffect(() => {
  //   setPrevLocation(location.state.data);
  // }, [location]);

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
  // const formRef = useRef(null);

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errTel, setErrTel] = useState("");
  const [errMessages, setErrMessages] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

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
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // ================= Email Validation start here =============
  // const ClientNameValidation = (clientName) => {
  //   return String(clientName)
  //     .toLowerCase()
  //     .match(/^[A-Za-zก-ฮ]+$/);
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
  // ================= Email Validation End here ===============

  // const SendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_6g4kwau",
  //       "template_7m7mmh6",
  //       // e.target,
  //       formRef.current,
  //       "CZiqTlmdXR4uH8Wwd"
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
  //   // console.log("Name valid:", clientName);
  //   // console.log("Email valid:", EmailValidation(email));
  //   // console.log("Tel valid:", TelValidation(tel));
  //   // console.log("Message filled:", messages);
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
  //   if (!tel) {
  //     setErrTel("กรุณากรอกเบอร์โทรศัพท์");
  //   } else {
  //     if (!TelValidation(tel)) {
  //       setErrTel("กรุณากรอกเบอร์โทรศัพท์");
  //     }
  //   }
  //   if (!messages) {
  //     setErrMessages("กรุณากรอกข้อความ");
  //   }
  //   if (
  //     clientName &&
  //     email &&
  //     EmailValidation(email) &&
  //     tel &&
  //     TelValidation(tel) &&
  //     messages
  //   ) {
  //     SendEmail(e);
  //     setSuccessMsg(
  //       `ขอบคุณที่ติดต่อเรา คุณ${clientName}  ข้อความของคุณได้ทำการส่งเรียบร้อยแล้ว เราจะรีบตอบกลับในภายหลังไปที่ ${email}.`
  //     );
  //   }

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("กรุณากรอกชื่อ-นามสกุล");
    } 
    // else {
    //   if (!ClientNameValidation(clientName)) {
    //     setErrClientName("กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง");
    //   }
    // }
    if (!email) {
      setErrEmail("กรุณากรอกอีเมล");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("กรุณากรอกอีเมลให้ถูกต้อง");
      }
    }
    if (!tel) {
      setErrTel("กรุณากรอกเบอร์โทรศัพท์");
    } else {
      if (!TelValidation(tel)) {
        setErrTel("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
      }
    }
    if (!messages) {
      setErrMessages("กรุณากรอกข้อความ");
    }

    if (
      clientName &&
      email &&
      EmailValidation(email) &&
      tel &&
      TelValidation(tel) &&
      messages
    ) {
      const formData = {
        clientName,
        email,
        tel,
        messages,
      };

      fetch("http://localhost:3001/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("ส่งข้อมูลสําเร็จ");
          // Reset the form and cart after successful submission
          setclientName("");
          setEmail("");
          setTel("");
          setMessages("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    // emailjs.sendForm(
    //   "service_6g4kwau",
    //   "template_7m7mmh6",
    //   form.target,
    //   "d2tVQPDPk3A8gorqA"
    // ).then(res=>{
    //     console.log(res);
    // }).catch(err => console.log(err))
    // if (form.current) {
    //   emailjs.sendForm(
    //     "service_6g4kwau",
    //     "template_7m7mmh6",
    //     form.current,
    //     "d2tVQPDPk3A8gorqA"
    //   ).then(res => {
    //     console.log(res);
    //     // setSuccessMsg(
    //     //   `ขอบคุณที่ติดต่อเรา คุณ${clientName}  ข้อความของคุณได้ทำการส่งเรียบร้อยแล้ว เราจะรีบตอบกลับในภายหลังไปที่ ${email}.`
    //     // );
    //   }).catch(err => {
    //     console.log(err);
    //   });
    // }
  };

  return (
    // <div className="max-w-container mx-auto px-4">
    <div className="max-w-container mx-auto mb-20 px-4 flex flex-wrap">
      <Breadcrumbs title="ช่องทางการติดต่อ" />
      {successMsg ? (
        <p className="pb-20 w-100 font-medium text-green-500 text-xl">
          {successMsg}
        </p>
      ) : (
        // <form ref={formRef} className="pb-20">
        <div className="w-1/2">
          <form ref={formRef} className="pl-20">
            <h1 className="kanit-semibold text-[#154360] text-3xl">
              ติดต่อ / สอบถาม
            </h1>
            <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
              <div>
                {/* <label>Name</label> */}
                <p className="kanit-medium text-[#154360] px-2">ชื่อ-นามสกุล</p>
                <input
                  name="name"
                  onChange={handleName}
                  value={clientName}
                  maxLength={40}
                  className="w-full py-1 border-b-2 px-2 kanit-medium text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="text"
                  placeholder="กรุณากรอกชื่อ-นามสกุล"
                />
                {errClientName && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic kanit-medium">!</span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Email</label> */}
                <p className="kanit-medium text-[#154360] px-2">อีเมล</p>
                <input
                  name="email"
                  onChange={handleEmail}
                  // onSubmit={SendEmail}
                  value={email}
                  maxLength={40}
                  className="w-full py-1 border-b-2 px-2 kanit-medium text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="email"
                  placeholder="กรุณากรอกอีเมล"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic kanit-medium">!</span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Tel</label> */}
                <p className="kanit-medium text-[#154360] px-2">เบอร์ติดต่อ</p>
                <input
                  name="Tel"
                  onChange={handleTel}
                  value={tel}
                  maxLength={10}
                  className="w-full py-1 border-b-2 px-2 kanit-medium text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800]"
                  type="tel"
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                />
                {errTel && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic kanit-medium">!</span>
                    {errTel}
                  </p>
                )}
              </div>
              <div>
                {/* <label>Messages</label> */}
                <p className="kanit-medium text-[#154360] px-2">
                  ข้อสงสัย / ความคิดเห็น
                </p>
                <textarea
                  name="message"
                  onChange={handleMessages}
                  value={messages}
                  cols="30"
                  rows="5"
                  className="w-full py-1 border-b-2 px-2 kanit-medium text-[#ff9800] placeholder:font-normal placeholder:text-sm outline-none focus-within:border-[#ff9800] resize-none"
                  type="text"
                  placeholder="กรุณากรอกข้อความ"
                ></textarea>
                {errMessages && (
                  <p className="text-red-500 text-sm kanit-medium mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic kanit-medium">!</span>
                    {errMessages}
                  </p>
                )}
              </div>
              <div className="text-center">
                <button
                  onClick={handlePost}
                  // type="submit"
                  // value={send}
                  // onClick={SendEmail}
                  className="w-32 h-12 bg-[#154360] text-lg text-white kanit-medium tracking-wide rounded-xl hover:bg-[#ff9800]  duration-200"
                >
                  ส่งข้อมูล
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <div className="w-1/2 col-span-1">
        <h1 className="kanit-semibold text-3xl text-[#154360] mb-10">
          บริษัท นัทสตีล จำกัด
        </h1>
        <p className="kanit-medium text-[#154360] mb-5 ml-10">
          เวลาทำการ จันทร์ - เสาร์ เวลา 08:00 น. - 17:00 น.
        </p>
        {/* <div className="col-span-1 mb-10 md:mb-0 footer-bottom"> */}
        {/* <FooterListTitle className="center font-titleFont" title="สนใจติดต่อ" /> */}
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=บริษัท+นัท+สตีล+จำกัด+ตำบล+พงตึก+อำเภอท่ามะกา+กาญจนบุรี+ประเทศไทย&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          // className="cursor-pointer"
          width="650"
          height="350"
          title="Google maps Footer"
          // style={{ cursor: "pointer" }}
          loading="lazy"
          allowFullScreen
        ></iframe>
        <div className="text-center" target="_blank">
          <a href="https://maps.app.goo.gl/7a94sQmJc9e4uD9e7">
            <button className="w-20 h-9 kanit-medium bg-white border-2 border-[#154360] text-[#154360] rounded-2xl mt-7 hover:text-[#ff9800] hover:border-[#ff9800] duration-300">
              นำทาง
            </button>
          </a>
        </div>
        {/* <p className="kanit-medium text-[#154360] mt-5 ml-10">
          ที่อยู่ : เลขที่ 11/5 หมู่ที่ 2 ตำบล พงตึก อำเภอท่ามะกา จังหวัดกาญจนบุรี 71120
          </p> */}
      </div>
    </div>
  );
};

export default Contact;
