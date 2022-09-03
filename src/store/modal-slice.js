import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    correctModal: false,
    wrongModal: false,
    submitModal: false,
  },
  reducers: {
    correct(state) {
      state.correctModal = true;
    },
    wrong(state) {
      state.wrongModal = true;
    },
    submit(state) {
      state.submitModal = true;
    },
    close(state) {
      state.correctModal = false;
      state.wrongModal = false;
      state.submitModal = false;
    },
  },
});
export const modalActions = modalSlice.actions;
export default modalSlice;
