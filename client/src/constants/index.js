import {
  ลวดหนาม,
  ลวดหนาม2,
  ลวดหนาม3,
  ตาข่ายกรงไก่,
  ตาข่ายกรงไก่2,
  ตาข่ายกรงไก่3,
  ลวดตาข่ายถัก,
  เหล็กเสาเอ็น,
  กิ๊บลวดหนาม2,
  กิ๊บลวดหนาม2Copy,
  ตะปู,
  เหล็กปลอกเสาเล็ก,
  เหล็กปลอกเสาปลอกคาน,
  รั้วแรงดึง,
  ตาข่ายสาน,
  ตาข่ายสาน3,
  ปลอกเสาปลอกคาน,
  ลวดตาข่ายทอ,
  ตะแกรงกรงไก่2,
  กรงไก่,
  กิ๊บลวดหนาม3,
  ปลอกสี่เหลี่ยม,
  ปลอกสามเหลี่ยม,
  เสาเอ็นทับหลัง,
  ลวดตะปู,
  เหล็กวงบ่อ,

  B1,
  B2,
  B3,
  B4,
  B5,
  B6,
  B7,
  ปลอกสี่เหลี่ยม4,
} from "../assets/images/index";
import "./style.css";


// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1,
    title: "หน้าแรก",
    link: "/",
  },
  {
    _id: 2,
    title: "สินค้า",
    link: "/shop",
  },
  {
    _id: 3,
    title: "เกี่ยวกับบริษัท",
    link: "/about",
  },
  {
    _id: 4,
    title: "ติดต่อสอบถาม",
    link: "/contact",
  },
];
// =================== NavBarList End here ======================

export const bestSellers = [
  {
    _id: "1",
    img: B1,
    productName: "กิ๊บลวดหนาม",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
  },
  {
    _id: "2",
    img: B2,
    productName: "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
  },
  {
    _id: "3",
    img: B3,
    productName: "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
  },
  {
    _id: "4",
    img: B4,
    productName: "ลวดหนาม",
    cat: "ลวดหนาม Barbed wire",
  },
  {
    _id: "5",
    img: B5,
    productName: "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
  },
  {
    _id: "6",
    img: B6,
    productName: "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)",
    cat: "ตาข่ายทอ chain link",
  },
  {
    _id: "7",
    img: B7,
    productName: "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)",
    cat: "ลวดตาข่ายต่างๆ",
  },
];

// =================== สินค้าทั้งหมด ===============================

