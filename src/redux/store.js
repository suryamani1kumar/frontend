import { configureStore } from "@reduxjs/toolkit";
import enableSearchIconReducer from "./reducers/enableSearchIconSlice";
import moblieSearchSlice from "./reducers/moblieSearchSlice";
import fetchData from "../service/fetchData";
import postData from "../service/postData";

export default configureStore({
  reducer: {
    toggleSearchIcon: enableSearchIconReducer,
    enableSearch: moblieSearchSlice,
    fetchApi: fetchData,
    postApi: postData,
  },
});
