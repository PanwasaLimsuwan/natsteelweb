// const express = require("express");
// const app = express();
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// const nodemailer = require("nodemailer");
// // const { sendEmail } = require("./emailController");

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// // app.use(cors());

// app.listen(3001, () => {
//     console.log("Server running on port 3001")
// });

// // app.post("/quotation", (req, res) => {
// //     // res.send("Hello World!");
// //     res.send("First of all, I would've never look back at you. I would've never look back at you.<br/>If you didn't chase me. I would've not be with you. No No I would've not be with you.<br/>Now I'm not picking up when you call me. No I'm not gon respon when you want me.<br/>So better keep in mind that. You were nothing other than a mindset.");
// // })

// // app.post("/quotation/SendEmail", (req, res) => {
// //     const { clientName, email, tel, mobile, fax, company, province, branch, messages } = req.body;
// //     console.log(clientName, email, tel, mobile, fax, company, province, branch, messages,);
// //     res.send("Success");
// // })

// app.post("/sendEmail", (req, res) => {
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "s6404062630465@email.kmutnb.ac.th",
//             // pass: "temx afhx tmts enxv",
//             pass: "jdupbxgytqiyzcon",
//             // pass: "2718800002803",
//         },
// tls: {
//     rejectUnauthorized: false // ปิดการตรวจสอบใบรับรอง
// }
//     })
//     const option = {
//         from: 's6404062630465@email.kmutnb.ac.th',
//         to: 'panwasalimsuwan@gmail.com',
//         subject: 'Test Email',
//         html:`
//         <p>Hello world I'm a Julie Fanbase Thailand</p>
//         <img src="https://www.example.com/path/to/your/image.jpg" alt="Your Image">
//     `
//     }
//     transporter.sendMail(option, (err, info) => {
//         if (err) {
//             console.log('err' , err);
//             return res.status(200).json({
//                 RespCode: 400,
//                 RespMessage: "bad",
//                 RespError: err
//             })
//         } else {
//             console.log('Send: ' + info.response);
//             return res.status(200).json({
//                 RespCode: 200,
//                 RespMessage: "good",
//             })
//         }
//     })
// })

// // app.post("/quotation/send", sendEmail);

// // app.get("/getData", (req, res) => {
// //     res.send("First of all, I would've never look back at you. I would've never look back at you.<br/>If you didn't chase me. I would've not be with you. No No I would've not be with you.");
// //     // res.send("Hello World!");
// // })mp,d

// module.exports = app;

const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
const expressAsyncHandler = require("express-async-handler");
// const { default: Product } = require("../client/src/components/home/Products/Product");

// import express from "express";
// import cors from "cors";
// const app = express();
// import nodemailer from "nodemailer";
// import expressAsyncHandler from "express-async-handler";

app.use(express.json()); // middleware เพื่อ parse ข้อมูล JSON ที่ส่งมากับ request
app.use(cors());

