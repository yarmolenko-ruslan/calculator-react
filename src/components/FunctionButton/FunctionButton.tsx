import "./functionButton.scss";
import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

function FunctionButton({ value }: { value: string }) {
  const { handleSetCalcFunction } = useContext(NumberContext);

  const click = () => {
    handleSetCalcFunction(value);
  };

  return (
    <button type="button" onClick={click} className="button function-button">
      {value}
    </button>
  );
}

export default FunctionButton;
