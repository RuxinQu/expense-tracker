import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBudgets } from "../features/budgetsSlice";
import { Input, FormControl, Button, Divider } from "@mui/joy";

export const BudgetFrom = ({ budget }) => {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const handleUpdateBudget = () => {
    dispatch(
      updateBudgets({
        category: budget.category,
        amount: parseInt(amount),
      })
    );
  };
  const getBudgetClass = () => {
    if (budget.amount > 0) {
      return "positive";
    } else if (budget.amount < 0) {
      return "negative";
    } else {
      return;
    }
  };

  return (
    <div style={{ width: "98%", margin: "0 auto", color: "#212529" }}>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ margin: 2 }}>Category</p>
          <h2 style={{ margin: "5px 0" }}>{budget.category}</h2>
          <h3 style={{ margin: "20px 0 0 0" }} className={getBudgetClass()}>
            Funds Remaining: {budget.amount}
          </h3>
        </div>
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
            <Button
              variant="solid"
              color="primary"
              onClick={handleUpdateBudget}
            >
              Update
            </Button>
          }
          sx={{ width: 200 }}
        />
      </FormControl>
      <Divider sx={{ margin: "20px 0" }} />
    </div>
  );
};
