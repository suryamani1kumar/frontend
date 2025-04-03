import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import enableSearchIconReducer from "./reducers/enableSearchIconSlice";
import moblieSearchSlice from "./reducers/moblieSearchSlice";
export default configureStore({
  reducer: {
    profile: profileReducer,
    toggleSearchIcon: enableSearchIconReducer,
    enableSearch: moblieSearchSlice,
  },
});