export const allproduct = [
  {
    _id: "1",
    img: ลวดตาข่ายทอ,
    productName: "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)",
    description: "ลวดตาข่ายทอ คือ ตาข่ายที่ใช้เหล็กลวดมาถักกันเป็นช่องๆ โดยแต่ละช่องของตะแกรงจะถักเป็นรูปสี่เหลี่ยมขนมเปียกปูน จึงเรียกได้หลายชื่อ เช่น ตาข่ายถัก,ตะแกรงถัก,ตาข่ายสี่เหลี่ยมขนมเปียกปูนถักร้อยเป็นเกลียว ตาสี่เหลี่ยมขนมเปียกปูนนั่นเอง",
    cat: "ตาข่ายทอ chain link",
  },
  {
    _id: "2",
    img: ตาข่ายสาน3,
    productName: "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)",
    description: "ตาข่ายลวดสานเกิดจากการนำลวดเป็นม้วนซึ่งเป็นลวดตรง มาเข้าเครื่องบดลวดให้เป็นหยักคล้ายเส้นมาม่า แล้วตัดออกเมื่อได้ตามขนาดที่ต้องการ หลังจากนั้นจึงนำลวดที่หยิกเป็นเส้นๆเหล่านี้มาสานเข้ากันเป็นตาข่ายลวดสานโดยที่อาจเข้าเครื่องสานหรือใช้มือคนสานก็ได้",
    cat: "ลวดตาข่ายต่างๆ",
  },
  {
    _id: "3",
    img: กรงไก่,
    productName: "ตาข่ายสี่เหลี่ยม (กรงไก่)",
    description: "ลวดตาข่ายกรงไก่ คือ ลวดตาข่ายตาสี่เหลี่ยมลวดที่มีการนำเอาเส้นลวดมาขึ้นรูปด้วยเครื่องจักรและนำมาเชื่อมให้ได้ขนาดตามช่องที่ต้องการ หลังจากนั้นนำแผ่นตาข่ายไปเข้ากระบวนการชุบกัลวาไนซ์ หรือ ชุบสังกะสี โดยปกติแล้วจะนำมาใช้งานทำเป็นกรงล้อมไก่ ล้อมสัตว์",
    des: '- ตา 1/2" (4 หุน)',
    des2: '- ตา 3/4" (8 หุน)',
    des3: '- ตา 1" (1 นิ้ว)',
    cat: "ลวดตาข่ายต่างๆ",
  },
  {
    _id: "6",
    img: ลวดหนาม,
    productName: "ลวดหนาม",
    description: "ลวดหนาม คือ เส้นลวดตีเกลียวที่มีหนามแหลมคม เกิดจากการขึ้นรูปพันเป็นเกลียวของเส้นลวดชุบสังกะสี ใช้เพื่อเพิ่มความปลอดภัยและป้องกันการบุกรุกในพื้นที่ที่ต้องการรักษาความปลอดภัย",
    cat: "ลวดหนาม Barbed wire",
  },
  {
    _id: "10",
    img: กิ๊บลวดหนาม3,
    productName: "กิ๊บลวดหนาม",
    description: "กิ๊บลวดหนาม เป็นกิ๊บทรงวีสำหรับใช้ยึดรั้วลวดหนามกับเสารั้ว โดยนิยมตอกเข้าไปในรูเสาปูนหรือคอนกรีต ดัดใช้งานง่าย ยึดล็อกลวดหนามได้ดี ทนต่อแรงดึง ไม่หลุดง่าย",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
  },
  {
    _id: "14",
    img: ปลอกเสาปลอกคาน,
    productName: "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)",
    description: "เหล็กปลอกเสา ปลอกคาน เป็นวัสดุก่อสร้างชนิดหนึ่งที่มีการผลิตจากเหล็กเส้นกลมหรือเหล็กเส้นข้ออ้อยที่มีกำลังดึงสูง นำมาดัดโค้งเป็นรูปทรงต่างๆ เพื่อเสริมความแข็งแรงให้กับคอนกรีต ช่วยให้คอนกรีตสามารถรับแรงกดและแรงดึงได้ดียิ่งขึ้น",
    des: "- 2 หุน",
    des2: "- 3 หุน",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
  },
  {
    _id: "15",
    img: ปลอกสามเหลี่ยม,
    productName: "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)",
    description : "เหล็กปลอก คือ เหล็กที่ใช้เสริมอยู่ภายในเสาหรือคานในโครงสร้างคอนกรีตเสริมเหล็ก เหล็กที่ใช้ผลิตส่วนมากคือเหล็กเส้นกลมโดยจะดัดเหล็กเส้นเป็นรูปร่างเดียวกับพื้นที่หน้าตัดของเสาหรือคานที่จะใช้ มีลักษณะเป็นเส้นกลมผิวเรียบสามารถทำเป็นรูปทรงตามที่ลูกค้าต้องการได้ เช่น สามเหลี่ยม สี่เหลี่ยม ห้าเหลี่ยม หกเหลี่ยม วงกลม รูปตัวไอ ช่วยลดเวลา ลดแรงงาน ลดค่าใช้จ่ายได้อย่างมีประสิทธิภาพ",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
  },
  {
    _id: "16",
    img: ปลอกสี่เหลี่ยม,
    productName: "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)",
    description : "เหล็กปลอก คือ เหล็กที่ใช้เสริมอยู่ภายในเสาหรือคานในโครงสร้างคอนกรีตเสริมเหล็ก เหล็กที่ใช้ผลิตส่วนมากคือเหล็กเส้นกลมโดยจะดัดเหล็กเส้นเป็นรูปร่างเดียวกับพื้นที่หน้าตัดของเสาหรือคานที่จะใช้ มีลักษณะเป็นเส้นกลมผิวเรียบสามารถทำเป็นรูปทรงตามที่ลูกค้าต้องการได้ เช่น สามเหลี่ยม สี่เหลี่ยม ห้าเหลี่ยม หกเหลี่ยม วงกลม รูปตัวไอ ช่วยลดเวลา ลดแรงงาน ลดค่าใช้จ่ายได้อย่างมีประสิทธิภาพ",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
  },
  {
    _id: "24",
    img: ตะปู,
    productName: "ตะปูตอกไม้",
    description: "ตะปูชนิดนี้นิยมใช้ในงานไม้และงานก่อสร้างจะมีหลากหลายขนาด แข็งแรงทนทาน และมีความยาวที่ไม่เท่ากัน",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "25",
    img: เสาเอ็นทับหลัง,
    productName: "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป",
    description: "เหล็กเอ็นทับหลังสำเร็จรูป คือ ผลิตภัณฑ์ใหม่ล่าสุดในวงการก่อสร้าง ทั้งบ้านพัก คอนโดมิเนียม โรงแรม โรงงาน และอื่นๆ อีกมากมาย ซึ่งสามารถติดตั้งได้ง่ายและรวดเร็วทำให้ประหยัดเวลาในการทำงาน",
    des: "- แบบ 2 เส้น",
    des2: "- แบบ 3 เส้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "26",
    img: รั้วแรงดึง,
    productName: "รั้วแรงดึง (ตาข่ายถักปม)",
    description: "รั้วแรงดึง คือ รั้วที่ใช้ในการ ล้อมอาณาเขต แบ่งแขตแดน ใช้ล้อมสัตว์ ล้อมวัว ล้อมควาย ล้อมม้า ล้อมแกะ ล้อมแพะ และสัตว์หลายประเภท ซึ่งสามารถรับแรงกระแทกได้เป็นอย่างดี",
    cat: "ลวดตาข่ายต่างๆ",
  },
  {
    _id: "27",
    // img:  ,
    productName: "ลวดผูกเหล็ก",
    description: "ลวดผูกเหล็กหรือบางครั้งเรียกกันว่าเหล็กเบอร์ 18 คือ เหล็กเส้นที่มีขนาดเส้นผ่านศูนย์กลางเพียง 1.2 - 1.35 มิลลิเมตร มีความแข็งแรง ทนทาน แต่ก็มีความนิ่ม และเหนียว สามารถตัด ดัด ผูกยึดได้ จึงนำมาใช้เป็นส่วนประกอบในการผูกมัดเหล็กเสริมคอนกรีตอื่น ๆ เช่น เหล็กคาน เหล็กเสริมพื้น เหล็กปลอกเสา ปลอกคาน ไปจนถึงการผูกช่วงต่อเหล็กเส้น สำหรับการมาร์กจุดเชื่อมเหล็กเพื่อให้เกิดการยึดติดกันอย่างแน่นและแข็งแรงขึ้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "28",
    // img:  ,
    productName: "ลวดชุบสังกะสี",
    description: "ลวดชุบสังกะสี มีลักษณะเด่นหลักๆคือมีสีขาว แวววาว ผิวสวยงาม จึงทำให้ถูกเรียกอีกชื่อหนึ่งว่า ลวดขาว นอกจากนี้ยังมีคุณสมบัติป้องกันการขึ้นสนิมและทนทานการกัดกร่อนได้ด้วย",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "29",
    img:  เหล็กวงบ่อ,
    productName: "เหล็กวงบ่อ วงท่อ",
    description: "เหล็กวงท่อ ผลิตโดยนำเหล็กวัตถุดิบผ่านกระบวนการเข้าเครื่องจักรอัตโนมัติที่มีความแม่นยำ สำหรับผลิตวงท่อตามขนาดที่ต้องการมาเชื่อมต่อเป็นวงกลม ใช้ในการผลิตท่อคอนกรีตเสริมแรง",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "30",
    // img:  ,
    productName: "ตะแกรงเหล็กฉีก",
    description: "ตะแกรงเหล็กฉีก คือ ตะแกรงเหล็กชนิดหนึ่งที่ผลิตด้วยกรรมวิธีการนำแผ่นเหล็กมาดึงออกหรือยืดออกเพื่อให้เกิดเป็นลวดลายขึ้นมา โดยที่แต่ละมุมของลวดลายจะติดเนียนอย่างเป็นระเบียบเป็นเนื้อเดียวกันตลอดทั้งแผ่น คุณสมบัติเด่นคือมีความแข็งแรงทนทานสามารถรองรับน้ำหนักและแรงกดทับได้อย่างดี",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "31",
    // img:  ,
    productName: "เหล็กเพลทตัดสำเร็จ",
    description: "แผ่นเพลท คือ แผ่นเหล็กที่ตัดมาจากเหล็กแผ่นใหญ่ด้วยเครื่องตัดที่มีมาตรฐานสูงจากโรงงานให้มีขนาดเป็นวงกลมขนาดเล็ก เหมาะกับการใช้ปิดหัวเสา รองฐานเสา และงานตกแต่งอื่นๆ",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "32",
    // img:  ,
    productName: "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)",
    description: "ตะแกรงเหล็กเทพื้นสำเร็จรูปไวร์เมช หรือ ตะแกรงเหล็กกล้าเชื่อมติดเสริมคอนกรีต ผลิตโดยการนำลวดเหล็กรีดเย็นและถูกทอติดกันเป็นผืนให้มีลักษณะเหมือนตาราง ส่วนการเชื่อมอาร์กจะทำด้วยการใช้ไฟฟ้าทำให้จุดตัดทุกจุดกลายเป็นเนื้อเดียวกันอย่างสวยงาม (เพราะอยู่ในจุดหลอมละลาย) สามารถนำมาใช้แทนการผูกเหล็กเส้นธรรมดาทั่วไปได้เป็นอย่างดี ช่วยให้ประหยัดทั้งเวลาทำงานและค่าแรงงาน",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "33",
    // img: ,
    productName: "สังกะสีแผ่นเรียบ",
    description: "สังกะสีแผ่นเรียบ คือวัสดุที่เป็นแผ่นเหล็กซึ่งถูกเคลือบด้วยสังกะสีทั้งสองด้านโดยจะผ่านกระบวนการจุ่มร้อนอย่างต่อเนื่อง ซึ่งจะส่งผลให้มีชั้นสังกะสีเกาะติดแน่นกับเหล็กกล้าป้องกันการเกิดสนิมบนเนื้อเหล็กได้ดีขึ้น ทนต่อสภาพแวดล้อมได้มากขึ้น ยืดอายุการใช้งาน ช่วยเพิ่มความแข็งแกร่ง และยังทนทานต่อการใช้งานกลางแจ้งมากขึ้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "34",
    // img: ,
    productName: "เหล็กตัด หนวดกุ้ง",
    description: "เหล็กหนวดกุ้ง คือ เหล็กเส้นที่ยื่นออกมาจากโครงสร้างคอนกรีตเสริมเหล็กในส่วนต่างๆ เพื่อเพิ่มแรงยึดและรับแรงดึงระหว่างชิ้นส่วนสองส่วน เช่น รอยต่อของผนังกับเสาไม่ให้แยกตัวออกจากกัน ช่วยทำให้โครงสร้างแข็งแรงและยึดเกาะได้ดีขึ้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "35",
    // img: ,
    productName: "เหล็กจ๊อย (โดเวล)",
    description: "เหล็กจ๊อย คือ เหล็กที่ทำมาจากเหล็กเส้นกลม เป็นเหล็กที่ใช้ในการสร้างถนนคอนกรีตเพื่อเสริมรอยต่อเพื่อบังคับรอยแตกให้อยู่ในจุดที่กำหนด เหล็กจ๊อยจะเข้าไปทำให้คอนกรีตรับน้ำหนักได้ดีขึ้น ช่วยกระจายการรับน้ำหนัก และช่วยพยุงตัวไม่ให้คอนกรีตแผ่นใดแผ่นหนึ่งต้องรับน้ำหนักมากเกินไป",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "36",
    // img: ,
    productName: "เหล็ก 2 หุนลาย",
    description: "เหล็กเส้นกลม 2 หุน คือ เหล็กเส้นกลมที่ใช้สำหรับงานก่อสร้างที่รับแรงไม่มาก นิยมใช้ทำปลอกเสาและปลอกคานเหล็กในงานโครงสร้างเหล็กเส้นกลม เหล็กข้ออ้อย",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "37",
    img: ลวดตะปู,
    productName: "ลวดเหล็กตะปูรีดเย็น",
    description: "ลวดเหล็กตะปูรีดเย็น ผลิตโดยการนำเหล็กลวดรีดลดขนาดเส้นผ่านศูนย์กลาง ด้วยกระบวนการรีดเย็น เพื่อให้ได้ขนาดเส้นผ่านศูนย์กลางตามที่ต้องการและตรงตามมาตรฐานอุตสาหกรรมทำให้ได้ลวดเหล็กมีลักษณะกลม มีผิวเรียบ ปราศจากรอยขุดขีด ได้รูป  ไม่เป็นเหลี่ยม ไม่หยิกงอ",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "38",
    // img: ,
    productName: "รั้วเหล็ก ไวร์เมช",
    description: "รั้วไวร์เมช คือ รั้วที่ผลิตจากเหล็กรีดเย็นนำมาเชื่อมติดเป็นตะแกรงเหล็กแล้วชุบเคลือบด้วยสารกันสนิม เป็นรั้วที่สวยงามและทนทานต่อการสึกกร่อนสามารถติดตั้งได้ง่ายและรวดเร็ว ใช้สำหรับรั้วบ้าน โรงจอดรถ ฟิลม์อาคาร บันไดไม้สำเร็จรูป เป็นต้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "39",
    // img: ,
    productName: "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)",
    description: "เหล็กไวรอทหรือไวร์รอท คือ เหล็กกล้าที่มีคาร์บอนต่ำนำไปรีดร้อนกึ่งสำเร็จรูป มีลักษณะหน้าตัดทรงกลมโดยทั่วไปมักจะนำไปดึงเย็นต่อเพื่อนำไปใช้ในอุตสาหกรรมอื่นๆ เช่น นำไปทำเป็นตะปู ลวดหนาม ตะแกรง น็อต สกรู แต่ไม่เหมาะในการนำไปใช้เป็นเหล็กเชื่อมเพื่อเสริมคอนกรีต",
    cat: "สินค้าทั่วไป",
  }
];

