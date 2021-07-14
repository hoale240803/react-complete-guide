import { addItemToCart, removeItemFromCart } from "./cart.utils";

const initialCartState = {
  items: [],
  userInfo: null,
  totalAmount: 0,
  removeItem: (item) => {},
  addItem: (item) => {},
};
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      let tempRemove = removeItemFromCart(
        state.items,
        action.payload,
        state.totalAmount
      );
      // COPY DATA FROM PREVIOUS STATE, ASSIGN NEW VALUE FOR ITEM WHICH NEED TO UPDATE
      return {
        ...state,
        items: tempRemove[0],
        totalAmount: tempRemove[1],
      };
    case "ADD_ITEM":
      let temp = addItemToCart(state.items, action.payload, state.totalAmount);
      return {
        ...state,
        items: temp[0],
        totalAmount: temp[1],
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        totalAmount: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
