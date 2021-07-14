import React, { useEffect } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.toggleParagraphHandler}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
