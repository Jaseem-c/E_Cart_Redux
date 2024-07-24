import { createSlice } from "@reduxjs/toolkit";


const cartSlice= createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        // add to cart
        addToCart: (state, action) =>{
            state.push(action.payload);
        },
        // remove from cart
        removeFromCart:(state,action)=>{
        return    state.filter((item)=>item.id!=action.payload)
        },
        // to clean cart
        emptyCart:(state)=>{
            return state==[]
        }
    }

})

export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer