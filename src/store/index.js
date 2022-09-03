import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./test-slice";
import modalSlice from "./modal-slice";
const store = configureStore({
  reducer: { test: testSlice.reducer, modal: modalSlice.reducer },
});
export default store;
