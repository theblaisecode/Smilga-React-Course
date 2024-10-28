import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeMode: true,
};

const darkModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    isDarkMode: (state) => {
      state.themeMode = !state.themeMode;
      const newTheme = state.themeMode ? "dim" : "winter";
      document.documentElement.setAttribute("data-theme", newTheme);
    },
  },
});

export const { isDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
