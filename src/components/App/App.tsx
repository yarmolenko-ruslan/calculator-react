import React, { useState } from "react";
import Calculator from "../Calculator/Calculator";
import NumberProvider from "../NumberProvider/NumberProvider";
import "./app.scss";

function App() {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
