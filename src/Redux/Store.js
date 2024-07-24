import { configureStore } from "@reduxjs/toolkit";
import WishlistSlice from "./Slices/WishlistSlice";
import CartSlice from "./Slices/CartSlice";


const store=configureStore({
    reducer:{
        wishlistReducer:WishlistSlice,
        cartReducer:CartSlice
    }
})

export default store