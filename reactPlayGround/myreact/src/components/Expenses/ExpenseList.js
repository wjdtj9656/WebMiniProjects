import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenes found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return <ExpenseItem key={expense.id} val={expense} />;
      })}
    </ul>
  );
};

export default ExpenseList;
