import React, { useCallback, useState } from "react";

function useInputError() {
  console.log("USEINPUT RUNNING");
  const [isValidInput, setIsValidInput] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [enterValue, setEnterValue] = useState("");
  // const [hasError, setHasError] = useState(false);
  const hasError = !isValidInput && isBlur;

  //   VALIDATION
  const validateName = (name) => {
    if (name !== "") return true;
    else return false;
  };
  const validateEmail = (email = "") => {
    if (email.length > 0 && email.includes("@")) {
      return true;
    }
    return false;
  };

  const handleOnChange = (e) => {
    setEnterValue(e.target.value);
  };

  const handleOnBlur = (e) => {
    setIsBlur(true);
    setIsTouched(true);

    if (e.target.id === "firstName") {
      validateName(enterValue) ? setIsValidInput(true) : setIsValidInput(false);
    }

    if (e.target.id === "email") {
      validateEmail(enterValue)
        ? setIsValidInput(true)
        : setIsValidInput(false);
    }
  };
  const reset = () => {
    setEnterValue("");
    setIsTouched(false);
  };

  return {
    isValidInput,
    isBlur,
    hasError,
    enterValue,
    handleOnChange,
    handleOnBlur,
    reset,
    isTouched,
  };
}

export default useInputError;
