import "./negativeButton.scss";
import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

function NegativeButton() {
  const { handleToggleNegative } = useContext(NumberContext);

  return (
    <button
      type="button"
      onClick={handleToggleNegative}
      className="button negative-button"
    >
      -/+
    </button>
  );
}

export default NegativeButton;
