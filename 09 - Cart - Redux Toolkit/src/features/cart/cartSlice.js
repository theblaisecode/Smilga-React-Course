import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // Setting up the reducer to clear the cart when the "Clear Cart Button" is clicked
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
// console logging cartSlice returns an object so cartSlice.reducer is used to access only the reducer
// Same goes for cartSlice.actions
