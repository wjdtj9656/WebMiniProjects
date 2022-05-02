import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import cartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useState } from "react";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  const [showInput, setShowInput] = useState(false);
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const runOrder = () => {
    setShowInput(true);
  };
  const buttons = () => {
    return (
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseChart}>
          Close
        </button>
        <button className={styles.button} onClick={runOrder}>
          Order
        </button>
      </div>
    );
  };
  return (
    <Modal onCloseChart={props.onCloseChart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      {showInput && <Checkout onClick={props.onCloseChart} />}
      {!showInput && buttons()}
    </Modal>
  );
};

export default Cart;
