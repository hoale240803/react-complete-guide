import CartContext from "./cart-context";
import { useReducer } from "react";
import cartReducer from "./cart.reducer";
const initialCartState = {
  items: [],
  totalAmount: 0,
};
const CartProvider = (props) => {
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    initialCartState
  );
  const removeItemToCartHandler = (item) => {
    dispatchCartActions({
      type: "REMOVE_ITEM",
      payload: item,
    });
  };
  const addItemToCartHandler = (item) => {
    dispatchCartActions({
      type: "ADD_ITEM",
      payload: item,
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    removeItem: removeItemToCartHandler,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
