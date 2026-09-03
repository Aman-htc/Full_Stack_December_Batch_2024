import { configureStore } from "@reduxjs/toolkit";
import { wishlistSlice } from "./slices/WishlistSlices";
import { addCartSlices } from "./slices/AddCartSlices";
import { productDetailsSlice } from "./slices/ProductsDetailsSlice";




export const store = configureStore({
    reducer :{
        wishlist: wishlistSlice.reducer,
        addcart: addCartSlices.reducer,
       
        detailspage:productDetailsSlice.reducer
        

    }

})

export default store

