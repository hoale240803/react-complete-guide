import React, { useContext, useState } from "react";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import MainHeader from "../../components/MainHeader/MainHeader";
import NewExpense from "../../components/NewExpense/NewExpense";
import Expenses from "../../components/Expenses/Expenses";

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
function Expenses() {
  console.log("EXPENSE RUNNING");
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const ctx = useContext(AuthContext);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <React.Fragment>
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </React.Fragment>
      <React.Fragment>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </React.Fragment>
    </div>
  );
}

export default Expenses;
