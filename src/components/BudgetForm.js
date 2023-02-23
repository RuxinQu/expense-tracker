import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBudgets } from "../features/budgetsSlice";
import { selectTransaction } from "../features/transactionSlice";
import { Box, Input, FormControl, Button, Divider } from "@mui/joy";

export const BudgetFrom = ({ budget }) => {
  // for the input field
  const [amount, setAmount] = useState(0);
  const transactions = useSelector(selectTransaction);

  // change the state from the redux toolkit
  const dispatch = useDispatch();

  const getRemainFunds = () => {
    const cost = transactions[budget.category]
      .map((t) => t.amount)
      .reduce((amount1, amount2) => amount1 + amount2, 0);
    const remainFunds = budget.amount - cost;
    return remainFunds;
  };

  const handleUpdateBudget = () => {
    dispatch(
      updateBudgets({
        category: budget.category,
        amount: parseInt(amount),
      })
    );
    setAmount(0);
  };

  // change the text color based on the remaining funds
  const getBudgetClass = () => {
    if (getRemainFunds() > 0) {
      return "positive";
    } else if (getRemainFunds() < 0) {
      return "negative";
    } else {
      return;
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "70%" },
        margin: "0 auto",
        color: "#212529",
      }}
    >
      <FormControl
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "start", sm: "space-between" },
          alignItems: { xs: "center", sm: "flex-end" },
        }}
      >
        <Box>
          <p style={{ margin: " 0" }}>Category</p>
          <h2>{budget.category}</h2>
          <h3>Total Funds: {budget.amount}</h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            type="number"
            slotProps={{
              input: {
                step: 1,
              },
            }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            startDecorator={{ dollar: "$" }["dollar"]}
            endDecorator={
              <Button variant="soft" onClick={handleUpdateBudget}>
                Update
              </Button>
            }
            sx={{ width: 200 }}
          />
          <h3 className={getBudgetClass()} style={{ marginTop: "1rem" }}>
            Funds Remaining: {getRemainFunds()}
          </h3>
        </Box>
      </FormControl>
      <Divider sx={{ margin: { xs: "1rem", sm: "1.5rem 0" } }} />
    </Box>
  );
};
