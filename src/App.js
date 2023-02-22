import { Budgets } from "./components/Budgets";
import { CssVarsProvider } from "@mui/joy/styles";
import { CATEGORIES } from "./util/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CssVarsProvider>
        <h1>Expense Tracker</h1>
        <Budgets />
      </CssVarsProvider>
    </div>
  );
}

export default App;
