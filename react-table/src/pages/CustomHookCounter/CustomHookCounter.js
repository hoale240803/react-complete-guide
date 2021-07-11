import React from "react";
import BackwardCounter from "../../components/Counter/BackwardCounter";
import ForwardCounter from "../../components/Counter/ForwardCounter";

function CustomHookCounter() {
  return (
    <div>
      <ForwardCounter />
      <BackwardCounter />
    </div>
  );
}

export default CustomHookCounter;
