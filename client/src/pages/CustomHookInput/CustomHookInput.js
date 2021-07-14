import React from "react";
import SimpleInputError from "../../components/UI/BasicForm/SimpleInputError";
import SimpleInput from "../../components/UI/BasicForm/SimpleInput";

function CustomHookInput() {
  console.log("CUSTOM HOOK INPUT RUNNING");
  return (
    <div>
      <SimpleInput />
      <SimpleInputError />
    </div>
  );
}

export default CustomHookInput;
