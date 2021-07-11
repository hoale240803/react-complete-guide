import React, { useContext } from "react";
import Cart from "../../components/OrderFood/Cart/Cart";
import Header from "../../components/OrderFood/Layout/Header";
import Meals from "../../components/OrderFood/Meals/Meals";
import CartContext from "../../store/cart-context";

function OrderFood() {
  console.log("ORDER FOOD RUNNING!!!");
  const cartContext = useContext(CartContext);
  return (
    <div>
      {/* ORDER FOOD */}
      {cartContext.isShowCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default OrderFood;
