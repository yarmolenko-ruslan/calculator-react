import "./display.scss";
import React, { useContext } from "react";
import { NumberContext } from "../NumberProvider/NumberProvider";

function Display() {
  const { number, storedNumber } = useContext(NumberContext);

  let dis: string = "";

  if (number.length <= 7) {
    dis = "display";
  } else {
    dis = "display display_small";
  }

  return (
    <p className={dis}>
      {!number.length && !storedNumber ? "0" : number || storedNumber}
    </p>
  );
}

export default Display;
