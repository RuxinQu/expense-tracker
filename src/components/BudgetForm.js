import React, { useState } from "react";
import { Input, FormControl, Button } from "@mui/joy";

export const BudgetFrom = ({ category }) => {
  const [amount, setAmount] = useState(0);
  return (
    <FormControl
      sx={{
        width: "70%",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <label>{category}</label>
      <Input
        type="number"
        slotProps={{
          input: {
            step: 1,
            min: 0,
          },
        }}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        startDecorator={{ dollar: "$" }["dollar"]}
        endDecorator={
          <Button variant="solid" color="primary" type="submit">
            Update
          </Button>
        }
        sx={{ width: 200 }}
      />
    </FormControl>
  );
};
