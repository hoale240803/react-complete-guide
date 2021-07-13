import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ReduxCounter from "./components/Counter/ReduxCounter/ReduxCounter";
import DemoOutput from "./components/Demo/DemoOutput";
import MoviesDashboard from "./components/Movies/MoviesDashboard";
import TasksDashboard from "./components/Tasks/TasksDashboard";
import CustomHookCounter from "./pages/CustomHookCounter/CustomHookCounter";
import CustomHookInput from "./pages/CustomHookInput/CustomHookInput";
import OrderFood from "./pages/OrderFood/OrderFood";
import AuthContext from "./store/auth-context-api";
import CartContext from "./store/cart-context";
import Expenses from "./components/Expenses/Expenses";
import MovieDetails from "./components/Movies/MovieDetails/MovieDetails";
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
  const x = "🍍";
  console.log("APP RUNNING");
  return (
    <React.Fragment>
      <Switch>
        <Route path="/expenses">
          <Expenses items={DUMMY_EXPENSES} />
        </Route>
        <Route path="/order-food" component={OrderFood} />
        <Route path="/demo-output" component={DemoOutput} />
        <Route path="/movies/:movieId">
          <h1>Hello </h1>
        </Route>
        <Route path="/movies" component={MoviesDashboard} />

        <Route path="/custom-hook-counter" component={CustomHookCounter} />
        <Route path="/tasks" component={TasksDashboard} />
        <Route path="/custom-hook-input" component={CustomHookInput} />
        <Route path="/redux-counter" component={ReduxCounter} />
        {/* <Route exact path="/checkout" component={CheckoutPage} /> */}
        <Route exact path="/" component={OrderFood} />
        {/* <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          /> */}
      </Switch>
    </React.Fragment>
  );
};

export default App;
