import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "Car insurance",
      amount: 294.67,
      date: new Date(2021, 4, 30).toISOString(),
    },
    { title: "Car insurance", amount: 294.67, date: new Date(2022, 4, 30) },
    { title: "Car insurance", amount: 294.67, date: new Date(2022, 4, 30) },
  ];
  return (
    <>
      <h1>let's get started</h1>
      <ExpenseItem val={expenses[0]}></ExpenseItem>
    </>
  );
}

export default App;
