import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");
  const saveFilter = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const selectYearItems = props.items.filter(
    (expense) => filterYear === expense.date.getFullYear().toString()
  );

  return (
    <div>
      <ExpensesFilter selected={filterYear} onSaveFilter={saveFilter} />
      <ExpensesChart expenses={selectYearItems} />
      <div className="expenses">
        <ExpenseList items={selectYearItems} />
      </div>
    </div>
  );
};
export default Expenses;
