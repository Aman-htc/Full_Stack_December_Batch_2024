import { createSlice } from "@reduxjs/toolkit";

export const addCartSlices = createSlice({
  name: "addcart",
  initialState: {
    userid: 1,
    cartItems: [],
    totalQuantities: 0,
    cartTotal: 0,
    shippingCost: 10,
    tax: 18,
    appliedCoupan: "",
    coupanCodes: [
      { code: "Aman5", parcent: 5 },
      { code: "Aman10", parcent: 10 },
    ],
    discountParcent: 0,
    discountAmount: 0,
    coupanNotAllowed:''
  },

  reducers: {
    addTocart: (state, action) => {
      const findItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          quantity: 1,
        });
      }

      state.totalQuantities += 1;
      state.cartTotal += action.payload.price;
    },

    

    removeFromCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        state.totalQuantities -= item.quantity;
        state.cartTotal -= item.price * item.quantity;
      }

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );
      item.quantity += 1;
      state.totalQuantities += 1;
      state.cartTotal += item.price;
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantities -= 1;
        state.cartTotal -= item.price;
      }
    },

    applyCoupan: (state, action) => {
      const findCoupan = state.coupanCodes.find(
        (item) => item.code === action.payload
      );

      if (findCoupan) {
        state.appliedCoupan = findCoupan.code;
        state.discountParcent = findCoupan.parcent;
        state.discountAmount =
          (state.cartTotal * findCoupan.parcent) / 100;
          console.log(findCoupan.parcent)
        state.coupanNotAllowed=""  
      }else{
        state.coupanNotAllowed='This coupan is not allwed',
        state.appliedCoupan="",
        state.discountAmount=0,
        state.discountParcent=0

      }
    },
  },
});

export const {
  addTocart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  applyCoupan,
} = addCartSlices.actions;

export default addCartSlices.reducer;