// =================== ประเภทสินค้าหน้า Shop =======================

// export const shopcategory = [
//   {
//     _id: "1",
//     img: IMPRIMANTE_PANTUM_CP2200DW,
//     productName: "เหล็กปลอก ทุกชนิด Bender wire",
//     //   productName: "สินค้าประเภทลวดตาข่าย",
//     // price: "220.00",
//     // color: "Black",
//     // badge: true,
//     // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
//     // cat: "สินค้าประเภทลวดตาข่าย",
//     // cat: "เหล็กปลอก ทุกชนิด Bender wire",
//     link: "/category1",
//   },
//   {
//     _id: "2",
//     img: IMPRIMANTE_PANTUM_BM5100FDW,
//     productName: "ตาข่ายทอ chain link",
//     // productName: "สินค้าประเภทลวด",
//     // price: "220.00",
//     // color: "Black",
//     // badge: true,
//     // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
//     // cat: "สินค้าประเภทลวด",
//     link: "/category2",
//   },
//   {
//     _id: "3",
//     img: IMPRIMANTE_PANTUM_BP5100DN,
//     productName: "ลวดหนาม Barbed wire",
//     // productName: "สินค้าประเภทเหล็ก",
//     // price: "220.00",
//     // color: "Black",
//     // badge: true,
//     // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
//     // cat: "สินค้าประเภทเหล็ก",
//     link: "/category3",
//   },
//   {
//     _id: "4",
//     img: IMPRIMANTE_PANTUM_M6609N,
//     productName: "ลวดตาข่ายต่างๆ",
//     // productName: "สินค้าประเภทตะแกรงเหล็ก",
//     // price: "220.00",
//     // color: "Black",
//     // badge: true,
//     // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
//     // cat: "สินค้าประเภทตะแกรงเหล็ก",
//     link: "/category4",
//   },
//   {
//     _id: "5",
//     img: ตะปู,
//     productName: "สินค้าทั่วไป",
//     // productName: "สินค้าประเภทตะปู",
//     // price: "220.00",
//     // color: "Black",
//     // badge: true,
//     // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
//     // cat: "สินค้าประเภทตะปู",
//     link: "/category5",
//   },
//   {
//     _id: "6",
//     img: IMPRIMANTE_PANTUM_P3300DN,
//     productName: "สินค้าประเภทสำเร็จรูป",
//     // price: "220.00",
//     // color: "Black",
//     // badge: true,
//     // des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
//     // cat: "สินค้าประเภทสำเร็จรูป",
//     link: "/category6",
//   },
// ];

// =================== ประเภท 1 =================================

export const cat1 = [
//   {
//     _id: "1",
//     img: เหล็กปลอกเสาปลอกคาน,
//     productName: "ปลอกเสา-ปลอกคาน",
//     // price: "220.00",
//     // color: "Black",
//     // badge: true,
//     des: "รับสั่งทำตามขนาด",
//     cat: "เหล็กปลอก ทุกชนิด Bender wire",
//     // cat: "สินค้าประเภทเหล็ก",
//     // link: "/category3"
//     hideButtons: true,
//   },

{
  _id: "1",
  img: ปลอกเสาปลอกคาน,
  productName: "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)",
  description: "เหล็กปลอกเสา ปลอกคาน เป็นวัสดุก่อสร้างชนิดหนึ่งที่มีการผลิตจากเหล็กเส้นกลมหรือเหล็กเส้นข้ออ้อยที่มีกำลังดึงสูง นำมาดัดโค้งเป็นรูปทรงต่างๆ เพื่อเสริมความแข็งแรงให้กับคอนกรีต ช่วยให้คอนกรีตสามารถรับแรงกดและแรงดึงได้ดียิ่งขึ้น",
  des: "- 2 หุน",
  des2: "- 3 หุน",
  cat: "เหล็กปลอก ทุกชนิด Bender wire",
  // link: "/category3"
  // hideButtons: true,
},
  {
    _id: "2",
    img: ปลอกสามเหลี่ยม,
    productName: "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)",
    description : "เหล็กปลอก คือ เหล็กที่ใช้เสริมอยู่ภายในเสาหรือคานในโครงสร้างคอนกรีตเสริมเหล็ก เหล็กที่ใช้ผลิตส่วนมากคือเหล็กเส้นกลมโดยจะดัดเหล็กเส้นเป็นรูปร่างเดียวกับพื้นที่หน้าตัดของเสาหรือคานที่จะใช้ มีลักษณะเป็นเส้นกลมผิวเรียบสามารถทำเป็นรูปทรงตามที่ลูกค้าต้องการได้ เช่น สามเหลี่ยม สี่เหลี่ยม ห้าเหลี่ยม หกเหลี่ยม วงกลม รูปตัวไอ ช่วยลดเวลา ลดแรงงาน ลดค่าใช้จ่ายได้อย่างมีประสิทธิภาพ",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
    // link: "/category3"
    // hideButtons: true,
  },
  {
    _id: "3",
    img: ปลอกสี่เหลี่ยม,
    productName: "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)",
    description : "เหล็กปลอก คือ เหล็กที่ใช้เสริมอยู่ภายในเสาหรือคานในโครงสร้างคอนกรีตเสริมเหล็ก เหล็กที่ใช้ผลิตส่วนมากคือเหล็กเส้นกลมโดยจะดัดเหล็กเส้นเป็นรูปร่างเดียวกับพื้นที่หน้าตัดของเสาหรือคานที่จะใช้ มีลักษณะเป็นเส้นกลมผิวเรียบสามารถทำเป็นรูปทรงตามที่ลูกค้าต้องการได้ เช่น สามเหลี่ยม สี่เหลี่ยม ห้าเหลี่ยม หกเหลี่ยม วงกลม รูปตัวไอ ช่วยลดเวลา ลดแรงงาน ลดค่าใช้จ่ายได้อย่างมีประสิทธิภาพ",
    cat: "เหล็กปลอก ทุกชนิด Bender wire",
    // hideButtons: true,
  },
  // {
  //   _id: "202",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "ตาข่ายสาน",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   hideButtons: true,
  //   cat: "สินค้าประเภทลวดตาข่าย",
  // },
  // {
  //   _id: "204",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "เหล็กกล่องเกเบี้ยน (Gabion)",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทลวดตาข่าย",
  //   hideButtons: true,
  // },
];

// =================== ประเภท 2 =================================

export const cat2 = [
  {
    _id: "201",
    img: ลวดตาข่ายทอ,
    productName: "ลวดตาข่ายทอ (ตาข่ายข้าวหลามตัด)",
    hideButtons: true,
    description: "ลวดตาข่ายทอ คือ ตาข่ายที่ใช้เหล็กลวดมาถักกันเป็นช่องๆ โดยแต่ละช่องของตะแกรงจะถักเป็นรูปสี่เหลี่ยมขนมเปียกปูน จึงเรียกได้หลายชื่อ เช่น ตาข่ายถัก,ตะแกรงถัก,ตาข่ายสี่เหลี่ยมขนมเปียกปูนถักร้อยเป็นเกลียว ตาสี่เหลี่ยมขนมเปียกปูนนั่นเอง",
    cat: "สินค้าประเภทลวดตาข่าย",
    // link: "/category1",
  },
  // {
  //   _id: "202",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "ลวดชุบสังกะสี",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทลวด",
  //   hideButtons: true,
  // },
  // {
  //   _id: "203",
  //   img: กิ๊บลวดหนาม2Copy,
  //   productName: "กิ๊บลวดหนาม",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทลวด",
  //   hideButtons: true,
  // },
  // {
  //   _id: "204",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "ลวดเหล็กตัดตรง",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทลวด",
  //   hideButtons: true,
  // },
  // {
  //   _id: "205",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "ลวดเหล็ก (ลวดตะปู)",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทลวด",
  //   hideButtons: true,
  // },
  // {
  //   _id: "206",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "ลวดผูกเหล็ก ( Black Iron Wire )",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทลวด",
  //   hideButtons: true,
  // },
];

// =================== ประเภท 3 =================================

