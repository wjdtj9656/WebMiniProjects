import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [showFlag, setShowFlag] = useState(false);
  const onSaveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowFlag(false);
  };
  const showFlagHandler = () => {
    setShowFlag(true);
  };
  const cancelShowHandler = () => {
    setShowFlag(false);
  };
  return (
    <div className="new-expense">
      {!showFlag && <button onClick={showFlagHandler}>Add New Expense</button>}
      {showFlag && (
        <ExpenseForm
          onSaveData={onSaveDataHandler}
          onCancel={cancelShowHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
