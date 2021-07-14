// là library không rerender khi thay đổi state
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

// nếu selectCart có thay đổi thì sẽ gán cart đó vào trong cartItems
// sử dụng trong cart-dropdown
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//tính tổng số items trong cart vd 2 áo + 3 quần => là 5 cái items

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
