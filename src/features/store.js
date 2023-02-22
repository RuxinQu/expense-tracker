import { configureStore } from "@reduxjs/toolkit";

// import the reducers from slice FileSystem
import budgetsReducer from "./budgetsSlice";

// configure the store object and export as default
export default configureStore({
  reducer: {
    budgets: budgetsReducer,
  },
});
