import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    userid: 1,
    wishlistItems: []
  },
  reducers: {
    addToWishlist: (state, action) => {
      // state.wishlistItems = action.payload;
      
      const newItem = {
        id:action.payload.id,
        title: action.payload.title,
        thumbnail: action.payload.thumbnail,
        price: action.payload.price
      }
      state.wishlistItems = [...state.wishlistItems , newItem]
      


      
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter((item)=> item.id !== action.payload)
    
    }
  }
});

export const { addToWishlist, removeFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
