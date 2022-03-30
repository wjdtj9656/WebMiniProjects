import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.val.date}</div>
      <div className="expense-item__description">
        <h2>{props.val.title}</h2>
        <div className="expense-item__price">${props.val.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
