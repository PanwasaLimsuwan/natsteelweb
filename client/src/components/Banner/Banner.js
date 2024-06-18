import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Slider from "react-slick";
import B1 from "../../assets/images/banner/i3.jpg";
import B2 from "../../assets/images/banner/i2.jpg";
import B4 from "../../assets/images/banner/i6.jpg";
import linewelcome from "../../assets/images/banner/linewelcome3.png";
import Image from "../designLayouts/Image";
import "./banner.css";
import "../../assets/font.css";

const CustomSlide = ({ Subtext, imgSrc, text, animationClass }) => {
  return (
    <div
      className={`custom-slide ${animationClass}`}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "grab",
        height: "100vh", // สูงเต็มหน้าจอในทุกกรณี
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "80%", // ให้เนื้อหาอยู่กึ่งกลาง
          maxWidth: "700px", // ขนาดเนื้อหาสูงสุด
        }}
      >
        <h1
          className={`signika-bold ${animationClass.h1}`}
          style={{
            color: "#ff9800",
            fontSize: "5rem", // ขนาดเพิ่มลงเล็กน้อยสำหรับมือถือ
            letterSpacing: "0.015em", // เพิ่มระยะห่างระหว่างตัวอักษรที่นี่
            textAlign: "center", // การจัดข้อความ
          }}
        >
          NAT STEEL
        </h1>
        <p
          className={`kanit-medium ${animationClass.p}`}
          style={{
            color: "white",
            fontWeight: "550",
            fontSize: "1.5rem",
            whiteSpace: "normal", // เปลี่ยนเป็น normal เพื่อให้ข้อความขึ้นแบบเต็มประโยค
            margin: "15px 0", // ปรับขอบข้อความ
          }}
        >
          {text}
        </p>
        <p
          className="poppins-bold"
          style={{
            color: "#ff9800",
            fontWeight: "900",
            fontSize: "1.25rem",
            marginTop: "10px",
            whiteSpace: "normal", // เปลี่ยนเป็น normal เพื่อให้ข้อความขึ้นแบบเต็มประโยค
          }}
        >
          {Subtext}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px", // ระยะห่างของเนื้อหา
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <Image
              imgSrc={linewelcome}
              className={`${animationClass.welcome}`}
            />
            <p
              className={`nunito-extrabold ${animationClass.welcome}`}
              style={{
                color: "white",
                fontWeight: "400",
                fontSize: "1rem",
                textAlign: "center",
                whiteSpace: "normal", // เปลี่ยนเป็น normal เพื่อให้ข้อความขึ้นแบบเต็มประโยค
                margin: "0 10px", // ปรับขอบข้อความ
              }}
            >
              WELCOME TO CONSULT AND ORDER
            </p>
            <Image
              imgSrc={linewelcome}
              className={`${animationClass.welcome}`}
            />
          </span>
        </div>
      </div>
      <div>
        <Image imgSrc={imgSrc} className="custom-banner" />
      </div>
    </div>
  );
};


const textAnimationClass = [
  { h1: "slideInFromLeft", p: "slideInFromRight", welcome: "floatAnimation" },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState([
    {
      imgSrc: B1,
      text: "ผู้ผลิตและจำหน่ายสินค้าเหล็กเกรดดีและมีคุณภาพหลากหลายประเภท",
    },
    {
      imgSrc: B2,
      text: "มาตรฐานญี่ปุ่น ทนการกัดกร่อนได้ดี จัดส่งทั่วประเทศ",
    },
    {
      imgSrc: B4,
      text: "เปิดบริการ จันทร์ - เสาร์ เวลา 8:00 - 17:00 น. (หยุดวันอาทิตย์)",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide, slides]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000, // autoplayspeed ถูกแก้เป็น autoplaySpeed
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <TransitionGroup key={index}>
            <CSSTransition
              key={index}
              classNames="fade"
              timeout={5000}
              in={index === currentSlide} // เพิ่ม prop in เพื่อตรวจสอบว่า slide ปัจจุบันมีค่าเท่ากับ index หรือไม่
            >
              <CustomSlide
                {...slide}
                animationClass={
                  index === currentSlide ? textAnimationClass[0] : {}
                }
              />
            </CSSTransition>
          </TransitionGroup>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
