import { configureStore } from "@reduxjs/toolkit";
import enableSearchIconReducer from "./reducers/enableSearchIconSlice";
import moblieSearchSlice from "./reducers/moblieSearchSlice";
export default configureStore({
  reducer: {
    toggleSearchIcon: enableSearchIconReducer,
    enableSearch: moblieSearchSlice,
  },
});

