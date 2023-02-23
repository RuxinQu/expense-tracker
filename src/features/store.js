import { configureStore } from "@reduxjs/toolkit";

// import the reducers from slice FileSystem
import budgetsReducer from "./budgetsSlice";
import transactionReducer from "./transactionSlice";

// configure the store object and export as default
export default configureStore({
  reducer: {
    budgets: budgetsReducer,
    transactions: transactionReducer,
  },
});
