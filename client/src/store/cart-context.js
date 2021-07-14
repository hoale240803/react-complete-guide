import React from "react";

const CartContext = React.createContext({
  items: [],
  userInfo: null,
  totalAmount: 0,
  isShowCart: false,
  removeItem: (item) => {},
  addItem: (item) => {},
  toggleShowCart: (item) => {},
  clearCart: () => {},
});

export default CartContext;
