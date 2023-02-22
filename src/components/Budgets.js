import { BudgetFrom } from "./BudgetForm";
export const Budgets = ({ categories }) => {
  return categories.map((c) => <BudgetFrom key={c} category={c} />);
};
