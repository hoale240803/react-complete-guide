import React from "react";
import classes from "./InputV1.module.css";

function InputV1(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        onChange={props.handleOnChange}
        onBlur={props.handleOnBlur}
        value={props.enteredValue}
        placeholder={props.placeHolder}
      />
      {props.hasError && (
        <div className={classes.input__error}>
          Please enter {props.id} valid !
        </div>
      )}
    </div>
  );
}

export default InputV1;
