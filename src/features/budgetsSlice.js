import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../util/data";

export const budgetsSlice = createSlice({
  name: "budgets",
  // initial state is an array of objects
  initialState: CATEGORIES.map((category) => ({
    category: category,
    amount: 0,
  })),
  reducers: {
    updateBudgets: (state, action) => {
      state.map((item) => {
        if (item.category === action.payload.category) {
          item.amount = action.payload.amount;
        }
      });
    },
  },
});

// export the selector
export const selectBudgets = (state) => state.budgets;

// export action and reducer
export const { updateBudgets } = budgetsSlice.actions;
export default budgetsSlice.reducer;
