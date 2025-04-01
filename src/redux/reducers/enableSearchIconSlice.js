import { createSlice } from "@reduxjs/toolkit";
const enableSearchIconSlice = createSlice({
  name: "searchIcon",
  initialState: false,
  reducers: {
    toggleSearchIcon: (state) => {
      return !state;
    },
  },
});

export const { toggleSearchIcon } = enableSearchIconSlice.actions;
export default enableSearchIconSlice.reducer;
