import React, { useState } from 'react';

const Form = ({ productInfo, onSubmit, formData, setFormData }) => {
  const [size, setsize] = useState("");
  const [gauge, setgauge] = useState("");
  const [coil, setcoil] = useState("");
  const [require, setrequire] = useState("");
  const [delivery, setdelivery] = useState("");
  const [Number, setNumber] = useState("");
  const [Unit, setUnit] = useState("");
  // localStorage.setItem("savedNumber", Number);
  // localStorage.setItem("savedUnit", Unit);
  // localStorage.setItem("savedsize", size);
  // localStorage.setItem("savedguage", gauge);
  // localStorage.setItem("saveddelivery", delivery);

  // console.log("Size : ", size);

  const handleNumber = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > 10000) {
      value = 10000;
    } else if (value < 1) {
      value = 1;
    }
    setNumber(value);
  };

  const handleUnit = (e) => {
    setUnit(e.target.value);
  };

  const handleSize = (e) => {
    setsize(e.target.value);
    // console.log("handleSize: ", formData);
  };

  const handlegauge = (e) => {
    setgauge(e.target.value);
  };

  const handlecoil = (e) => {
    setcoil(e.target.value);
  };

  const handlerequire = (e) => {
    setrequire(e.target.value);
  };

  const handledelivery = (e) => {
    setdelivery(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Prepare form data
  //   const formData = {
  //     productName: productInfo.productName,
  //     size,
  //     gauge,
  //     coil,
  //     require,
  //     delivery,
  //     Number,
  //     Unit,
  //   };
  //   // Call onSubmit function passed from ProductInfo
    
  //   onSubmit(formData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ดำเนินการบันทึกข้อมูลหรือส่งข้อมูลไปยังเซิร์ฟเวอร์
    console.log('Form Data:', formData);
    // ส่งข้อมูลไปยังฟังก์ชันที่ถูกส่งเข้ามา
    onSubmit(formData);
};
  // สร้าง state เพื่อเก็บข้อมูลฟอร์มสั่งซื้อสินค้าของแต่ละตัว
  // const [formData, setFormData] = useState({
  //   productName: '',
  //   quantity: 0,
  //   // เพิ่ม property ตามความต้องการ เช่น ราคา ที่อยู่จัดส่ง เป็นต้น
  // });

  // ฟังก์ชั่นเมื่อมีการเปลี่ยนแปลงในฟอร์ม
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // // ฟังก์ชั่นสำหรับการส่งข้อมูลฟอร์มเมื่อกดปุ่มสั่งซื้อ
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // ดำเนินการบันทึกข้อมูล หรือส่งข้อมูลไปยังเซิร์ฟเวอร์
  //   console.log('Submitted data:', formData);
  //   // ล้างข้อมูลในฟอร์ม
  //   setFormData({
  //     productName: '',
  //     quantity: 0,
  //     // เพิ่ม property ตามความต้องการ เช่น ราคา ที่อยู่จัดส่ง เป็นต้น
  //   });
  // };

  return (
    <div>
      {/* <button onClick={() => setDisplayForm('productA')}>Order Product A</button>
      <button onClick={() => setDisplayForm('productB')}>Order Product B</button> */}
      
      {/* {displayForm === 'productA' && ( */}
        <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="productName"
          value={productInfo.productName}
        />
          <p className="kanit-medium text-[#154360]">
                  เบอร์ :
                  <select
                    name="text"
                    type=""
                    value={size}
                    placeholder="เลือก"
                    className="text-[#ff9800] w-24 mt-5 ml-6 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                    onChange={handleSize}
                  >
                    <option value="">เลือก</option>
                    <option value="#8 (4มิล)">#8 (4มิล)</option>
                    <option value="2">#9 (3.6มิล)</option>
                    <option value="3">#10 (3.2มิล)</option>
                    <option value="4">#11 (2.9มิล)</option>
                    <option value="5">#12 (2.5มิล)</option>
                    <option value="6">#13 (2.35มิล)</option>
                    <option value="7">#14 (2.0มิล)</option>
                  </select>
                </p>
          <p className="kanit-medium text-[#154360]">
                  ตา :
                  <select
                    name="text"
                    type=""
                    value={gauge}
                    placeholder="เลือก"
                    className="text-[#ff9800] w-24 ml-10 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                    onChange={handlegauge}
                  >
                    <option value="">เลือก</option>
                    <option value="1">1"</option>
                    <option value="2">1-1/2"</option>
                    <option value="3">2"</option>
                    <option value="4">2-1/2"</option>
                    <option value="5">3"</option>
                  </select>
                </p>
                <p className="kanit-medium text-[#154360]">
                  ขนาด :
                  <select
                    name="text"
                    type=""
                    value={coil}
                    placeholder="เลือก"
                    className="text-[#ff9800] w-24 ml-5 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                    onChange={handlecoil}
                  >
                    <option value="">เลือก</option>
                    <option value="0.8x10 m.">0.8x10 m.</option>
                    <option value="2">1.0x10 m.</option>
                    <option value="3">1.2x10 m.</option>
                    <option value="4">1.8x10 m.</option>
                    <option value="5">2.0x10 m.</option>
                  </select>
                </p>
                <p className="kanit-medium text-[#154360]">
                  ระบุขนาดเอง :
                  <input
                    // color="#ff9800"
                    name="require"
                    // type="Number"
                    // type="from-control"
                    // min={1}
                    // max={10000}
                    // maxLength={10000}
                    // step={1}
                    value={require}
                    // autoComplete="1"
                    onChange={handlerequire}
                    placeholder=""
                    className="text-[#ff9800] w-24 ml-4 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                  ></input>
                </p>
                <p className="kanit-medium text-[#154360]">
                  จำนวน :
                  <input
                    // color="#ff9800"
                    name="Number"
                    type="Number"
                    // type="from-control"
                    min={1}
                    // max={10000}
                    maxLength={10000}
                    step={1}
                    value={Number}
                    // autoComplete="1"
                    onChange={handleNumber}
                    placeholder=""
                    className="text-[#ff9800] w-24 ml-4 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                  ></input>
                </p>
                <p className="kanit-medium text-[#154360]">
                  หน่วย :
                  <select
                    name="Unit"
                    type=""
                    value={Unit}
                    placeholder="เลือก"
                    className="text-[#ff9800] w-24 ml-6 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                    onChange={handleUnit}
                  >
                    <option value="">เลือก</option>
                    <option value="1">ม้วน</option>
                    <option value="2">ตารางเมตร</option>
                  </select>
                </p>
                <p className="kanit-medium text-[#154360]">
                  จัดส่ง :
                  <select
                    name="text"
                    type=""
                    value={delivery}
                    placeholder="เลือก"
                    className="text-[#ff9800] w-24 ml-6 mb-5 h-10 p-2 border-2 border-[#154360] rounded-lg shadow-sm focus:border-[#ff9800] focus:shadow-md transition duration-300 outline-none"
                    onChange={handledelivery}
                  >
                    <option value="">เลือก</option>
                    <option value="1">รับเอง</option>
                    <option value="2">บริษัทจัดส่งให้</option>
                  </select>
                </p>
          {/* เพิ่มฟิลด์อื่น ๆ ตามความต้องการ */}
          {/* <button type="submit">Order Product A</button> */}
        </form>
      {/* )} */}

      
    </div>
  );
}

export default Form;
