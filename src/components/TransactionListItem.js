import { ListItem, IconButton } from "@mui/joy";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../features/transactionSlice";
import CloseIcon from "@mui/icons-material/Close";

export const TransactionListItem = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleRemoveTransaction = (t) => {
    dispatch(removeTransaction(t));
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "sm",
        boxShadow: "sm",
      }}
    >
      <span>
        $ {transaction.amount} - {transaction.category} (
        {transaction.description}){" "}
      </span>
      <IconButton
        variant="plain"
        onClick={() => handleRemoveTransaction(transaction)}
      >
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
};
