import React, { useContext, useState } from "react";
import UseInputV1 from "../../hooks/use-input-v1";
import Button from "../../UI/Button/Button";
import InputV1 from "../../UI/InputV1/InputV1";
import classes from "./Checkout.module.css";
import {
  INPUT_CHECKOUT_CONSTANT,
  INPUT_COMMON_CONSTANT,
} from "../../Constants/INPUT.constant";
import CartContext from "../../../store/cart-context";

function Checkout(props) {
  console.log("CHECKOUT RUNNING");
  const cartContext = useContext(CartContext);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    enteredValue: enteredCity,

    handleOnBlur: handleCityOnBlur,
    handleOnChange: handleCityOnChange,
    hasError: cityHasError,
    isBlur: isCityBlur,
    reset: resetCity,
  } = UseInputV1();
  const {
    enteredValue: enteredName,

    handleOnBlur: handleNameOnBlur,
    handleOnChange: handleNameOnChange,
    hasError: nameHasError,
    isBlur: isNameBlur,
    reset: resetName,
  } = UseInputV1();
  const {
    enteredValue: enteredPhoneNumber,
    isTouched: isPhoneNumberTouched,
    handleOnBlur: handlePhoneNumberOnBlur,
    handleOnChange: handlePhoneNumberOnChange,
    hasError: phoneNumberHasError,
    isBlur: isPhoneNumberBlur,
    reset: resetPhoneNumber,
  } = UseInputV1();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      !cityHasError &&
      isCityBlur &&
      !nameHasError &&
      isNameBlur &&
      !phoneNumberHasError &&
      isPhoneNumberBlur
    ) {
      setIsSubmitted(true);
    }

    let checkoutData = {
      city: enteredCity,
      name: enteredName,
      phone: enteredPhoneNumber,
    };
    console.log("DATA TO CHECKOUT", checkoutData);

    resetCity();
    resetName();
    resetPhoneNumber();

    // CLEAR CART
    props.handleCheckOuted();
  };
  const handleCloseCart = () => {
    cartContext.toggleShowCart();
  };
  return (
    <React.Fragment>
      <form
        action=""
        onSubmit={handleOnSubmit}
        className={classes.input__checkout}
      >
        <h1> 🦐 Check Out Here! 🦐 </h1>
        <InputV1
          id={INPUT_CHECKOUT_CONSTANT.CITY}
          type="text"
          value={enteredCity}
          handleOnBlur={handleCityOnBlur}
          handleOnChange={handleCityOnChange}
          hasError={cityHasError}
          isBlur={isCityBlur}
          label={INPUT_CHECKOUT_CONSTANT.CITY}
          placeHolder={INPUT_CHECKOUT_CONSTANT.CITY}
        />
        <InputV1
          id={INPUT_COMMON_CONSTANT.NAME}
          type="text"
          value={enteredName}
          handleOnBlur={handleNameOnBlur}
          handleOnChange={handleNameOnChange}
          hasError={nameHasError}
          isBlur={isNameBlur}
          placeHolder={INPUT_COMMON_CONSTANT.NAME}
          label={INPUT_COMMON_CONSTANT.NAME}
        />
        <InputV1
          id={INPUT_COMMON_CONSTANT.PHONE_NUMBER}
          type="number"
          value={enteredPhoneNumber}
          handleOnBlur={handlePhoneNumberOnBlur}
          handleOnChange={handlePhoneNumberOnChange}
          hasError={phoneNumberHasError}
          isBlur={isPhoneNumberBlur}
          label={INPUT_COMMON_CONSTANT.PHONE_NUMBER}
          placeHolder={INPUT_COMMON_CONSTANT.PHONE_NUMBER}
        />
        <div className={classes.group__button}>
          <Button onClick={props.handleBackToCart}>Back To Cart</Button>
          <Button disabled={isSubmitted} type="submit">
            Checkout
          </Button>
          <Button className={classes["button--alt"]} onClick={handleCloseCart}>
            Close
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Checkout;
