import React, { useContext, useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";

import AuthContext from "./store/auth-context-api";
import Modal from "./components/UI/Modal/Modal";

// ORDER FOOD
import Header from "./components/OrderFood/Layout/Header";
import Meals from "./components/OrderFood/Meals/Meals";
import Cart from "./components/OrderFood/Cart/Cart";
import CartProvider from "./store/CartProvider";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/Demo/Button/Button";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const ctx = useContext(AuthContext);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const [isShowCart, setIsShowCart] = useState(false);
  const toggleModal = () => {
    setIsShowCart(!isShowCart);
  };
  const x = "🍍";

  // FOR DEMO RE-EVALUATED
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  // const toggleParagraphHandler = () => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // };

  return (
    // <React.Fragment>

    //   <React.Fragment>
    //     <MainHeader />
    //     <main>
    //       {!ctx.isLoggedIn && <Login />}
    //       {ctx.isLoggedIn && <Home />}
    //     </main>
    //   </React.Fragment>
    //   <React.Fragment>
    //     <NewExpense onAddExpense={addExpenseHandler} />
    //     <Expenses items={expenses} />
    //   </React.Fragment>
    // </React.Fragment>

    <React.Fragment>
      {/* ORDER FOOD */}
      {/* <CartProvider>
        {isShowCart && <Cart onShowCart={toggleModal} />}
        <Header onShowCart={toggleModal} />
        <main>
          <Meals />
        </main>
      </CartProvider> */}

      {/* DEMO RE-EVALUATED */}
      <div className="app">
        <DemoOutput />
      </div>
    </React.Fragment>
  );
};

export default App;
