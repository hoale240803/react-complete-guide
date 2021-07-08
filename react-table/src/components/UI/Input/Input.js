// import React, { useRef, useImperativeHandle } from "react";

// import classes from "./Input.module.css";

// const Input = React.forwardRef((props, ref) => {
//   const inputRef = useRef();

//   const activate = () => {
//     inputRef.current.focus();
//   };

//   useImperativeHandle(ref, () => {
//     return {
//       focus: activate,
//       outerWidth: "10px",
//     };
//   });

//   return (
//     <div
//       className={`${classes.control} ${
//         props.isValid === false ? classes.invalid : ""
//       }`}
//     >
//       <label htmlFor={props.id}>{props.label}</label>
//       <input
//         ref={inputRef}
//         type={props.type}
//         id={props.id}
//         value={props.value}
//         onChange={props.onChange}
//         onBlur={props.onBlur}
//       />
//     </div>
//   );
// });

// export default Input;

import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="number" onChange={props.handleOnChange} />
    </div>
  );
};

export default Input;
