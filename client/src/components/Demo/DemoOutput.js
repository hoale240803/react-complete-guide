import React, { useState } from "react";
import Header from "./Button/Header";

const DemoOutput = (props) => {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggle = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  console.log("DemoOutput RUNNING");
  return (
    <div className="app">
      <h1>Hi there!</h1>

      {showParagraph ? <p>Paragraph here</p> : ""}
      <Header toggleParagraphHandler={toggle} />
    </div>
  );
};

export default DemoOutput;