export const cat3 = [
  {
    _id: "1",
    img: ลวดหนาม,
    productName: "ลวดหนาม",
    description: "ลวดหนาม คือ เส้นลวดตีเกลียวที่มีหนามแหลมคม เกิดจากการขึ้นรูปพันเป็นเกลียวของเส้นลวดชุบสังกะสี ใช้เพื่อเพิ่มความปลอดภัยและป้องกันการบุกรุกในพื้นที่ที่ต้องการรักษาความปลอดภัย",
    cat: "ลวดหนาม Barbed wire",
    // link: "/category2",
    // hideButtons: true,
  },
  // {
  //   _id: "2",
  //   img: ลวดหนาม2,
  //   productName: "ลวดหนาม (5 kg)",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "รับสั่งทำตามขนาด",
  //   // cat: "สินค้าประเภทลวด",
  //   cat: "ลวดหนาม Barbed wire",
  //   link: "/category2",
  //   hideButtons: true,
  // },
  // {
  //   _id: "3",
  //   img: ลวดหนาม3,
  //   productName: "ลวดหนาม (6 kg)",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "รับสั่งทำตามขนาด",
  //   // cat: "สินค้าประเภทลวด",
  //   cat: "ลวดหนาม Barbed wire",
  //   link: "/category2",
  //   hideButtons: true,
  // },
  // {
  //   _id: "203",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "เหล็กเพลทตัดสำเร็จตามขนาด",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทเหล็ก",
  //   hideButtons: true,
  // },
  // {
  //   _id: "204",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "เหล็กรูปพรรณ",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทเหล็ก",
  //   hideButtons: true,
  // },
  // {
  //   _id: "205",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "เหล็กเส้นกลม",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทเหล็ก",
  //   hideButtons: true,
  // },
  // {
  //   _id: "206",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "เหล็กเส้นข้ออ้อย",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทเหล็ก",
  //   hideButtons: true,
  // },
  // {
  //   _id: "207",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "เหล็กลวด",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทเหล็ก",
  //   hideButtons: true,
  // },
  // {
  //   _id: "208",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "เหล็กลวดวงบ่อ",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทเหล็ก",
  //   hideButtons: true,
  // },
  // {
  //   _id: "209",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "เหล็กวงท่อ",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   cat: "สินค้าประเภทเหล็ก",
  //   hideButtons: true,
  // },
];

// =================== ประเภท 4 =================================

export const cat4 = [
  // {
  //   _id: "201",
  //   img: IMPRIMANTE_PANTUM_M6559N,
  //   productName: "ตะแกรงเหล็กกล้าเชื่อมติดเสริมคอนกรีต (ไวร์เมช) Wire Mesh",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "รับสั่งทำตามขนาด",
  //   cat: "สินค้าประเภทตะแกรงเหล็ก",
  //   // link: "/category3"
  //   hideButtons: true,
  // },
  {
    _id: "1",
    img: ตาข่ายสาน3,
    productName: "ตาข่ายสานหยิก (ตาข่ายตัวหนอน)",
    description: "ตาข่ายลวดสานเกิดจากการนำลวดเป็นม้วนซึ่งเป็นลวดตรง มาเข้าเครื่องบดลวดให้เป็นหยักคล้ายเส้นมาม่า แล้วตัดออกเมื่อได้ตามขนาดที่ต้องการ หลังจากนั้นจึงนำลวดที่หยิกเป็นเส้นๆเหล่านี้มาสานเข้ากันเป็นตาข่ายลวดสานโดยที่อาจเข้าเครื่องสานหรือใช้มือคนสานก็ได้",
    // link: "/category4",
    cat: "ลวดตาข่ายต่างๆ",
    // hideButtons: true,
  },
  {
    _id: "2",
    img: กรงไก่,
    productName: "ตาข่ายสี่เหลี่ยม (กรงไก่)",
    description: "ลวดตาข่ายกรงไก่ คือ ลวดตาข่ายตาสี่เหลี่ยมลวดที่มีการนำเอาเส้นลวดมาขึ้นรูปด้วยเครื่องจักรและนำมาเชื่อมให้ได้ขนาดตามช่องที่ต้องการ หลังจากนั้นนำแผ่นตาข่ายไปเข้ากระบวนการชุบกัลวาไนซ์ หรือ ชุบสังกะสี โดยปกติแล้วจะนำมาใช้งานทำเป็นกรงล้อมไก่ ล้อมสัตว์",
    des: '- ตา 1/2" (4 หุน)',
    des2: '- ตา 3/4" (8 หุน)',
    des3: '- ตา 1" (1 นิ้ว)',
    // link: "/category4",
    cat: "ลวดตาข่ายต่างๆ",
    // hideButtons: true,
  },
  // {
  //   _id: "3",
  //   img: ตาข่ายกรงไก่2,
  //   productName: "ตาข่ายกรงไก่ (1\" 22#)",
  //   // price: "220.00",
  //   // color: "Black",
  //   // badge: true,
  //   // des: "ลวดตาข่ายถัก ลวดตาข่ายทอ ลวดตาข่ายข้าวหลามตัด",
  //   link: "/category4",
  //   cat: "ลวดตาข่ายต่างๆ",
  //   hideButtons: true,
  // },
  {
    _id: "3",
    img: รั้วแรงดึง,
    productName: "รั้วแรงดึง (ตาข่ายถักปม)",
    description: "รั้วแรงดึง คือ รั้วที่ใช้ในการ ล้อมอาณาเขต แบ่งแขตแดน ใช้ล้อมสัตว์ ล้อมวัว ล้อมควาย ล้อมม้า ล้อมแกะ ล้อมแพะ และสัตว์หลายประเภท ซึ่งสามารถรับแรงกระแทกได้เป็นอย่างดี",
    // link: "/category4",
    cat: "ลวดตาข่ายต่างๆ",
    // hideButtons: true,
  },
];

// =================== ประเภท 5 =================================

