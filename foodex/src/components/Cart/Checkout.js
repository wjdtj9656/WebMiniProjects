import styles from "./Checkout.module.css";
const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name"> Your name</label>
        <input id="name" type="text" />
      </div>
      <div className={styles.control}>
        <label htmlFor="location"> 주소지 </label>
        <input id="location" type="text" />
      </div>
      <button type="button" onClick={props.onClick}>
        취소
      </button>
      <button>확인</button>
    </form>
  );
};

export default Checkout;
