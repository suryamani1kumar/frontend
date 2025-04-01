
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import enableSearchIconReducer from "./reducers/enableSearchIconSlice";
export default configureStore({
  reducer: {
    profile: profileReducer,
    toggleSearchIcon: enableSearchIconReducer,
  },
});
