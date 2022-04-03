import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const accountHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnterDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      account: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleHandler}></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>account</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={accountHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>date</label>
          <input type="date" value={enterDate} onChange={dateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