export const cat5 = [
  {
    _id: "1",
    img: ตะปู,
    productName: "ตะปูตอกไม้",
    description: "ตะปูชนิดนี้นิยมใช้ในงานไม้และงานก่อสร้างจะมีหลากหลายขนาด แข็งแรงทนทาน และมีความยาวที่ไม่เท่ากัน",
    cat: "สินค้าทั่วไป",
    // link: "/category3"
    // hideButtons: true,
  },
  {
    _id: "2",
    img: เสาเอ็นทับหลัง,
    productName: "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป",
    description: "เหล็กเอ็นทับหลังสำเร็จรูป คือผลิตภัณฑ์ใหม่ล่าสุดในวงการก่อสร้าง ทั้งบ้านพัก คอนโดมิเนียม โรงแรม โรงงาน และอื่นๆ อีกมากมาย ซึ่งสามารถติดตั้งได้ง่ายและรวดเร็วทำให้ประหยัดเวลาในการทำงาน",
    des: "- แบบ 2 เส้น",
    des2: "- แบบ 3 เส้น",
    cat: "สินค้าทั่วไป",
    // link: "/category3"
    // hideButtons: true,
  },
  {
    _id: "3",
    // img:  ,
    productName: "ลวดผูกเหล็ก",
    description: "ลวดผูกเหล็กหรือบางครั้งเรียกกันว่าเหล็กเบอร์ 18 คือ เหล็กเส้นที่มีขนาดเส้นผ่านศูนย์กลางเพียง 1.2 - 1.35 มิลลิเมตร มีความแข็งแรง ทนทาน แต่ก็มีความนิ่ม และเหนียว สามารถตัด ดัด ผูกยึดได้ จึงนำมาใช้เป็นส่วนประกอบในการผูกมัดเหล็กเสริมคอนกรีตอื่น ๆ เช่น เหล็กคาน เหล็กเสริมพื้น เหล็กปลอกเสา ปลอกคาน ไปจนถึงการผูกช่วงต่อเหล็กเส้น สำหรับการมาร์กจุดเชื่อมเหล็กเพื่อให้เกิดการยึดติดกันอย่างแน่นและแข็งแรงขึ้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "4",
    // img:  ,
    productName: "ลวดชุบสังกะสี",
    description: "ลวดชุบสังกะสี มีลักษณะเด่นหลักๆคือมีสีขาว แวววาว ผิวสวยงาม จึงทำให้ถูกเรียกอีกชื่อหนึ่งว่า ลวดขาว นอกจากนี้ยังมีคุณสมบัติป้องกันการขึ้นสนิมและทนทานการกัดกร่อนได้ด้วย",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "5",
    img:  เหล็กวงบ่อ,
    productName: "เหล็กวงบ่อ วงท่อ",
    description: "เหล็กวงท่อ ผลิตโดยนำเหล็กวัตถุดิบผ่านกระบวนการเข้าเครื่องจักรอัตโนมัติที่มีความแม่นยำ สำหรับผลิตวงท่อตามขนาดที่ต้องการมาเชื่อมต่อเป็นวงกลม ใช้ในการผลิตท่อคอนกรีตเสริมแรง",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "6",
    // img:  ,
    productName: "ตะแกรงเหล็กฉีก",
    description: "ตะแกรงเหล็กฉีก คือ ตะแกรงเหล็กชนิดหนึ่งที่ผลิตด้วยกรรมวิธีการนำแผ่นเหล็กมาดึงออกหรือยืดออกเพื่อให้เกิดเป็นลวดลายขึ้นมา โดยที่แต่ละมุมของลวดลายจะติดเนียนอย่างเป็นระเบียบเป็นเนื้อเดียวกันตลอดทั้งแผ่น คุณสมบัติเด่นคือมีความแข็งแรงทนทานสามารถรองรับน้ำหนักและแรงกดทับได้อย่างดี",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "7",
    // img:  ,
    productName: "เหล็กเพลทตัดสำเร็จ",
    description: "แผ่นเพลท คือ แผ่นเหล็กที่ตัดมาจากเหล็กแผ่นใหญ่ด้วยเครื่องตัดที่มีมาตรฐานสูงจากโรงงานให้มีขนาดเป็นวงกลมขนาดเล็ก เหมาะกับการใช้ปิดหัวเสา รองฐานเสา และงานตกแต่งอื่นๆ",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "8",
    // img:  ,
    productName: "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)",
    description: "ตะแกรงเหล็กเทพื้นสำเร็จรูปไวร์เมช หรือ ตะแกรงเหล็กกล้าเชื่อมติดเสริมคอนกรีต ผลิตโดยการนำลวดเหล็กรีดเย็นและถูกทอติดกันเป็นผืนให้มีลักษณะเหมือนตาราง ส่วนการเชื่อมอาร์กจะทำด้วยการใช้ไฟฟ้าทำให้จุดตัดทุกจุดกลายเป็นเนื้อเดียวกันอย่างสวยงาม (เพราะอยู่ในจุดหลอมละลาย) สามารถนำมาใช้แทนการผูกเหล็กเส้นธรรมดาทั่วไปได้เป็นอย่างดี ช่วยให้ประหยัดทั้งเวลาทำงานและค่าแรงงาน",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "9",
    // img: ,
    productName: "สังกะสีแผ่นเรียบ",
    description: "สังกะสีแผ่นเรียบ คือวัสดุที่เป็นแผ่นเหล็กซึ่งถูกเคลือบด้วยสังกะสีทั้งสองด้านโดยจะผ่านกระบวนการจุ่มร้อนอย่างต่อเนื่อง ซึ่งจะส่งผลให้มีชั้นสังกะสีเกาะติดแน่นกับเหล็กกล้าป้องกันการเกิดสนิมบนเนื้อเหล็กได้ดีขึ้น ทนต่อสภาพแวดล้อมได้มากขึ้น ยืดอายุการใช้งาน ช่วยเพิ่มความแข็งแกร่ง และยังทนทานต่อการใช้งานกลางแจ้งมากขึ้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "10",
    // img: ,
    productName: "เหล็กตัด หนวดกุ้ง",
    description: "เหล็กหนวดกุ้ง คือ เหล็กเส้นที่ยื่นออกมาจากโครงสร้างคอนกรีตเสริมเหล็กในส่วนต่างๆ เพื่อเพิ่มแรงยึดและรับแรงดึงระหว่างชิ้นส่วนสองส่วน เช่น รอยต่อของผนังกับเสาไม่ให้แยกตัวออกจากกัน ช่วยทำให้โครงสร้างแข็งแรงและยึดเกาะได้ดีขึ้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "11",
    // img: ,
    productName: "เหล็กจ๊อย (โดเวล)",
    description: "เหล็กจ๊อย คือ เหล็กที่ทำมาจากเหล็กเส้นกลม เป็นเหล็กที่ใช้ในการสร้างถนนคอนกรีตเพื่อเสริมรอยต่อเพื่อบังคับรอยแตกให้อยู่ในจุดที่กำหนด เหล็กจ๊อยจะเข้าไปทำให้คอนกรีตรับน้ำหนักได้ดีขึ้น ช่วยกระจายการรับน้ำหนัก และช่วยพยุงตัวไม่ให้คอนกรีตแผ่นใดแผ่นหนึ่งต้องรับน้ำหนักมากเกินไป",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "12",
    // img: ,
    productName: "เหล็ก 2 หุนลาย",
    description: "เหล็กเส้นกลม 2 หุน คือ เหล็กเส้นกลมที่ใช้สำหรับงานก่อสร้างที่รับแรงไม่มาก นิยมใช้ทำปลอกเสาและปลอกคานเหล็กในงานโครงสร้างเหล็กเส้นกลม เหล็กข้ออ้อย",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "13",
    img: ลวดตะปู,
    productName: "ลวดเหล็กตะปูรีดเย็น",
    description: "ลวดเหล็กตะปูรีดเย็น ผลิตโดยการนำเหล็กลวดรีดลดขนาดเส้นผ่านศูนย์กลาง ด้วยกระบวนการรีดเย็น เพื่อให้ได้ขนาดเส้นผ่านศูนย์กลางตามที่ต้องการและตรงตามมาตรฐานอุตสาหกรรมทำให้ได้ลวดเหล็กมีลักษณะกลม มีผิวเรียบ ปราศจากรอยขุดขีด ได้รูป  ไม่เป็นเหลี่ยม ไม่หยิกงอ",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "14",
    // img: ,
    productName: "รั้วเหล็ก ไวร์เมช",
    description: "รั้วไวร์เมช คือ รั้วที่ผลิตจากเหล็กรีดเย็นนำมาเชื่อมติดเป็นตะแกรงเหล็กแล้วชุบเคลือบด้วยสารกันสนิม เป็นรั้วที่สวยงามและทนทานต่อการสึกกร่อนสามารถติดตั้งได้ง่ายและรวดเร็ว ใช้สำหรับรั้วบ้าน โรงจอดรถ ฟิลม์อาคาร บันไดไม้สำเร็จรูป เป็นต้น",
    cat: "สินค้าทั่วไป",
  },
  {
    _id: "15",
    // img: ,
    productName: "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)",
    description: "เหล็กไวรอทหรือไวร์รอท คือ เหล็กกล้าที่มีคาร์บอนต่ำนำไปรีดร้อนกึ่งสำเร็จรูป มีลักษณะหน้าตัดทรงกลมโดยทั่วไปมักจะนำไปดึงเย็นต่อเพื่อนำไปใช้ในอุตสาหกรรมอื่นๆ เช่น นำไปทำเป็นตะปู ลวดหนาม ตะแกรง น็อต สกรู แต่ไม่เหมาะในการนำไปใช้เป็นเหล็กเชื่อมเพื่อเสริมคอนกรีต",
    cat: "สินค้าทั่วไป",
  }
];

// =================== ประเภท 6 =================================

// export const cat6 = [
//   {
//     _id: "201",
//     img: เสาเอ็นทับหลัง,
//     productName: "เหล็กเสาเอ็น-ทับหลังสำเร็จรูป",
//     description: "เหล็กเอ็นทับหลังสำเร็จรูป คือผลิตภัณฑ์ใหม่ล่าสุดในวงการก่อสร้าง ทั้งบ้านพัก คอนโดมิเนียม โรงแรม โรงงาน และอื่นๆ อีกมากมาย ซึ่งสามารถติดตั้งได้ง่ายและรวดเร็วทำให้ประหยัดเวลาในการทำงาน",
//     des: "- แบบ 2 เส้น",
//     des2: "- แบบ 3 เส้น",
//     cat: "สินค้าประเภทสำเร็จรูป",
//     // link: "/category3"
//     // hideButtons: true,
//   },
// ];

// =================== PaginationItems Start here ===============

// export const paginationItems = [
//   {
//     _id: "201",
//     img: IMPRIMANTE_PANTUM_CP2200DW,
//     productName: "สินค้าประเภทลวดตาข่าย",
//     price: "35.00",
//     color: "Blanc",
//     badge: true,
//     brand: "Pantum",
//     des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
//     cat: "สินค้าประเภทลวดตาข่าย",
//     pdf: pdf1,
//     ficheTech: [
//       { label: "Technology ", value: "Electrophotographic monochrome laser " },
//       { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

//       { label: "First print out time ", value: "Less than 7.8s       " },
//       { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
//       {
//         label: "Recommended monthly volume Resolution(dpi) ",
//         value: "700 pages ",
//       },
//       { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
//       { label: "Printer  ", value: "Max. 1,2   " },
//       { label: "galass  ", value: "Max. 1,2   " },
//     ],
//   },
//   {
//     _id: "202",
//     img: IMPRIMANTE_PANTUM_BM5100FDW,
//     productName: "สินค้าประเภทลวด",
//     price: "450",
//     color: "Blanc",
//     badge: true,
//     brand: "Pantum",
//     des: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
//     cat: "สินค้าประเภทลวด",
//     pdf: pdf1,
//     ficheTech: [
//       { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
//       { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

//       {
//         label: "Nombre de pages mensuel recommandé",
//         value: "750 à 4,000 Pages",
//       },
//       { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
//       {
//         label: "Langage d'impression ",
//         value: "PCL5e, PCL6, PS        ",
//       },
//       { label: "Vitesse du processeur", value: "1.2 GHz" },
//       { label: "Mémoire", value: "512 MB" },
//       {
//         label: "Panneau de commande ",
//         value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
//       },
//       { label: "Impression recto-verso automatique      ", value: "Oui" },
//       {
//         label: "Autres fonctions d'impression      ",
//         value:
//           "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
//       },
//       { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
//       {
//         label: "Temps de sortie de la première page",
//         value: "Plateau : moins de 10 s ADF : moins de 11 s",
//       },
//     ],
//   },

//   {
//     _id: "203",
//     img: IMPRIMANTE_PANTUM_BP5100DN,
//     productName: "สินค้าประเภทเหล็ก",
//     price: "450",
//     color: "Blanc",
//     badge: true,
//     brand: "Pantum",
//     des: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
//     cat: "สินค้าประเภทเหล็ก",
//     pdf: pdf1,
//     ficheTech: [
//       { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
//       { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

