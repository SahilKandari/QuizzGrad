import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    questionNumber: 0,
    totalQuestion: 10,
    score: 0,
    result: "",
  },
  reducers: {
    nextQuestion(state, action) {
      if (action.payload) {
        state.score = state.score + 1;
      } else {
        if (state.score > 0) {
          state.score = state.score - 1;
        } else {
          state.score = 0;
        }
      }

      state.questionNumber = state.questionNumber + 1;
    },
    previousQuestion(state) {
      state.questionNumber = state.questionNumber - 1;
    },
    submitAnswers(state, action) {
      if (action.payload) {
        state.score = state.score + 1;
      } else {
        if (state.score > 0) {
          state.score = state.score - 1;
        } else {
          state.score = 0;
        }
        state.result = (state.score * 100) / state.totalQuestion + "%";
      }
    },
  },
});
export const testActions = testSlice.actions;
export default testSlice;
