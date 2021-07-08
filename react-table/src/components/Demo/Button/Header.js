import React from "react";
import Button from "./Button";

function Header(props) {
  console.log("header RUNNING");

  return (
    <Button toggleParagraphHandler={props.toggleParagraphHandler}>
      Toggle Paragraph!
    </Button>
  );
}

export default Header;
