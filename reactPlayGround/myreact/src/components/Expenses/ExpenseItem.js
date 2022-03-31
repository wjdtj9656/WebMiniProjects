import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.val.date} />
      <div className="expense-item__description">
        <h2>{props.val.title}</h2>
        <div className="expense-item__price">${props.val.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
