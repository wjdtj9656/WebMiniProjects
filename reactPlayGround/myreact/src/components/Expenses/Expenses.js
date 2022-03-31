import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = () => {
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
  return (
    <div className="expenses">
      <ExpenseItem val={expenses[0]}></ExpenseItem>
      <ExpenseItem val={expenses[1]}></ExpenseItem>
      <ExpenseItem val={expenses[2]}></ExpenseItem>
    </div>
  );
};
export default Expenses;
