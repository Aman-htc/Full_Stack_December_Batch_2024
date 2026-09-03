import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const productDetailsSlice = createSlice({
  name: "detailspage",
  initialState: {
    userid: 1,
    productslist: []
  },
  reducers: {
    productsToDetails: (state, action) => {
      // state.wishlistItems = action.payload;
      
      const newItem = {
        id:action.payload.id,
        title: action.payload.title,
        thumbnail: action.payload.thumbnail,
        price: action.payload.price,
        description: action.payload.description
      }
      state.productslist = [ newItem]
      


      
    },

    
  }
});

export const {  productsToDetails } =
  productDetailsSlice.actions;

export default productDetailsSlice.reducer;
