import { BudgetFrom } from "./BudgetForm";
import { selectBudgets } from "../features/budgetsSlice";
import { useSelector } from "react-redux";

export const Budgets = () => {
  const budgets = useSelector(selectBudgets);
  return budgets.map((budget) => (
    <BudgetFrom key={budget.category} budget={budget} />
  ));
};
