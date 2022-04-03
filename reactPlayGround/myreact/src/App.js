import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      title: "Car insurance",
      amount: 294.67,
      date: new Date(2021, 2, 30),
    },
    {
      title: "Car insurance2",
      amount: 294.674,
      date: new Date(2022, 2, 31),
    },
    {
      title: "Car insurance3",
      amount: 294.627,
      date: new Date(2022, 3, 31),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <>
      <h1>let's get started</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
