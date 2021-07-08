import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const CartItem = (props) => {
  const { name, price, amount } = props.meal;

  const cartContext = useContext(CartContext);
  const onRemove = () => {
    cartContext.removeItem(props.meal);
  };
  const onAdd = () => {
    cartContext.addItem({ ...props.meal, amount: 1 });
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
          <span>=</span>
          <span className={classes.subTotal}>{price * amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
