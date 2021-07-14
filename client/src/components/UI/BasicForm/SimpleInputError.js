import React, { useState } from "react";
import useInput from "../../hooks/use-input-error";
import classes from "./SimpleInputError.module.css";
import "./SimpleInputError.css";

function SimpleInput() {
  console.log("SIMPLE INPUT RUNNING");
  const [isValidForm, setIsValidForm] = useState(false);

  const {
    enterValue: firstNameValue,
    handleOnChange: firstNameChangeHandler,
    handleOnBlur: firstNameBlurHandler,
    hasError: firstNameHasError,
    reset: resetName,
  } = useInput();
  const {
    enterValue: emailValue,
    handleOnChange: emailChangeHandler,
    handleOnBlur: emailBlurHandler,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput();
  //   const [enterValue, setEnterValue] = useState(inputValue);
  let firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  let emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log("ENTERED VALUE::::::::", enteredValue);
    // console.log("WHAT EVENT HAS:::::::", e);
    // setEnteredValue("");
    if (!firstNameHasError && !emailHasError) setIsValidForm(true);
    resetName();
    resetEmail();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleOnSubmit}>
        <div className="control-group">
          <div className={firstNameClasses}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className="error-text">Please enter a first name.</p>
            )}
          </div>
        </div>

        <div className={emailClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
        </div>
        <div className="form-actions">
          <button type="submit" disabled={isValidForm}>
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SimpleInput;
