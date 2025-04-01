import { createSlice } from "@reduxjs/toolkit";
const enableSearchIconSlice = createSlice({
  name: "searchIcon",
  initialState: false,
  reducers: {
    toggleSearchIcon: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { toggleSearchIcon } = enableSearchIconSlice.actions;
export default enableSearchIconSlice.reducer;
