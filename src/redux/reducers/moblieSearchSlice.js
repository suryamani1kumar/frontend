import { createSlice } from "@reduxjs/toolkit";
const moblieSearchSlice = createSlice({
  name: "search",
  initialState: false,
  reducers: {
    SearchEnable: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { SearchEnable } = moblieSearchSlice.actions;
export default moblieSearchSlice.reducer;
