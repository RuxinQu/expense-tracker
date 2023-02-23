import * as React from "react";
import { useSelector } from "react-redux";
import { selectTransaction } from "../features/transactionSlice";
import { TransactionListItem } from "./TransactionListItem";
import { Box, List } from "@mui/joy";

export const TransactionList = () => {
  const transactionsObj = useSelector(selectTransaction);
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
