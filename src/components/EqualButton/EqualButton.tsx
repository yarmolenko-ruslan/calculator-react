import "./equalButton.scss";
import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

function EqualButton() {
  const { doMath } = useContext(NumberContext);
  
  return (
    <button type="button" onClick={doMath} className="button equal-button">
      =
    </button>
  );
}

export default EqualButton;
