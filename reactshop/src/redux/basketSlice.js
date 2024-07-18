import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find((product) => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    reduceQuantity: (state, action) => {
      const existingProduct = state.products.find((product) => product.id === action.payload);
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.products.find((product) => product.id === action.payload);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },

    removeProduct: (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      },
    },
  });


export const { addProduct, reduceQuantity, increaseQuantity, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
