import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Загалом</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.onHideCart}>
          Закрити
        </button>
        <button className={styles.button}>Замовити</button>
      </div>
    </Modal>
  );
}
