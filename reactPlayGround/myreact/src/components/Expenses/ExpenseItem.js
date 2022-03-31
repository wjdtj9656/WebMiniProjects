import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.val.title);

  const titleHandler = () => {
    setTitle("use State");
    console.log("??");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.val.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.val.amount}</div>
        <button onClick={titleHandler}></button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
