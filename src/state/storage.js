import { configureStore } from "@reduxjs/toolkit";
import pageStateReducer from "./PageState";

export default configureStore({
  reducer: {
    pageState: pageStateReducer,
  },
});
