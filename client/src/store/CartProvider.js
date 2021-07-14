import CartContext from "./cart-context";
import { useReducer, useState } from "react";
import cartReducer from "./cart.reducer";
const initialCartState = {
  items: [],
  userInfo: null,
  totalAmount: 0,
  isShowCart: false,
  removeItem: (item) => {},
  addItem: (item) => {},
  toggleShowCart: () => {},
  clearCart: () => {},
};
const CartProvider = (props) => {
  const [cartState, dispatchCartActions] = useReducer(
    cartReducer,
    initialCartState
  );
  const [isShowCart, setIsShowCart] = useState(false);
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
  const toggleShowCart = (item) => {
    setIsShowCart((prevState) => !prevState);
  };
  const clearCart = () => {
    dispatchCartActions({
      type: "CLEAR_CART",
    });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    isShowCart: isShowCart,
    removeItem: removeItemToCartHandler,
    addItem: addItemToCartHandler,
    toggleShowCart: toggleShowCart,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
