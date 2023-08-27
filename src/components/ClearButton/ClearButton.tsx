import "./clearButton.scss";
import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

function ClearButton() {
  const { handleClearValue } = useContext(NumberContext);

  return (
    <button
      type="button"
      onClick={handleClearValue}
      className="button clear-button"
    >
      AC
    </button>
  );
}

export default ClearButton;