//       {
//         label: "Nombre de pages mensuel recommandé",
//         value: "750 à 4,000 Pages",
//       },
//       { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
//       {
//         label: "Langage d'impression ",
//         value: "PCL5e, PCL6, PS        ",
//       },
//       { label: "Vitesse du processeur", value: "1.2 GHz" },
//       { label: "Mémoire", value: "512 MB" },
//       {
//         label: "Panneau de commande ",
//         value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
//       },
//       { label: "Impression recto-verso automatique      ", value: "Oui" },
//       {
//         label: "Autres fonctions d'impression      ",
//         value:
//           "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
//       },
//       { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
//       {
//         label: "Temps de sortie de la première page",
//         value: "Plateau : moins de 10 s ADF : moins de 11 s",
//       },
//     ],
//   },
//   {
//     _id: "204",
//     img: IMPRIMANTE_PANTUM_M6609N,
//     productName: "สินค้าประเภทตะแกรงเหล็ก",
//     price: "450",
//     color: "Blanc",
//     badge: true,
//     brand: "Pantum",
//     des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
//     cat: "สินค้าประเภทตะแกรงเหล็ก",
//     pdf: pdf1,
//     ficheTech: [
//       { label: "gtin	", value: "M6559N      " },
//       { label: "Marque	", value: "PANTUM      " },
//       { label: "fonctions	", value: "Monofonction      " },
//       { label: "Technologie d impression		", value: "Laser      " },
//       { label: "Impression	", value: "Noir & Blanc      " },
//       { label: "Vitesse du Processeur		", value: "600MHz      " },
//       {
//         label: "Capacité papier		",
//         value: "Capacité standard: 1 600 pages      ",
//       },
//       { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
//       { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
//       { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
//       {
//         label: "Résolution d impression		",
//         value: "Max. 1 200 × 1 200 ppp      ",
//       },
//       {
//         label: "Résolution d'impression Noir		",
//         value: "Max. 1 200 × 1 200 ppp      ",
//       },
//       { label: "formats		", value: "A4      " },
//       { label: "Sortie papier		", value: "100 pages      " },
//       {
//         label: "Vitesse de Copie Noir Blanc		",
//         value: "22 ppm (A4) / 23 ppm (Lettre)      ",
//       },
//       { label: "Poids		", value: "4,75 kg      " },
//     ],
//   },

//   {
//     _id: "205",
//     img: IMPRIMANTE_PANTUM_M6559N,
//     productName: "สินค้าประเภทตะปู",
//     price: "450",
//     color: "Blanc",
//     badge: true,
//     brand: "Pantum",
//     des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
//     cat: "สินค้าประเภทตะปู",
//     pdf: pdf1,
//     ficheTech: [
//       { label: "gtin	", value: "M6559N      " },
//       { label: "Marque	", value: "PANTUM      " },
//       { label: "fonctions	", value: "Monofonction      " },
//       { label: "Technologie d impression		", value: "Laser      " },
//       { label: "Impression	", value: "Noir & Blanc      " },
//       { label: "Vitesse du Processeur		", value: "600MHz      " },
//       {
//         label: "Capacité papier		",
//         value: "Capacité standard: 1 600 pages      ",
//       },
//       { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
//       { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
//       { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
//       {
//         label: "Résolution d impression		",
//         value: "Max. 1 200 × 1 200 ppp      ",
//       },
//       {
//         label: "Résolution d'impression Noir		",
//         value: "Max. 1 200 × 1 200 ppp      ",
//       },
//       { label: "formats		", value: "A4      " },
//       { label: "Sortie papier		", value: "100 pages      " },
//       {
//         label: "Vitesse de Copie Noir Blanc		",
//         value: "22 ppm (A4) / 23 ppm (Lettre)      ",
//       },
//       { label: "Poids		", value: "4,75 kg      " },
//     ],
//   },

//   {
//     _id: "206",
//     img: IMPRIMANTE_PANTUM_P3300DN,
//     productName: "สินค้าประเภทสำเร็จรูป",
//     price: "450",
//     color: "Blanc",
//     badge: true,
//     brand: "Pantum",
//     des: "Imprimante Laser PANTUM P3300DN - Fonctions: Impression - Technologie d'impression: Laser - Format Papier: A4-A5 - Vitesse d’impression: 33 ppm (A4) / 35 ppm (Lettre) - Résolution d'impression: Jusqu'à 1200 x 1200 ppp - Papier Bac d'alimentation: 250 pages - Sortie papier: 150 page - Mémoire: 256 Mo - Impression recto verso: Automatique - Heure de la première impression: Moins de 8.2s  - Taille du support: A4, A5, JIS B5, IS0 B5, A6, Lettre, Légal, Exécutif, Folio, Oficio, Déclaration, Carte postale japonaise, ZL, Big 16K, Big 32K, 16K, 32K, B6， Yougata4, Carte postale, Younaga3, Nagagata3, Yougata2 - Connecteurs: USB2.0 haut débit / Ethernet：IEEE 802.3 10/100Base-Tx - Dimensions: 354 x 334 x 232mm - Poids: 6,8 kg - Couleur: Blanc",
//     cat: "สินค้าประเภทสำเร็จรูป",
//     pdf: pdf1,
//     ficheTech: [
//       { label: "gtin	", value: "P3300DN      " },
//       { label: "fonctions	", value: "Monofonction      " },
//       { label: "Mémoire	", value: "256MO      " },
//       { label: "Technologie d impression		", value: "laser      " },
//       { label: "Impression		", value: "Noir & Blanc      " },
//       { label: "Connectivite		", value: "Réseau      " },
//       { label: "Vitesse du Processeur		", value: "350 MHz      " },
//       { label: "Type ecran		", value: "LCD 2 lignes      " },
//       {
//         label: "Consommation d énergie		",
//         value:
//           "Impression : 525 W en moyenne Veille : 50 W en veille : moins de 2 W      ",
//       },
//       {
//         label: "Gestion d entrée Papier Standard		",
//         value: "Papier Bac d'alimentation: 250pages      ",
//       },
//       { label: "Premiére Page Imprimée		", value: "Moins de 8,2 secondes      " },
//       {
//         label: "Vitesse d impression Noir		",
//         value: "33 ppm (A4) / 35 ppm (Lettre)      ",
//       },
//       { label: "Cycle d utilisation Mensuel		", value: "60000pages      " },
//       {
//         label: "Résolution d impression		",
//         value: "1 200 x 1 200 dpi (maximum)      ",
//       },
//       { label: "formats	", value: "A4      " },
//       {
//         label: "Connecteurs		",
//         value: "USB2.0 haut débit / Ethernet：IEEE 802.3 10/100Base-Tx      ",
//       },
//       { label: "Fonctionnalités		", value: "Impression      " },
//       {
//         label: "Volume de Pages Mensuel Recommandé		",
//         value: "750 à 3 500 pages      ",
//       },
//       { label: "Dimensions		", value: "354 x 334 x 232mm      " },
//       { label: "Garantie	", value: "1ANS      " },
//     ],
//   },

//   // =================== imprimante hp =================

//   // {
//   //   _id: "hp1",
//   //   img: hp1,
//   //   productName:
//   //     "IMPRIMANTE HP JET D'ENCRE HP SMART TANK 516 COULEUR MFP 3EN1 A4 WIFI",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Hp",
//   //   des: "Desc : Imprimante Jet D'encre HP SMART TANK 516 3en1 Couleur 3YW70A - Fonction: Impression, Copie, Numérisation - Technologie d'impression: jet d'encre - Vitesse d'impression Noir : Jusqu'à 22 ppm - Vitesse d’impression Couleur : Jusqu'à 16 ppm - Résolution d'impression Couleur : 1200x1200dpi - Format Papier : A4 - Capacité Papier : 100 feuilles -  Cycle d'utilisation (mensuel, A4) : Jusqu'à 1000pages - Connectivité: USB 2.0 haute vitesse, Wi-Fi, Bluetooth LE -  Dimensions: 447 x 373 x 158 mm - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "3YW70A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Ecran", value: "LCD" },
//   //     {
//   //       label: "Taille de L écran cm",
//   //       value: "Affichage LCD 7 segments + icône 5,08 cm (2 pouces)",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Technologie d impression", value: "Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "formats", value: "A4" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 22 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 16 ppm" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Mémoire", value: "256 Mo" },
//   //     {
//   //       label: "Qualité d impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 ppp",
//   //     },
//   //     {
//   //       label: "Qualité d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 ppp",
//   //     },
//   //     { label: "Résolution d impression Couleur", value: "1200x1200dpi" },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Connectivite", value: "USB 2.0, WiFi" },
//   //     { label: "Capacité papier", value: "100 feuilles" },
//   //     { label: "Cycle d utilisation Mensuel", value: "Jusqu'à 1000 pages" },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "0,12 Watts (Arrêt manuel), 3,12 Watts (Prêt), 0,75 Watt (Veille) 5",
//   //     },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "Imprimante HP Smart Tank 516, Bouteilles d'encre: 3 x HP GT53XL (noir), 3 x HP GT52 (cyan, magenta et jaune), Notice de précaution pour l'encre; Fiche pour le ré-emballage et réglementaire RoH-EAC; Cordon d'alimentation, Guide d'installation; Notice PT",
//   //     },
//   //     { label: "Poids", value: "5,14 kg" },
//   //     { label: "Dimensions", value: "447 x 373 x 158 mm" },
//   //     { label: "Couleur", value: "Noir et Bleu" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },

