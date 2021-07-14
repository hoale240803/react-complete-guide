import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./store/auth-context-api";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";
import { Provider } from "react-redux";
import store from "./redux_test/store";
import { BrowserRouter } from "react-router-dom";
// CONTEXT API REMEMBER THAT:: WRAPPER BY PROVIDER
// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
