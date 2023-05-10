import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'
const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: false,
}


const cartSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        clearCart: (state, action) => {
            return {...state, cartItems:[], amount: 0}
        }
    },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;