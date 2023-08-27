import "./actionButton.scss";
import React from "react";

function ActionButton({ value }: { value: string }) {
  return (
    <button type="button" className="button function-button">
      {value}
    </button>
  );
}

export default ActionButton;
