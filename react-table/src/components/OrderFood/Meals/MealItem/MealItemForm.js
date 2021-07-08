import { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../../store/cart-context";

const MealItemForm = (props) => {
  const [amountText, setAmountText] = useState(1);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const cartContext = useContext(CartContext);
  const { id, name, price } = props.meal;
  const submitHandler = (event) => {
    event.preventDefault();
    // VALIDATE INPUT
    if (amountText < 1 || amountText > 5) {
      setAmountIsValid(false);
      return;
    }
    // DATA NORMALIZATION
    const itemToAdd = {
      id: id,
      name: name,
      amount: amountText,
      price: price,
    };
    // SEND DATA TO CONTEXT API/ REDUCER AFTER FORWARDS
    cartContext.addItem(itemToAdd);
    setAmountIsValid(true);
  };
  const handleOnChange = (e) => {
    setAmountText(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={props.id}>{props.label}</label>
        <input type="number" onChange={handleOnChange} defaultValue={1} />
      </div>
      <button type="submit">+ Add</button>
      {!amountIsValid && (
        <p className={classes.input__invalid}>
          Please enter a valid amount (1-5).
        </p>
      )}
    </form>
  );
};

export default MealItemForm;