app.use(cors({
  origin: 'https://natsteelweb-git-main-panwasa-limsuwans-projects.vercel.app', // หรือ '*' สำหรับการอนุญาตทุกโดเมน
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "smtp.gmail.com", // เปลี่ยนเป็น SMTP server ของคุณ
  port: 587, // ปรับให้เป็น port ของ SMTP server ของคุณ (เช่น 587 หรือ 465)
  secure: false, // true for 465, false for other ports
  auth: {
    user: "s6404062630465@email.kmutnb.ac.th",
    pass: "jdupbxgytqiyzcon",
  },
  tls: {
    rejectUnauthorized: false  },
});

app.post(
  "/contact",
  expressAsyncHandler(async (req, res) => {
    const {
      clientName,
      email,
      tel,
      messages,
    } = req.body;

    // const senderEmail = {email};

    // กำหนดข้อความอีเมล
    const mailOptions = {
      //   from: "s6404062630465@email.kmutnb.ac.th",
      from: `${clientName} <${email}>`,
      replyTo: `คุณ ${clientName} <${email}>`,
      to: "panwasalimsuwan@gmail.com",
      subject: "ติดต่อสอบถาม",
      //   text: `Client Name: ${clientName}\nEmail: ${email}\nTel: ${tel}\nMobile: ${mobile}\nFax: ${fax}\nCompany: ${company}\nProvince: ${province}\nBranch: ${branch}\nMessages: ${messages}\n`,
      // text: `สินค้า: ${productName}\nชื่อ-นามสกุล: ${clientName}\nEmail: ${email}\nเบอร์ติดต่อ: ${tel}\nเบอร์มือถือ: ${mobile}\nFax: ${fax}\nหน่วยงาน: ${company}\nจังหวัด: ${province}\nสาขา: ${branch}\nหมายเหตุ: ${messages}\n`,
      text:
        `
        ชื่อ-นามสกุล: ${clientName}
        Email: ${email}
        เบอร์ติดต่อ: ${tel}
        ข้อสงสัย: ${messages}
    `,
    };

    try {
      // ส่งอีเมล
      const info = await transporter.sendMail(mailOptions);
      // console.log("Email sent:", info.response);
      // console.log(products);
      // res.status(200).send("Email sent successfully");
      // ส่งคำตอบกลับไปยังแอปพลิเคชันฝั่งไคลเอนต์
      res
        .status(200)
        .json({ success: true, message: "ส่งอีเมลสําเร็จ" });
    } catch (error) {
      // console.error("Error sending email:", error);
      // res.status(500).send("Error sending email");
      res.status(500).json({ success: false, message: "เกิดข้อผิดพลาด" });
    }
  })
);

app.post(
  "/Quotation",
  expressAsyncHandler(async (req, res) => {
    const {
      clientName,
      taxpayerId,
      email,
      tel,
      // mobile,
      fax,
      company,
      province,
      branch,
      Address,
      postalCode,
      messages,
      productsData,
    } = req.body;

    // console.log(
    //   clientName,
    //   taxpayerId,
    //   email,
    //   tel,
    //   mobile,
    //   fax,
    //   company,
    //   province,
    //   branch,
    //   messages,
    //   productsData
    // );
    // const fromData = req.body;
    // console.log("Roger that! : ", fromData);
    // app.post("/sendEmail", async (req, res) => {
    //   const {
    //     clientName,
    //     email,
    //     tel,
    //     mobile,
    //     fax,
    //     company,
    //     province,
    //     branch,
    //     messages,
    //   } = req.body;
    //   console.log(
    //     clientName,
    //     email,
    //     tel,
    //     mobile,
    //     fax,
    //     company,
    //     province,
    //     branch,
    //     messages
    //   );

    // กำหนดข้อความอีเมล
    const mailOptions = {
      //   from: "s6404062630465@email.kmutnb.ac.th",
      from: `${clientName} <${email}>`,
      replyTo: `คุณ ${clientName} <${email}>`,
      to: "panwasalimsuwan@gmail.com",
      subject: "ขอใบเสนอราคา",
      //   text: `Client Name: ${clientName}\nEmail: ${email}\nTel: ${tel}\nMobile: ${mobile}\nFax: ${fax}\nCompany: ${company}\nProvince: ${province}\nBranch: ${branch}\nMessages: ${messages}\n`,
      // text: `สินค้า: ${productName}\nชื่อ-นามสกุล: ${clientName}\nEmail: ${email}\nเบอร์ติดต่อ: ${tel}\nเบอร์มือถือ: ${mobile}\nFax: ${fax}\nหน่วยงาน: ${company}\nจังหวัด: ${province}\nสาขา: ${branch}\nหมายเหตุ: ${messages}\n`,
      text:
  productsData
    .map((product, index) => {
      if (product.productName === "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)" || product.productName === "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ขนาดลวด: ${product.wiresize}
          ตา: ${product.gauge} 
          ขนาด(ต่อม้วน): ${product.coil}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      } else if (product.productName === "ตาข่ายสี่เหลี่ยม (กรงไก่)") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ประเภท: ${product.ProductType}
          ขนาดลวด: ${product.wiresize}
          ตา: ${product.gauge} 
          ขนาด(ต่อม้วน): ${product.coil}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      } else if (product.productName === "ลวดหนาม") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ขนาดลวด: ${product.wiresize}
          น้ำหนัก(กิโลกรัม/ขด): ${product.barbedsize}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      } else if (product.productName === "กิ๊บลวดหนาม") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ความยาว: ${product.clipsize}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      } else if (product.productName === "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ประเภท: ${product.ProductType}
          ขนาดลวด: ${product.wiresize}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      } else if (product.productName === "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ขนาดลวด: ${product.wiresize}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      } else if (product.productName === "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ขนาดลวด: ${product.wiresize}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      } else if (product.productName === "ตะปูตอกไม้") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ขนาดตะปู: ${product.nailsize}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      } else if (product.productName === "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ประเภท: ${product.ProductType}
          ขนาดลวด: ${product.wiresize}
          ตา: ${product.gauge}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      }
      else if (product.productName === "รั้วแรงดึง (ตาข่ายถักปม)") {
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ขนาดลวด: ${product.wiresize}
          ตา: ${product.gauge}
          ขนาด(ต่อม้วน): ${product.coil}
          จำนวน: ${product.Number}
          หน่วย: ${product.Unit}
          วิธีการจัดส่ง: ${product.delivery}
        `;
      }
      // else {
      //   return `
      //     สินค้าชิ้นที่: ${index + 1}
      //     ชื่อสินค้า: ${product.productName}
      //     ประเภท: ${product.ProductType}
      //     ขนาด: ${product.size}
      //     จำนวน: ${product.Number}
      //     หน่วย: ${product.Unit}
      //     วิธีการจัดส่ง: ${product.delivery}
      //   `;
      // }
    })
          .join("\n") +
        `
        ชื่อ-นามสกุล: ${clientName}
        เลขประจำตัวผู้เสียภาษี: ${taxpayerId}
        Email: ${email}
        เบอร์ติดต่อ: ${tel}
        Fax: ${fax}
        หน่วยงาน: ${company}
        สาขา: ${branch}
        ที่อยู่: ${Address}
        จังหวัด: ${province}
        รหัสไปรษณีย์: ${postalCode}
        หมายเหตุ: ${messages}
    `,
    };

    try {
      // ส่งอีเมล
      const info = await transporter.sendMail(mailOptions);
      // console.log("Email sent:", info.response);
      // console.log(products);
      // res.status(200).send("Email sent successfully");
      // ส่งคำตอบกลับไปยังแอปพลิเคชันฝั่งไคลเอนต์
      res
        .status(200)
        .json({ success: true, message: "ส่งอีเมลสําเร็จ" });
    } catch (error) {
      // console.error("Error sending email:", error);
      // res.status(500).send("Error sending email");
      res.status(500).json({ success: false, message: "เกิดข้อผิดพลาด" });
    }
  })
);

app.use("/", (req,res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });
