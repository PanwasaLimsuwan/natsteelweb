import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";
import "../../assets/font.css";

const ItemCard = ({ item }) => {
  const hasCoil = item.coil && item.coil !== "";
  const hasCustomSize = item.customsize && item.customsize !== "";
  const dispatch = useDispatch();

  console.log(item.polesize)

  const handleIncrease = () => {
    dispatch(
      increaseQuantity({
        _id: item._id,
        ProductType: item.ProductType,
        wiresize: item.wiresize,
        gauge: item.gauge,
        coil: item.coil,
        barbedsize: item.barbedsize,
        clipsize: item.clipsize,
        nailsize: item.nailsize,
        customsize: item.customsize,
        Unit: item.Unit,
        delivery: item.delivery,

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
      })
    );
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(
        drecreaseQuantity({
          _id: item._id,
          ProductType: item.ProductType,
          wiresize: item.wiresize,
          gauge: item.gauge,
          coil: item.coil,
          barbedsize: item.barbedsize,
          clipsize: item.clipsize,
          nailsize: item.nailsize,
          customsize: item.customsize,
          Unit: item.Unit,
          delivery: item.delivery,

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
        })
      );
    }
  };

  const handleDelete = () => {
    dispatch(
      deleteItem({
        _id: item._id,
        ProductType: item.ProductType,
        wiresize: item.wiresize,
        gauge: item.gauge,
        coil: item.coil,
        barbedsize: item.barbedsize,
        clipsize: item.clipsize,
        nailsize: item.nailsize,
        customsize: item.customsize,
        Unit: item.Unit,
        delivery: item.delivery,

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
      })
    );
  };

  return (
    <div className="w-full mb-4 border py-2">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-4 ml-4 py-2">
        <span
          onClick={handleDelete}
          className="cursor-pointer font-bold hover:text-red-500 duration-300"
        >
          <ImCross />
        </span>
        <img
          className="w-24 h-24 md:w-32 md:h-32 object-cover"
          src={item.image}
          alt={item.name}
        />
        <div className="flex flex-col flex-grow ml-2 md:ml-4">
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          > */}
          <span className="kanit-medium text-[#154360] mb-1">{item.name}</span>
          <span className="kanit-medium text-[#154360] mb-1">
            {item.ProductType}
          </span>
          {item.name === "กล่องเกเบี้ยน" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              {item.weight ? (
                <>ระบุเป็นน้ำหนัก : {item.weight} (กิโลกรัม)</>
              ) : (
                <>
                  <span className="kanit-medium text-[#154360] mb-1">
                    ขนาด : {item.gabion1} (m.) <br />
                  </span>
                  <span className="kanit-medium text-[#154360] mb-1">
                    ตา : {item.gabion2} (cm.)
                  </span>
                </>
              )}
            </span>
          ) : null}
          {item.name === "แผงรั้วสำเร็จ (รั้วไวร์เมช)" ? (
            <div>
              <span className="kanit-medium text-[#154360] mb-1">
                ขนาดเหล็กรั้ว : {item.wiresize} <br />
              </span>
              <span className="kanit-medium text-[#154360] mb-1">
                ความสูงแผง : {item.Panelheight} <br />
              </span>
              <span className="kanit-medium text-[#154360] mb-1">
                ความกว้างแผง : {item.Panelwidth}
              </span>
            </div>
          ) : null}
          {item.name !== "กิ๊บลวดหนาม" &&
          item.name !== "แบบเหล็กเสา-คานเทสำเร็จ" &&
          item.name !== "ลวดPC wire เบอร์#8 (4มิล)" &&
          item.name !== "กล่องเกเบี้ยน" &&
          item.name !== "เหล็กนั่งร้าน" &&
          item.name !== "แผงรั้วสำเร็จ (รั้วไวร์เมช)" &&
          item.name !== "เหล็กตัด หนวดกุ้ง" &&
          item.name !== "เหล็กเพลทตัดสำเร็จ" &&
          item.name !== "ตะแกรงเหล็กฉีก" &&
          item.name !== "เหล็กวงบ่อ" &&
          item.name !== "เหล็กวงท่อ" &&
          item.name !== "ตะปูตอกไม้" &&
          item.name !== "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาดลวด : {item.wiresize}
            </span>
          ) : null}
          {item.name === "ตะแกรงเหล็กฉีก" ||
          item.name === "เหล็กเพลทตัดสำเร็จ" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาด(ต่อแผ่น) : {item.sheet}
            </span>
          ) : null}
          {item.name === "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาดตกตะแกรง : {item.gauge}
            </span>
          ) : null}
          {item.name === "เหล็กตัด หนวดกุ้ง" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ความยาว : {item.dowelsize} (cm.)
            </span>
          ) : null}
          {item.name === "เหล็กจ๊อย (โดเวล)" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาดข้ออ้อย : {item.dowelsize2}
            </span>
          ) : null}
          {item.name === "เหล็ก 2 หุนลาย" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              น้ำหนัก(กิโลกรัม/เส้น) : {item.twohunsize}
            </span>
          ) : null}
          {item.name === "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" ||
          item.name === "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" ||
          item.name === "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาดปลอก : {item.stirrupssize} (cmxcm)
            </span>
          ) : null}
          {item.name !== "ตาข่ายสี่เหลี่ยม (กรงไก่)" &&
          item.name !== "สังกะสีแผ่นเรียบ" &&
          item.name !== "เหล็กปลอกรางV (วัตถุดิบ มอก.)" &&
          item.name !== "แบบเหล็กเสา-คานเทสำเร็จ" &&
          item.name !== "ลวดPC wire เบอร์#8 (4มิล)" &&
          item.name !== "กล่องเกเบี้ยน" &&
          item.name !== "เหล็กนั่งร้าน" &&
          item.name !== "ไวร์รอท (ลวดเหล็กคาร์บอนต่ำ)" &&
          item.name !== "แผงรั้วสำเร็จ (รั้วไวร์เมช)" &&
          item.name !== "ลวดเหล็กตะปูรีดเย็น" &&
          item.name !== "เหล็ก 2 หุนลาย" &&
          item.name !== "เหล็กจ๊อย (โดเวล)" &&
          item.name !== "เหล็กตัด หนวดกุ้ง" &&
          item.name !== "ตะแกรงเหล็กฉีก" &&
          item.name !== "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" &&
          item.name !== "เหล็กเพลทตัดสำเร็จ" &&
          item.name !== "เหล็กวงบ่อ" &&
          item.name !== "เหล็กวงท่อ" &&
          item.name !== "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)" &&
          item.name !== "ลวดชุบสังกะสี" &&
          item.name !== "ปลอกเสา-ปลอกคาน (วัตถุดิบ มอก.)" &&
          item.name !== "ปลอกสามเหลี่ยม (วัตถุดิบ มอก.)" &&
          item.name !== "ปลอกสี่เหลี่ยม (วัตถุดิบ มอก.)" &&
          item.name !== "กิ๊บลวดหนาม" &&
          item.name !== "ตะปูตอกไม้" &&
          item.name !== "ลวดหนาม" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ตา : {item.gauge}
            </span>
          ) : null}
          {item.name === "กิ๊บลวดหนาม" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ความยาว : {item.clipsize}
            </span>
          ) : null}

          {item.name === "ตะปูตอกไม้" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาดตะปู : {item.nailsize}
            </span>
          ) : null}
          {item.name === "ลวดหนาม" ||
          item.name === "ลวดผูกเหล็ก เบอร์#18 (1.20มิล)" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              น้ำหนัก : {item.barbedsize}
            </span>
          ) : null}
          {item.name === "ไวร์เมช (ตะแกรงเหล็กเทพื้นสำเร็จรูป)" ? (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาด(ต่อม้วน) : {item.wiremeshsize1} (m.) x {item.wiremeshsize2} (m.)
            </span>
          ) : null}
          {hasCoil && item.coil !== "ระบุขนาดเอง" && (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาด(ต่อม้วน) : {item.coil}
            </span>
          )}
          {item.name === "แบบเหล็กเสา-คานเทสำเร็จ" && (
            <>
              {item.ProductType === "- แบบเสามาตรฐาน (สูง3เมตร)" ? (
                <span className="kanit-medium text-[#154360] mb-1">
                  ขนาด : {item.polesize}
                </span>
              ) : item.ProductType === "- แบบคานมาตรฐาน" ? (
                <span className="kanit-medium text-[#154360] mb-1">
                  ขนาด : {item.customsize} (mm.)
                </span>
              ) : null}
            </>
          )}
          {hasCustomSize && item.name === "ลวดหนาม" && (
              <span className="kanit-medium text-[#154360] mb-1">
              ความยาว : {item.customsize} (m.)
            </span>
          )}
          {hasCustomSize && item.name !== "ลวดหนาม" && item.name !== "แบบเหล็กเสา-คานเทสำเร็จ" && item.name !== "สังกะสีแผ่นเรียบ" && (
            <span className="kanit-medium text-[#154360] mb-1">
              ขนาด(ตรม.) : {item.customsize} (m.)
            </span>
          )}
          {hasCustomSize && item.name === "สังกะสีแผ่นเรียบ" && (
            <span className="kanit-medium text-[#154360] mb-1">
            ขนาด : {item.customsize} (ฟุต)
          </span>
          )}
          <span className="kanit-medium text-[#154360] mb-1">
            การจัดส่ง : {item.delivery}
          </span>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <button
            onClick={handleDecrease}
            className="bg-gray-200 rounded-full px-3 py-1 hover:bg-[#E74C3C] text-[#154360] font-bold hover:text-[#ff9800]"
          >
            -
          </button>
          <span className="kanit-medium text-[#154360] px-3">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="bg-gray-200 rounded-full px-3 py-1 hover:bg-[#2ECC71] text-[#154360] font-bold hover:text-[#ff9800]"
          >
            +
          </button>
          <span className="kanit-medium text-[#154360] ml-2 md:ml-16">
            {item.Unit}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
