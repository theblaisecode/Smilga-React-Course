import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "../reduxToolkit/mobileMenu/mobileMenuSlice";
import themeReducer from "../reduxToolkit/darkMode/darkModeSlice";
import colorReducer from "./product/productColor";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileReducer,
    themeMode: themeReducer,
    color: colorReducer,
  },
});
