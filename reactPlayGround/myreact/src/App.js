import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  return (
    <>
      <h1>let's get started</h1>
      <NewExpense />
      <Expenses />
    </>
  );
};

export default App;
