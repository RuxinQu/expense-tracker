import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../util/data";
// categories slice object
export const budgetsSlice = createSlice({
  name: "budgets",
  initialState: CATEGORIES.map((category) => ({
    category: category,
    amount: 0,
  })),
  reducers: {
    // createSlice use immuter so the Array.push method won't change the current state
    updateBudgets: (state, action) => {
      state.map((item) => {
        if (item.category === action.payload.category) {
          item.amount = action.payload.amount;
        }
      });
    },
  },
});

// define a selector
export const selectBudgets = (state) => state.budgets;

// export action and reducer
export const { updateBudgets } = budgetsSlice.actions;
export default budgetsSlice.reducer;
