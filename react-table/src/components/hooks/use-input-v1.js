import React, { useState } from "react";
import {
  INPUT_CHECKOUT_CONSTANT,
  INPUT_COMMON_CONSTANT,
} from "../Constants/INPUT.constant";
import {
  validateIsPhoneNumber,
  validateIsBlank,
} from "../../utils/validation/validation";

function UseInputV1() {
  console.log("USE_INPUT_V1 RUNNING");
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const hasError = !isValidInput && isBlur;

  const handleOnChange = (e) => {
    setEnteredValue(e.target.value);
  };
  const handleOnBlur = (e) => {
    setIsBlur(true);
    // VALIDATION INPUT
    switch (e.target.id) {
      case INPUT_COMMON_CONSTANT.PHONE_NUMBER:
        if (
          !validateIsBlank(enteredValue) &&
          validateIsPhoneNumber(enteredValue)
        )
          setIsValidInput(true);
        break;
      default:
        if (!validateIsBlank(enteredValue)) setIsValidInput(true);
        break;
    }
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(true);
  };

  return {
    isTouched,
    enteredValue,
    hasError,
    handleOnChange,
    handleOnBlur,
    reset,
    isBlur,
  };
}

export default UseInputV1;
