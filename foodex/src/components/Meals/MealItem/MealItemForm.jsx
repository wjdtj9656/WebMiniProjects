import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";
import { useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isVaildInput, setIsValidInput] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValidInput(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amonut",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!isVaildInput && <p>바른 값을 입력하세요.</p>}
    </form>
  );
};
export default MealItemForm;
