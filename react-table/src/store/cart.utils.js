export const addItemToCart = (cartItems, cartItemToAdd, totalAmount) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  let updatedTotalAmount = 0;
  let updatedCartItems = [];
  // IF THE cartItemToAdd IS EXIST. FIRST: UPDATING AMOUNT OF ITEM, SECOND: CALCULATING THE TOTAL AMOUNT
  if (existingCartItem) {
    updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            amount: cartItem.amount + parseInt(cartItemToAdd.amount),
          }
        : cartItem
    );
    updatedTotalAmount =
      totalAmount + cartItemToAdd.price * cartItemToAdd.amount;
    return [updatedCartItems, updatedTotalAmount];
  } else {
    // IF THE cartItemToAdd IS NOT EXIST. FIST: ADD NEW THE AMOUNT PROPERTY FOR ITEM
    updatedCartItems = [
      ...cartItems,
      { ...cartItemToAdd, amount: cartItemToAdd.amount },
    ];
    updatedTotalAmount =
      totalAmount + cartItemToAdd.price * cartItemToAdd.amount;
    return [updatedCartItems, updatedTotalAmount];
  }
};
// FIRST: CALCULATING THE TOTAL AMOUNT
// SECOND: IF AMOUNT OF ITEM > 1, DOWN VOTE IT WITH 1 VALUE
// THIRD: ELSE FILTER THE ITEMS WITH THE REMOVED ITEM
export const removeItemFromCart = (
  cartItems,
  cartItemToRemove,
  totalAmount
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  let updatedCartItems = [];
  //FIRST
  let updatedTotalAmount = totalAmount - existingCartItem.price;
  // SECOND
  if (existingCartItem.amount > 1) {
    updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, amount: cartItem.amount - 1 }
        : cartItem
    );
    return [updatedCartItems, updatedTotalAmount];
  } else {
    // THIRD
    updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToRemove.id
    );
    return [updatedCartItems, updatedTotalAmount];
  }
};
