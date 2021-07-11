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

const App = () => {
  const x = "🍍";
  console.log("APP RUNNING");
  return (
    <React.Fragment>
      <Switch>
        <Route path="/order-food" component={OrderFood} />
        <Route path="/demo-output" component={DemoOutput} />
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
