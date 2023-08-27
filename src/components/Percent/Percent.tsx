import "./percent.scss";
import React, { useContext } from "react";
import NumberProvider, {
  NumberContext,
} from "../NumberProvider/NumberProvider";

function Percent({ value }: { value: string }) {
  const { hendleSetPercentValue, doMathPercent } = useContext(NumberContext);

  const click = () => {
    hendleSetPercentValue(value);
    doMathPercent();
  };

  return (
    <button type="button" onClick={click} className="button percent-button">
      {value}
    </button>
  );
}

export default Percent;
