import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userInfo: [],
  products: [],
  checkedBrands: [],
  checkedCategorys: [],
  selectedProducts: [],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        quantity: action.payload.Number || 1,
      };

      const existingProduct = state.products.find(
        (product) =>
          product._id === newItem._id &&
          product.ProductType === newItem.ProductType &&
          product.wiresize === newItem.wiresize &&
          product.gauge === newItem.gauge &&
          product.coil === newItem.coil &&
          product.barbedsize === newItem.barbedsize &&
          product.clipsize === newItem.clipsize &&
          product.nailsize === newItem.nailsize &&
          product.customsize === newItem.customsize &&
          product.Unit === newItem.Unit &&
          product.delivery === newItem.delivery
      );

      if (existingProduct) {
        existingProduct.quantity += newItem.quantity;
        toast.success("Product quantity updated");
      } else {
        state.products.push(newItem);
        toast.success("เพิ่มสินค้าแล้ว");
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) =>
          item._id === action.payload._id &&
          item.ProductType === action.payload.ProductType &&
          item.wiresize === action.payload.wiresize &&
          item.gauge === action.payload.gauge &&
          item.coil === action.payload.coil &&
          item.barbedsize === action.payload.barbedsize &&
          item.clipsize === action.payload.clipsize &&
          item.nailsize === action.payload.nailsize &&
          item.customsize === action.payload.customsize &&
          item.Unit === action.payload.Unit &&
          item.delivery === action.payload.delivery
      );
      if (item && item.quantity < 10000) {
        item.quantity++;
        toast.success("เพิ่มจํานวนสินค้า");
      } else {
        toast.warning("ไม่สามารถเพิ่มจำนวนมากกว่า 10000 ชิ้นได้");
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) =>
          item._id === action.payload._id &&
          item.ProductType === action.payload.ProductType &&
          item.wiresize === action.payload.wiresize &&
          item.gauge === action.payload.gauge &&
          item.coil === action.payload.coil &&
          item.barbedsize === action.payload.barbedsize &&
          item.clipsize === action.payload.clipsize &&
          item.nailsize === action.payload.nailsize &&
          item.customsize === action.payload.customsize &&
          item.Unit === action.payload.Unit &&
          item.delivery === action.payload.delivery
      );
      if (item && item.quantity > 1) {
        item.quantity--;
        console.log("New Quantity After Decrease:", item.quantity); // ใส่ console.log() เพื่อดูค่า quantity หลังจากลดจำนวน
        toast.error("ลดจํานวนสินค้า");
      } else {
        toast.warning("จํานวนสินค้าไม่สามารถต่ํากว่า 1 ชิ้นได้");
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) =>
          !(item._id === action.payload._id &&
            item.ProductType === action.payload.ProductType &&
            item.wiresize === action.payload.wiresize &&
            item.gauge === action.payload.gauge &&
            item.coil === action.payload.coil &&
            item.barbedsize === action.payload.barbedsize &&
            item.clipsize === action.payload.clipsize &&
            item.nailsize === action.payload.nailsize &&
            item.customsize === action.payload.customsize &&
            item.Unit === action.payload.Unit &&
            item.delivery === action.payload.delivery)
      );
      toast.error("ลบสินค้าแล้ว");
    },
    resetCart: (state) => {
      state.products = [];
      toast.error("ล้างรายการสินค้าแล้ว");
    },
    toggleBrand: (state, action) => {
      const brand = action.payload;
      const isBrandChecked = state.checkedBrands.some(
        (b) => b._id === brand._id
      );

      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter(
          (b) => b._id !== brand._id
        );
      } else {
        state.checkedBrands.push(brand);
      }
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b._id === category._id
      );

      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter(
          (b) => b._id !== category._id
        );
      } else {
        state.checkedCategorys.push(category);
      }
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleBrand,
  toggleCategory,
} = orebiSlice.actions;

export default orebiSlice.reducer;
