import classes from "./Cart.module.css";
import Modal from "../../UI/Modal/Modal";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartItem from "../Cart/CartItem";
import Checkout from "../Checkout/Checkout";
const Cart = (props) => {
  console.log("CART RUNNING");
  const cartContext = useContext(CartContext);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  // const [orderIsVisible, setOrderIsVisible] = useState(initialState);

  const hasItems = cartContext.items.length > 0;
  const mealsList =
    cartContext.items.length > 0 ? (
      cartContext.items.map((meal) => (
        <ul className={classes["cart-items"]} key={meal.id}>
          <CartItem key={meal.id} meal={meal} />
        </ul>
      ))
    ) : (
      <div className={classes.empty__list}>
        Empty List
        <hr />
      </div>
    );
  const orderIsVisibleHandle = () => {
    setIsOrdered(false);
  };
  const handleOrderClick = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdered(true);
      setIsOrdering(false);
    }, 500);
  };
  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);
  const handleCloseCart = () => {
    cartContext.toggleShowCart();
  };
  const onHandleCheckOuted = () => {
    cartContext.clearCart();
  };
  return (
    <Modal>
      {isOrdered ? (
        <Checkout
          handleBackToCart={orderIsVisibleHandle}
          handleCheckOuted={onHandleCheckOuted}
        />
      ) : (
        <React.Fragment>
          {mealsList}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartContext.totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={handleCloseCart}
            >
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={handleOrderClick}>
                {isOrdering ? "Ordering" : "Order"}
              </button>
            )}
          </div>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default Cart;
