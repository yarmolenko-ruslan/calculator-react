import React, { useContext } from "react";
import "./calculator.scss";
import ClearButton from "../ClearButton/ClearButton";
import Display from "../Display/Display";
import EqualButton from "../EqualButton/EqualButton";
import FunctionButton from "../FunctionButton/FunctionButton";
import NegativeButton from "../NegativeButton/NegativeButton";
import NumberButton from "../NumberButton/NumberButton";
import Percent from "../Percent/Percent";
import { NumberContext } from "../NumberProvider/NumberProvider";

function Calculator() {
  
  return (
    <div className="calculator">
      <Display />

      <div className="number-box">
        <ClearButton />
        <NegativeButton />
        <Percent value="%" />
        <FunctionButton value="÷" />
        <NumberButton value={"7"} />
        <NumberButton value={"8"} />
        <NumberButton value={"9"} />
        <FunctionButton value="×" />
        <NumberButton value={"4"} />
        <NumberButton value={"5"} />
        <NumberButton value={"6"} />
        <FunctionButton value="-" />
        <NumberButton value={"1"} />
        <NumberButton value={"2"} />
        <NumberButton value={"3"} />
        <FunctionButton value="+" />
        <NumberButton value={"0"} />
        <NumberButton value="." />
        <EqualButton />
      </div>
    </div>
  );
}

export default Calculator;
