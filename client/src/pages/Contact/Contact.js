import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import "../../assets/font.css";

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
  
  const ClientNameValidation = (clientName) => {
    return String(clientName)
      .toLowerCase()
      // .match(/^[A-Za-zก-๙]+$/);
      // .match(/^([A-Za-zก-๙]+\s[A-Za-zก-๙]+)$/);
      .match(/^([A-Za-zก-๙]+(?:\s+[A-Za-zก-๙]+)+)$/);
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
      // .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co\.th|net|org|edu|gov|mil|biz|info)$/i);
  };

  const TelValidation = (tel) => {
    return (
      String(tel)
        .toLowerCase()
        // .match(/^[0][0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/);
        .match(/^0[0-9]{9}$/)
        // .match(/^\d{3}-?\d{3}-?\d{4}$/)
    );
  };
  // ================= Email Validation End here ===============

  // const handlePost = (e) => {
  //   e.preventDefault();
  //   if (!clientName) {
  //     setErrClientName("กรุณากรอกชื่อ-นามสกุล");
  //   }
  //   // else {
  //   //   if (!ClientNameValidation(clientName)) {
  //   //     setErrClientName("กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง");
  //   //   }
  //   // }
  //   if (!email) {
  //     setErrEmail("กรุณากรอกอีเมล");
  //   } else {
  //     if (!EmailValidation(email)) {
  //       setErrEmail("กรุณากรอกอีเมลให้ถูกต้อง");
  //     }
  //   }
  //   if (!tel) {
  //     setErrTel("กรุณากรอกเบอร์โทรศัพท์");
  //   } else {
  //     if (!TelValidation(tel)) {
  //       setErrTel("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
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
  //     const formData = {
  //       clientName,
  //       email,
  //       tel,
  //       messages,
  //     };

  //     fetch("http://localhost:3001/Contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data);
  //         alert("ส่งข้อมูลสําเร็จ");
  //         // Reset the form and cart after successful submission
  //         setclientName("");
  //         setEmail("");
  //         setTel("");
  //         setMessages("");
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // };

  const handlePost = async (e) => {
    e.preventDefault();
  
    let isValid = true;
  
    if (!clientName) {
      setErrClientName("กรุณากรอกชื่อ-นามสกุล");
      isValid = false;
    } else if (!ClientNameValidation(clientName)) {
      setErrClientName("กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง");
      isValid = false;
    }
    if (!email) {
      setErrEmail("กรุณากรอกอีเมล");
      isValid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("กรุณากรอกอีเมลให้ถูกต้อง");
      isValid = false;
    }
    if (!tel) {
      setErrTel("กรุณากรอกเบอร์โทรศัพท์");
      isValid = false;
    } else if (!TelValidation(tel)) {
      setErrTel("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
      isValid = false;
    }
    if (!messages) {
      setErrMessages("กรุณากรอกข้อความ");
      isValid = false;
    }
  
    if (isValid) {
      const formData = {
        clientName,
        email,
        tel,
        messages,
      };
  
      try {
        const response = await fetch("https://natsteelweb.onrender.com/Contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error("เครือข่ายไม่ตอบสนอง");
        }
  
        const data = await response.json();
        console.log("Success:", data);
        alert("ส่งข้อมูลสําเร็จ");
  
        // Reset the form and clear the state after successful submission
        setclientName("");
        setEmail("");
        setTel("");
        setMessages("");
      } catch (error) {
        console.error("Error:", error);
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
      }
    }
  };
  

  return (
    <div className="max-w-container mx-auto mb-20 px-4 flex flex-wrap">
      <Breadcrumbs title="ช่องทางการติดต่อ" />
      {successMsg ? (
        <p className="pb-20 w-100 font-medium text-green-500 text-xl">
          {successMsg}
        </p>
      ) : (
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <form ref={formRef} className="md:pl-20">
            <h1 className="kanit-semibold text-[#154360] text-3xl">
              ติดต่อ / สอบถาม
            </h1>
            <div className="md:w-[500px] h-auto py-6 flex flex-col gap-6">
              <div>
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
                <p className="kanit-medium text-[#154360] px-2">อีเมล</p>
                <input
                  name="email"
                  onChange={handleEmail}
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
                  className="w-32 h-12 bg-[#154360] text-lg text-white kanit-medium tracking-wide rounded-xl hover:bg-[#ff9800]  duration-200"
                >
                  ส่งข้อมูล
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h1 className="kanit-semibold text-3xl text-[#154360] mb-10">
          บริษัท นัทสตีล จำกัด
        </h1>
        <p className="kanit-medium text-[#154360] mb-5 ml-0 md:ml-10">
          เวลาทำการ จันทร์ - เสาร์ เวลา 08:00 น. - 17:00 น.
        </p>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=บริษัท+นัท+สตีล+จำกัด+ตำบล+พงตึก+อำเภอท่ามะกา+กาญจนบุรี+ประเทศไทย&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          // width="650"
          // height="350"
          className="w-full md:w-[650px] h-64 md:h-[350px]"
          title="Google maps Footer"
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
      </div>
    </div>
  );
};

export default Contact;
