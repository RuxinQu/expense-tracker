import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../util/data";

export const transactionSlice = createSlice({
  name: "transactions",
  // initial state is an object. The key is the category, value is an empty array
  initialState: Object.fromEntries(CATEGORIES.map((c) => [c, []])),
  reducers: {
    addTransaction: (state, action) => {
      state[action.payload.category].push(action.payload);
    },
    removeTransaction: (state, action) => {
      // .filter only return the data from state[action.payload.category], if directly return the
      //   result from .filter, the state will lose the rest of data
      const newState = state[action.payload.category].filter(
        (t) => t.id !== action.payload.id
      );
      return { ...state, [action.payload.category]: newState };
    },
  },
});

export const selectTransactions = (state) => state.transactions;

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
