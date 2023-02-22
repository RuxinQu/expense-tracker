import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../util/data";

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: Object.fromEntries(CATEGORIES.map((c) => [c, []])),
  reducers: {
    addTransaction: (state, action) => {
      state[action.payload.category].push(action.payload);
    },
  },
});

export const selectTransaction = (state) => state.transactions;

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
