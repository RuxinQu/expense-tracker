import * as React from "react";
import { useSelector } from "react-redux";
import { selectTransactions } from "../features/transactionSlice";
import { TransactionListItem } from "./TransactionListItem";
import { Box, List } from "@mui/joy";

export const TransactionList = () => {
  // transactionsObj is an object, the key is each category,  the value is an array of transactions objects under the category
  const transactionsObj = useSelector(selectTransactions);
  // transactionArr gets all the arrays from the value in transactionObj, and put them in one single array
  const transactionsArr = Object.values(transactionsObj).flat(1);

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "70%" },
        margin: "2rem auto",
        marginBottom: "5rem",
        color: "#212529",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Transactions</h2>
      <List aria-labelledby="transaction-list">
        {transactionsArr.map((t) => (
          <TransactionListItem transaction={t} key={t.id} />
        ))}
      </List>
    </Box>
  );
};
