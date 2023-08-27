import React, { ReactNode, useState } from "react";

interface NumberContextValue {
  handleSetDisplayValue: (num: string) => void;
  handleSetStoredValue: () => void;
  handleClearValue: () => void;
  handleSetCalcFunction: (type: string) => void;
  handleToggleNegative: () => void;
  doMath: () => void;
  number: string;
  storedNumber: string;
  functionType: string;
  hendleSetPercentValue: (type: string) => void;
  doMathPercent: () => void;
}

interface NumberProviderProps {
  children: ReactNode;
}

export const NumberContext = React.createContext<NumberContextValue>({
  handleSetDisplayValue: (num: string) => {},
  handleSetStoredValue: () => {},
  handleClearValue: () => {},
  handleSetCalcFunction: (type: string) => {},
  handleToggleNegative: () => {},
  doMath: () => {},
  number: "",
  storedNumber: "",
  functionType: "",
  hendleSetPercentValue: () => {},
  doMathPercent: () => {},
});

const NumberProvider: React.FC<NumberProviderProps> = (props) => {
  const [number, setNumber] = useState<string>("");
  const [storedNumber, setStoredNumber] = useState<string>("");
  const [functionType, setFunctionType] = useState<string>("");

  const handleSetDisplayValue = (num: string) => {
    if ((!number.includes(".") || num !== ".") && number.length < 14) {
      setNumber(`${number + num}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber("");
  };

  const handleClearValue = () => {
    setNumber("");
    setStoredNumber("");
    setFunctionType("");
  };

  const handleSetCalcFunction = (type: string) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
      handleSetStoredValue();
    }
  };

  const hendleSetPercentValue = (type: string) => {
    if (number) {
      setFunctionType(type);
      setStoredNumber(number);
    }
  };

  const handleToggleNegative = () => {
    const arrNumber: string[] = number.split("");

    if (number && arrNumber[0] !== "-") {
      if (number.length > 0) {
        setNumber(`-${number}`);
      }
    } else if (storedNumber.length > 0) {
      setStoredNumber(`-${storedNumber}`);
    }

    if (arrNumber[0] == "-") {
      const positiveNumber = number.slice(1);
      setNumber(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case "+":
          setStoredNumber(
            `${
              Math.round(
                (parseFloat(storedNumber) + parseFloat(number)) * 1000
              ) / 1000
            }`
          );
          break;
        case "-":
          setStoredNumber(
            `${
              Math.round(
                (parseFloat(storedNumber) - parseFloat(number)) * 1000
              ) / 1000
            }`
          );
          break;
        case "÷":
          setStoredNumber(
            `${
              Math.round(
                (parseFloat(storedNumber) / parseFloat(number)) * 1000
              ) / 1000
            }`
          );
          break;
        case "×":
          setStoredNumber(
            `${
              Math.round(parseFloat(storedNumber) * parseFloat(number) * 1000) /
              1000
            }`
          );
          break;
        default:
          break;
      }
      setNumber("");
    }
  };

  const doMathPercent = () => {
    if (number) {
      setStoredNumber(`${parseFloat(number) / 100}`);
    }
    setNumber("");
  };

  return (
    <NumberContext.Provider
      value={{
        handleSetDisplayValue,
        handleSetStoredValue,
        handleClearValue,
        handleSetCalcFunction,
        handleToggleNegative,
        doMath,
        number,
        storedNumber,
        functionType,
        hendleSetPercentValue,
        doMathPercent,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
