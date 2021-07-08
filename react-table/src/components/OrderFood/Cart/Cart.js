import classes from "./Cart.module.css";
import Modal from "../../UI/Modal/Modal";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartItem from "../Cart/CartItem";
const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.items.length > 0;
  const mealsList =
    cartContext.items.length > 0 ? (
      cartContext.items.map((meal) => (
        <ul className={classes["cart-items"]}>
          <CartItem key={meal.id} meal={meal} />
        </ul>
      ))
    ) : (
      <div className={classes.empty__list}>
        Empty List
        <hr />
      </div>
    );
  return (
    <Modal>
      {mealsList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartContext.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onShowCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