//   // {
//   //   _id: "hp2",
//   //   img: hp2,
//   //   productName: "IMPRIMANTE HP INK TANK WIRELESS 415 ALL-IN-ONE",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Hp",
//   //   des: "Desc : Imprimante Multifonction Jet d'encre 3 en 1 à réservoir intégré - Impression, numérisation, copie, sans fil - Résolution d'impression: Jusqu'à 4800 x 1200 dpi - Vitesse d'impression Couleur Jusqu'à 15 ppm -Vitesse d'impression N et B Jusqu'à 18 ppm - Résolution du scanner: 1200 x 1200 dpi - Format A4 - Interface USB - Bac d'alimentation de 60 feuilles - Dimensions: 525 x 310 x 158 mm - Garantie 1 an (+ Extension de Garantie 2 Ans ) + 5 Bouteilles",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [],
//   // },

//   // {
//   //   _id: "hp3",
//   //   img: hp3,
//   //   productName: "IMPRIMANTE HP INK TANK WIRELESS 415 ALL-IN-ONE",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Hp",
//   //   des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "Z4B04A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "Mémoire", value: "Non" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
//   //     { label: "Vitesse du Processeur", value: "360 MHz" },
//   //     {
//   //       label: "Impression sans bordure",
//   //       value: "Oui, jusqu’à 210 x 297 mm (A4)",
//   //     },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
//   //     {
//   //       label: "Résolution d'impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 DPI",
//   //     },
//   //     {
//   //       label: "Résolution d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     {
//   //       label: "Résolution d impression",
//   //       value:
//   //         "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
//   //     { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     {
//   //       label: "Résolution de numérisation optimisée",
//   //       value: "Jusqu’à 1200 ppp",
//   //     },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Connectivite", value: "USB" },
//   //     { label: "formats", value: "A4" },
//   //     {
//   //       label: "Premiére Page Imprimée",
//   //       value:
//   //         "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
//   //     },
//   //     {
//   //       label: "Alimentation-courant",
//   //       value:
//   //         "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
//   //     },
//   //     {
//   //       label: "Type de Papier pris en charge",
//   //       value:
//   //         "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
//   //     },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
//   //     },
//   //     {
//   //       label: "Cycle d utilisation Mensuel",
//   //       value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
//   //     },
//   //     {
//   //       label: "Alimentation papier standard",
//   //       value:
//   //         "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Type ecran", value: "7 segments et icône LCD" },
//   //     {
//   //       label: "Volume de Pages Mensuel Recommandé",
//   //       value: "400 à 800 (Jusqu'à 1000 pages)",
//   //     },
//   //     { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
//   //     { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
//   //     },
//   //     { label: "Poids", value: "4,67 kg" },
//   //     { label: "Couleur", value: "Noir" },
//   //     { label: "Dimensions", value: "525 x 310 x 158 mm" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },
//   // =================== imprimante ricoh =================
//   // {
//   //   _id: "ricoh1",
//   //   img: ricoh1,
//   //   productName: "IMPRIMANTE RICOH P501",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Ricoh",
//   //   des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "Z4B04A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "Mémoire", value: "Non" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
//   //     { label: "Vitesse du Processeur", value: "360 MHz" },
//   //     {
//   //       label: "Impression sans bordure",
//   //       value: "Oui, jusqu’à 210 x 297 mm (A4)",
//   //     },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
//   //     {
//   //       label: "Résolution d'impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 DPI",
//   //     },
//   //     {
//   //       label: "Résolution d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     {
//   //       label: "Résolution d impression",
//   //       value:
//   //         "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
//   //     { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     {
//   //       label: "Résolution de numérisation optimisée",
//   //       value: "Jusqu’à 1200 ppp",
//   //     },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Connectivite", value: "USB" },
//   //     { label: "formats", value: "A4" },
//   //     {
//   //       label: "Premiére Page Imprimée",
//   //       value:
//   //         "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
//   //     },
//   //     {
//   //       label: "Alimentation-courant",
//   //       value:
//   //         "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
//   //     },
//   //     {
//   //       label: "Type de Papier pris en charge",
//   //       value:
//   //         "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
//   //     },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
//   //     },
//   //     {
//   //       label: "Cycle d utilisation Mensuel",
//   //       value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
//   //     },
//   //     {
//   //       label: "Alimentation papier standard",
//   //       value:
//   //         "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Type ecran", value: "7 segments et icône LCD" },
//   //     {
//   //       label: "Volume de Pages Mensuel Recommandé",
//   //       value: "400 à 800 (Jusqu'à 1000 pages)",
//   //     },
//   //     { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
//   //     { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
//   //     },
//   //     { label: "Poids", value: "4,67 kg" },
//   //     { label: "Couleur", value: "Noir" },
//   //     { label: "Dimensions", value: "525 x 310 x 158 mm" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },

//   // {
//   //   _id: "ricoh2",
//   //   img: ricoh2,
//   //   productName: "IMPRIMANTE RICOH SP3710DN",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Ricoh",
//   //   des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "Z4B04A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "Mémoire", value: "Non" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
//   //     { label: "Vitesse du Processeur", value: "360 MHz" },
//   //     {
//   //       label: "Impression sans bordure",
//   //       value: "Oui, jusqu’à 210 x 297 mm (A4)",
//   //     },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
//   //     {
//   //       label: "Résolution d'impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 DPI",
//   //     },
//   //     {
//   //       label: "Résolution d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     {
//   //       label: "Résolution d impression",
//   //       value:
//   //         "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
//   //     { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     {
//   //       label: "Résolution de numérisation optimisée",
//   //       value: "Jusqu’à 1200 ppp",
//   //     },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Connectivite", value: "USB" },
//   //     { label: "formats", value: "A4" },
//   //     {
//   //       label: "Premiére Page Imprimée",
//   //       value:
//   //         "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
//   //     },
//   //     {
//   //       label: "Alimentation-courant",
//   //       value:
//   //         "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
//   //     },
//   //     {
//   //       label: "Type de Papier pris en charge",
//   //       value:
//   //         "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
//   //     },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
//   //     },
//   //     {
//   //       label: "Cycle d utilisation Mensuel",
//   //       value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
//   //     },
//   //     {
//   //       label: "Alimentation papier standard",
//   //       value:
//   //         "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Type ecran", value: "7 segments et icône LCD" },
//   //     {
//   //       label: "Volume de Pages Mensuel Recommandé",
//   //       value: "400 à 800 (Jusqu'à 1000 pages)",
//   //     },
//   //     { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
//   //     { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
//   //     },
//   //     { label: "Poids", value: "4,67 kg" },
//   //     { label: "Couleur", value: "Noir" },
//   //     { label: "Dimensions", value: "525 x 310 x 158 mm" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },
//   // {
//   //   _id: "ricoh3",
//   //   img: ricoh3,
//   //   productName: "IMPRIMANTE RICOH SP4520DN",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Ricoh",
//   //   des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "Z4B04A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "Mémoire", value: "Non" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
//   //     { label: "Vitesse du Processeur", value: "360 MHz" },
//   //     {
//   //       label: "Impression sans bordure",
//   //       value: "Oui, jusqu’à 210 x 297 mm (A4)",
//   //     },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
//   //     {
//   //       label: "Résolution d'impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 DPI",
//   //     },
//   //     {
//   //       label: "Résolution d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     {
//   //       label: "Résolution d impression",
//   //       value:
//   //         "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
//   //     { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     {
//   //       label: "Résolution de numérisation optimisée",
//   //       value: "Jusqu’à 1200 ppp",
//   //     },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Connectivite", value: "USB" },
//   //     { label: "formats", value: "A4" },
//   //     {
//   //       label: "Premiére Page Imprimée",
//   //       value:
//   //         "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
//   //     },
//   //     {
//   //       label: "Alimentation-courant",
//   //       value:
//   //         "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
//   //     },
//   //     {
//   //       label: "Type de Papier pris en charge",
//   //       value:
//   //         "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
//   //     },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
//   //     },
//   //     {
//   //       label: "Cycle d utilisation Mensuel",
//   //       value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
//   //     },
//   //     {
//   //       label: "Alimentation papier standard",
//   //       value:
//   //         "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Type ecran", value: "7 segments et icône LCD" },
//   //     {
//   //       label: "Volume de Pages Mensuel Recommandé",
//   //       value: "400 à 800 (Jusqu'à 1000 pages)",
//   //     },
//   //     { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
//   //     { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
//   //     },
//   //     { label: "Poids", value: "4,67 kg" },
//   //     { label: "Couleur", value: "Noir" },
//   //     { label: "Dimensions", value: "525 x 310 x 158 mm" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },
//   // {
//   //   _id: "ricoh4",
//   //   img: ricoh4,
//   //   productName: "IMPRIMANTE RICOH COULEUR LASER SPC840",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Ricoh",
//   //   des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "Z4B04A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "Mémoire", value: "Non" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
//   //     { label: "Vitesse du Processeur", value: "360 MHz" },
//   //     {
//   //       label: "Impression sans bordure",
//   //       value: "Oui, jusqu’à 210 x 297 mm (A4)",
//   //     },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
//   //     {
//   //       label: "Résolution d'impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 DPI",
//   //     },
//   //     {
//   //       label: "Résolution d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     {
//   //       label: "Résolution d impression",
//   //       value:
//   //         "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
//   //     { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     {
//   //       label: "Résolution de numérisation optimisée",
//   //       value: "Jusqu’à 1200 ppp",
//   //     },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Connectivite", value: "USB" },
//   //     { label: "formats", value: "A4" },
//   //     {
//   //       label: "Premiére Page Imprimée",
//   //       value:
//   //         "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
//   //     },
//   //     {
//   //       label: "Alimentation-courant",
//   //       value:
//   //         "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
//   //     },
//   //     {
//   //       label: "Type de Papier pris en charge",
//   //       value:
//   //         "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
//   //     },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
//   //     },
//   //     {
//   //       label: "Cycle d utilisation Mensuel",
//   //       value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
//   //     },
//   //     {
//   //       label: "Alimentation papier standard",
//   //       value:
//   //         "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Type ecran", value: "7 segments et icône LCD" },
//   //     {
//   //       label: "Volume de Pages Mensuel Recommandé",
//   //       value: "400 à 800 (Jusqu'à 1000 pages)",
//   //     },
//   //     { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
//   //     { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
//   //     },
//   //     { label: "Poids", value: "4,67 kg" },
//   //     { label: "Couleur", value: "Noir" },
//   //     { label: "Dimensions", value: "525 x 310 x 158 mm" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },
//   // {
//   //   _id: "ricoh5",
//   //   img: ricoh5,
//   //   productName: "IMPRIMANTE RICOH SP4510DN (407313)",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Ricoh",
//   //   des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "Z4B04A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "Mémoire", value: "Non" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
//   //     { label: "Vitesse du Processeur", value: "360 MHz" },
//   //     {
//   //       label: "Impression sans bordure",
//   //       value: "Oui, jusqu’à 210 x 297 mm (A4)",
//   //     },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
//   //     {
//   //       label: "Résolution d'impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 DPI",
//   //     },
//   //     {
//   //       label: "Résolution d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     {
//   //       label: "Résolution d impression",
//   //       value:
//   //         "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
//   //     { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     {
//   //       label: "Résolution de numérisation optimisée",
//   //       value: "Jusqu’à 1200 ppp",
//   //     },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Connectivite", value: "USB" },
//   //     { label: "formats", value: "A4" },
//   //     {
//   //       label: "Premiére Page Imprimée",
//   //       value:
//   //         "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
//   //     },
//   //     {
//   //       label: "Alimentation-courant",
//   //       value:
//   //         "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
//   //     },
//   //     {
//   //       label: "Type de Papier pris en charge",
//   //       value:
//   //         "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
//   //     },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
//   //     },
//   //     {
//   //       label: "Cycle d utilisation Mensuel",
//   //       value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
//   //     },
//   //     {
//   //       label: "Alimentation papier standard",
//   //       value:
//   //         "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Type ecran", value: "7 segments et icône LCD" },
//   //     {
//   //       label: "Volume de Pages Mensuel Recommandé",
//   //       value: "400 à 800 (Jusqu'à 1000 pages)",
//   //     },
//   //     { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
//   //     { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
//   //     },
//   //     { label: "Poids", value: "4,67 kg" },
//   //     { label: "Couleur", value: "Noir" },
//   //     { label: "Dimensions", value: "525 x 310 x 158 mm" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },

