import { Budgets } from "./components/Budgets";
import { Transaction } from "./components/Transaction";
import { CssVarsProvider } from "@mui/joy/styles";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CssVarsProvider>
        <h1>Expense Tracker</h1>
        <Budgets />
        <Transaction />
      </CssVarsProvider>
    </div>
  );
}

export default App;
