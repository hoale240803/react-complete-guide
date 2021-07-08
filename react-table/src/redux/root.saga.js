import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  // all : có nhiều saga thì call đúng tên nó nó sẽ hoạt động
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