//   // =================== imprimante ricoh =================

//   // {
//   //   _id: "espson1",
//   //   img: espson1,
//   //   productName: "IMPRIMANTE EPSON L3251 3EN1 A4 WIFI",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Epson",
//   //   des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "Z4B04A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "Mémoire", value: "Non" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
//   //     { label: "Vitesse du Processeur", value: "360 MHz" },
//   //     {
//   //       label: "Impression sans bordure",
//   //       value: "Oui, jusqu’à 210 x 297 mm (A4)",
//   //     },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
//   //     {
//   //       label: "Résolution d'impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 DPI",
//   //     },
//   //     {
//   //       label: "Résolution d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     {
//   //       label: "Résolution d impression",
//   //       value:
//   //         "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
//   //     { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     {
//   //       label: "Résolution de numérisation optimisée",
//   //       value: "Jusqu’à 1200 ppp",
//   //     },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Connectivite", value: "USB" },
//   //     { label: "formats", value: "A4" },
//   //     {
//   //       label: "Premiére Page Imprimée",
//   //       value:
//   //         "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
//   //     },
//   //     {
//   //       label: "Alimentation-courant",
//   //       value:
//   //         "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
//   //     },
//   //     {
//   //       label: "Type de Papier pris en charge",
//   //       value:
//   //         "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
//   //     },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
//   //     },
//   //     {
//   //       label: "Cycle d utilisation Mensuel",
//   //       value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
//   //     },
//   //     {
//   //       label: "Alimentation papier standard",
//   //       value:
//   //         "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Type ecran", value: "7 segments et icône LCD" },
//   //     {
//   //       label: "Volume de Pages Mensuel Recommandé",
//   //       value: "400 à 800 (Jusqu'à 1000 pages)",
//   //     },
//   //     { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
//   //     { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
//   //     },
//   //     { label: "Poids", value: "4,67 kg" },
//   //     { label: "Couleur", value: "Noir" },
//   //     { label: "Dimensions", value: "525 x 310 x 158 mm" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },

//   // {
//   //   _id: "espson2",
//   //   img: espson2,
//   //   productName: "IMPRIMANTE EPSON JET D'ENCRE L3156 COULEUR A4  WIFI",
//   //   price: "450",
//   //   color: "Blanc",
//   //   badge: true,
//   //   brand: "Epson",
//   //   des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
//   //   cat: "Imprimante",
//   //   pdf: pdf1,
//   //   ficheTech: [
//   //     { label: "DISPONIBILITÉ", value: "En stock" },
//   //     { label: "gtin", value: "Z4B04A" },
//   //     { label: "Marque", value: "HP" },
//   //     { label: "Destockage", value: "Non" },
//   //     { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
//   //     { label: "fonctions", value: "Multifonction" },
//   //     { label: "Impression", value: "Couleur" },
//   //     { label: "Mémoire", value: "Non" },
//   //     { label: "FAX", value: "Non" },
//   //     { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
//   //     { label: "Chargement de Documents", value: "Oui" },
//   //     { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
//   //     { label: "Vitesse du Processeur", value: "360 MHz" },
//   //     {
//   //       label: "Impression sans bordure",
//   //       value: "Oui, jusqu’à 210 x 297 mm (A4)",
//   //     },
//   //     { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
//   //     { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
//   //     {
//   //       label: "Résolution d'impression Noir",
//   //       value: "Jusqu'à 1 200 x 1 200 DPI",
//   //     },
//   //     {
//   //       label: "Résolution d impression Couleur",
//   //       value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     {
//   //       label: "Résolution d impression",
//   //       value:
//   //         "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
//   //     },
//   //     { label: "Type de Scanner", value: "Scanner à Plat" },
//   //     { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
//   //     { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     {
//   //       label: "Résolution de numérisation optimisée",
//   //       value: "Jusqu’à 1200 ppp",
//   //     },
//   //     { label: "Recto/Verso", value: "Manuel" },
//   //     { label: "Connectivite", value: "USB" },
//   //     { label: "formats", value: "A4" },
//   //     {
//   //       label: "Premiére Page Imprimée",
//   //       value:
//   //         "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
//   //     },
//   //     {
//   //       label: "Alimentation-courant",
//   //       value:
//   //         "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
//   //     },
//   //     {
//   //       label: "Type de Papier pris en charge",
//   //       value:
//   //         "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
//   //     },
//   //     {
//   //       label: "Consommation électrique",
//   //       value:
//   //         "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
//   //     },
//   //     {
//   //       label: "Cycle d utilisation Mensuel",
//   //       value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
//   //     },
//   //     {
//   //       label: "Alimentation papier standard",
//   //       value:
//   //         "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
//   //     },
//   //     { label: "Ecran Tactile", value: "Non" },
//   //     { label: "Type ecran", value: "7 segments et icône LCD" },
//   //     {
//   //       label: "Volume de Pages Mensuel Recommandé",
//   //       value: "400 à 800 (Jusqu'à 1000 pages)",
//   //     },
//   //     { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
//   //     { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
//   //     { label: "Grammage", value: "75 g/m²" },
//   //     {
//   //       label: "Contenu de L'emballage",
//   //       value:
//   //         "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
//   //     },
//   //     { label: "Poids", value: "4,67 kg" },
//   //     { label: "Couleur", value: "Noir" },
//   //     { label: "Dimensions", value: "525 x 310 x 158 mm" },
//   //     { label: "Garantie", value: "1 an" },
//   //   ],
//   // },
// ];
