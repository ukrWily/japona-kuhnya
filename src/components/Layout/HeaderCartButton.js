import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Кошик</span>
      <span className={styles.badge}>2</span>
    </button>
  );
}
