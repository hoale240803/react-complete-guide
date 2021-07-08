import React from "react";

const CartContext = React.createContext({
  items: [],
  userInfo: null,
  totalAmount: 0,
  removeItem: (item) => {},
  addItem: (item) => {},
});

export default CartContext;
