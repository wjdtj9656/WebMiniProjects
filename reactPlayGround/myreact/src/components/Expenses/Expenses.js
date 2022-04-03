import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const saveFilter = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  return (
    <div>
      <ExpensesFilter selected={filterYear} onSaveFilter={saveFilter} />
      <div className="expenses">
        {props.items.map((expense) => {
          return <ExpenseItem val={expense}></ExpenseItem>;
        })}
      </div>
    </div>
  );
};
export default Expenses;
