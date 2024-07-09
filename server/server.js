const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const expressAsyncHandler = require("express-async-handler");

const app = express();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "natsteelweb@gmail.com",
    pass: "sceqhgjjtyrwcodf",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post(
  "/contact",
  expressAsyncHandler(async (req, res) => {
    const { clientName, email, tel, messages } = req.body;

    const mailOptions = {
      from: `${clientName} <${email}>`,
      replyTo: `คุณ ${clientName} <${email}>`,
      to: "natsteel.2013@gmail.com",
      subject: "ติดต่อสอบถาม",
      text: `
        ชื่อ-นามสกุล: ${clientName}
        Email: ${email}
        เบอร์ติดต่อ: ${tel}
        ข้อสงสัย: ${messages}
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "ส่งอีเมลสําเร็จ" });
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
      fax,
      company,
      province,
      branch,
      Address,
      postalCode,
      messages,
      productsData,
    } = req.body;

    const productsText = productsData
      .map((product, index) => {
        let coilSize = product.coil; // Initialize coilSize with product.coil
        if (product.coil === "ระบุขนาดเอง") {
          coilSize = product.customsize; // Use customsize if coil is "ระบุค่าเอง"
        }

        // let barbedSize = product.barbedsize;
        // if (product.barbedsize === "ระบุขนาดเอง") {
        //   barbedSize = product.customsize;
        // }

        switch (product.productName) {
          case "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)":
          case "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              ตา: ${product.gauge}
              ขนาด(ต่อม้วน): ${coilSize} (m.)
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ตาข่ายสี่เหลี่ยม (กรงไก่)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ประเภท: ${product.ProductType}
              ขนาดลวด: ${product.wiresize}
              ขนาด(ต่อม้วน): ${product.coil}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ลวดหนาม":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              น้ำหนัก(กิโลกรัม/ขด): ${product.barbedsize}
              ความยาว: ${product.customsize} (m.)
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "กิ๊บลวดหนาม":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ความยาว: ${product.clipsize}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)":
          case "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)":
          case "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ตะปูตอกไม้":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดตะปู: ${product.nailsize}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป":
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
          case "รั้วแรงดึง (ตาข่ายถักปม)":
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
          case "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              น้ำหนัก(กิโลกรัม/ขด) : ${product.barbedsize}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ลวดชุบสังกะสี":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ลวดเหล็กตะปูรีดเย็น":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit} (115กิโลกรัม/ขด)
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit} (2000กิโลกรัม/ขด)
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "เหล็กวงบ่อ":
          case "เหล็กวงท่อ":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit} (30กิโลกรัม/ขด)
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ตะแกรงเหล็กฉีก":
          case "เหล็กเพลทตัดสำเร็จ":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาด(ต่อแผ่น): ${product.sheet}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              ขนาดตกตะแกรง: ${product.gauge}
              ขนาด(ต่อม้วน): ${product.wiremeshsize1} (m.) x${
              product.wiremeshsize2
            } (m.)
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "สังกะสีแผ่นเรียบ":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              ขนาด(ต่อม้วน): ${coilSize} (ฟุต)
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "เหล็กตัด หนวดกุ้ง":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ความยาว: ${product.dowelsize} (cm.)
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "เหล็กจ๊อย (โดเวล)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              ขนาดข้ออ้อย: ${product.dowelsize2}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "เเหล็ก 2 หุนลาย":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดลวด: ${product.wiresize}
              น้ำหนัก(กิโลกรัม/เส้น): ${product.twohunsize} 
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit} (400เส้น/มัด)
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "แผงรั้วสำเร็จ (รั้วไวร์เมช)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาดเหล็กรั้ว: ${product.Panelheight}
              ความกว้างแผง: ${product.Panelwidth}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "เหล็กนั่งร้าน":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ประเภท: ${product.ProductType}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "ลวดPC wire เบอร์#8 (4มิล)":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ประเภท: ${product.ProductType}
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit} (1000กิโลกรัม/ม้วน)
              วิธีการจัดส่ง: ${product.delivery}
            `;
          case "กล่องเกเบี้ยน":
            return `
              สินค้าชิ้นที่: ${index + 1}
              ชื่อสินค้า: ${product.productName}
              ขนาด: ${product.gabion1} (m.)
              ตา: ${product.gabion2} (cm.)
              ระบุเป็นน้ำหนัก: ${product.weight} (กิโลกรัม)
              จำนวน: ${product.Number}
              หน่วย: ${product.Unit}
              วิธีการจัดส่ง: ${product.delivery}
            `;
          // case "แบบเหล็กเสา-คานเทสำเร็จ":
          //   return `
          //     สินค้าชิ้นที่: ${index + 1}
          //     ชื่อสินค้า: ${product.productName}
          //     ประเภท: ${product.ProductType}
          //     ขนาด: ${product.polesize}
          //     จำนวน: ${product.Number}
          //     หน่วย: ${product.Unit}
          //     วิธีการจัดส่ง: ${product.delivery}
          //   `;
          case "แบบเหล็กเสา-คานเทสำเร็จ":
            if (product.ProductType === "- แบบเสามาตรฐาน (สูง3เมตร)") {
              return `
                สินค้าชิ้นที่: ${index + 1}
                ชื่อสินค้า: ${product.productName}
                ประเภท: ${product.ProductType}
                ขนาด: ${product.polesize}
                จำนวน: ${product.Number}
                หน่วย: ${product.Unit}
                วิธีการจัดส่ง: ${product.delivery}
              `;
            } else if (product.ProductType === "- แบบคานมาตรฐาน") {
              return `
                สินค้าชิ้นที่: ${index + 1}
                ชื่อสินค้า: ${product.productName}
                ประเภท: ${product.ProductType}
                ขนาด: ${product.customsize} (mm.)
                จำนวน: ${product.Number}
                หน่วย: ${product.Unit}
                วิธีการจัดส่ง: ${product.delivery}
              `;
            }
          default:
            return "";
        }
      })
      .join("\n");

    const mailOptions = {
      from: `${clientName} <${email}>`,
      replyTo: `คุณ ${clientName} <${email}>`,
      to: "natsteel.2013@gmail.com",
      subject: "ขอใบเสนอราคา",
      text: `
        ${productsText}
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
      res.status(200).json({ success: true, message: "ส่งอีเมลสําเร็จ" });
    } catch (error) {
      res.status(500).json({ success: false, message: "เกิดข้อผิดพลาด" });
    }
  })
);

app.use("/", (req, res) => {
  res.send("Server is running!");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
