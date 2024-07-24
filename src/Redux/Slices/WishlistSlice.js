import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice =createSlice({
    name: 'wishlist',
    initialState:[],
    reducers: {
        // add to wish list 
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        // delete wish list
        deleteWishlist:(state,action)=>{
        return   state.filter((item)=>item.id!=action.payload)
        }

    }

})
        
export const  {addToWishlist,deleteWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer