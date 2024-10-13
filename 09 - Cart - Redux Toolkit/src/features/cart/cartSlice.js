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
      state.cartItems = state.cartItems.filter(
        (theItem) => theItem.id !== itemId
      );
    },
    increase: (state, { payload }) => {
      const increaseItem = state.cartItems.find(
        (theItem) => theItem.id === payload.id
      );
      increaseItem.amount = increaseItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const decreaseItem = state.cartItems.find(
        (theItem) => theItem.id === payload.id
      );
      decreaseItem.amount = decreaseItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((theItem) => {
        amount += theItem.amount;
        total += theItem.amount * theItem.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
// console logging cartSlice returns an object so cartSlice.reducer is used to access only the reducer

// Same goes for cartSlice.actions
