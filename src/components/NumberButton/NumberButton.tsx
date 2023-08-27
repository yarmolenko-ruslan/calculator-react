import "./numberButton.scss";
import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

interface IHandleDisplayed {
  value: string;
}

function NumberButton({ value }: IHandleDisplayed) {
  const { handleSetDisplayValue } = useContext(NumberContext);

  let nullButton: string = "";
  if (value === "0") {
    nullButton = "number-button_null";
  } else {
    nullButton = "";
  }

  return (
    <button
      type="button"
      className={`button number-button ${nullButton}`}
      onClick={() => handleSetDisplayValue(value)}
    >
      {value}
    </button>
  );
}

export default NumberButton;
