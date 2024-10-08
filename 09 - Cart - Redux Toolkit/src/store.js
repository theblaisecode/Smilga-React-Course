import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
// cartReducer  is a random name. You can call it any thing you prefer

export const store = configureStore({
  reducer: { cart: cartReducer },
});
