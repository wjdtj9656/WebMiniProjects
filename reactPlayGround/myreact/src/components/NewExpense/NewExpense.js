import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={onSaveDataHandler} />
    </div>
  );
};
export default NewExpense;
