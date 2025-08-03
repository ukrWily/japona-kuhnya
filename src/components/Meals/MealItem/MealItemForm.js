import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

export default function MealItemForm(props) {
  return (
    <form className={styles.form}>
      <Input
        label="кількість"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Додати</button>
    </form>
  );
}
