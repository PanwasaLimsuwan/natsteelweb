const express = require("express");
const cors = require("cors");
const app = express();
const nodemailer = require("nodemailer");
const expressAsyncHandler = require("express-async-handler");

const dotenv = require("dotenv").config();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
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

    const mailOptions = {
      from: `${clientName} <${email}>`,
      replyTo: `คุณ ${clientName} <${email}>`,
      to: "panwasalimsuwan@gmail.com",
      subject: "ติดต่อสอบถาม",
      text:
        `
        ชื่อ-นามสกุล: ${clientName}
        Email: ${email}
        เบอร์ติดต่อ: ${tel}
        ข้อสงสัย: ${messages}
    `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "ส่งอีเมลสําเร็จ" });
    } catch (error) {
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

    const mailOptions = {
      from: `${clientName} <${email}>`,
      replyTo: `คุณ ${clientName} <${email}>`,
      to: "panwasalimsuwan@gmail.com",
      subject: "ขอใบเสนอราคา",
      text:
  productsData
    .map((product, index) => {
      if (product.productName === "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)" || product.productName === "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)")
        {
          const coilSize = item.coil === "ระบุค่าเอง" ? item.customsize : item.coil;
        return `
          สินค้าชิ้นที่: ${index + 1}
          ชื่อสินค้า: ${product.productName}
          ขนาดลวด: ${product.wiresize}
          ตา: ${product.gauge} 
          ขนาด(ต่อม้วน): ${coilSize}
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
      const info = await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "ส่งอีเมลสําเร็จ" });
    } catch (error) {
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
