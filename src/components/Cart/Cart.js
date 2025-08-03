import styles from "./Cart.module.css";

export default function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Загалом</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]}>Закрити</button>
        <button className={styles.button}>Замовити</button>
      </div>
    </div>
  );
}
