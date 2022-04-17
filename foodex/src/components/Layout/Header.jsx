import styles from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactFood</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImage} alt="header"></img>
      </div>
    </>
  );
};

export default Header;
