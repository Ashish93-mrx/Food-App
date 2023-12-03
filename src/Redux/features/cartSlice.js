import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts:[]
}

const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        //add to cart
        addToCart:(state,action)=>{
            const ItemIndex = state.carts.findIndex((item)=>item.id === action.payload.id);

            if(ItemIndex >=0){
                state.carts[ItemIndex].qnty+=1;
            }else{
                const tmp={...action.payload,qnty:1}
                state.carts=[...state.carts,tmp]
            }
        },

        //remove particular item
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts=data;
        },

        removeSingleItems:(state,action)=>{
            const ItemIndex_dec = state.carts.findIndex((item)=>item.id === action.payload.id);

            if(state.carts[ItemIndex_dec].qnty >=1){
                state.carts[ItemIndex_dec].qnty-=1;
            }
        },

        removeAll:(state,action)=>{
            state.carts=[];
        }


    }

});

export const {addToCart,removeToCart,removeSingleItems,removeAll} = cartSlice.actions;

export default cartSlice.reducer;