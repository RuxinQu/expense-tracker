import { Budgets } from "./components/Budgets";
import { CssVarsProvider } from "@mui/joy/styles";
import "./App.css";

const CATEGORIES = [
  "Housing",
  "Food",
  "Entertainment",
  "Transportation",
  "Clothing",
];

function App() {
  return (
    <div className="App">
      <CssVarsProvider>
        <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
        <Budgets categories={CATEGORIES} />
      </CssVarsProvider>
    </div>
  );
}

export default App;
