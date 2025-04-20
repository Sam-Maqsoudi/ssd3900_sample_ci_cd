import { useState } from "react";
import "./App.css";
import { calculatorButtons } from "./calculator-bonus-02-button-data";

function App() {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  function handleClick(btnData) {
    switch (btnData.type) {
      case "number":
        handleNumber(btnData.value);
        break;
      case "operator":
        handleOperator(btnData.value);
        break;
      case "clear":
        handleClear(btnData.value);
        break;
      case "memory":
        handleMemory(btnData.value);
        break;
      case "enter":
        calculateResult();
        break;
      case "sign":
        toggleSign();
        break;
      default:
        break;
    }
  }

  function handleNumber(value) {
    if (waitingForSecondNumber) {
      setDisplay(String(value));
      setWaitingForSecondNumber(false);
    } else {
      setDisplay(display === "0" ? String(value) : display + value);
    }
  }

  function handleOperator(op) {
    if (!waitingForSecondNumber) {
      setMemory(parseFloat(display));
      setWaitingForSecondNumber(true);
      setOperator(op);
    }
  }

  function handleClear(value) {
    if (value === "All Clear") {
      setDisplay("0");
      setMemory(null);
      setOperator(null);
    } else {
      setDisplay("0");
    }
  }

  function handleMemory(value) {
    if (value === "Memory Save") {
      setMemory(parseFloat(display));
    } else if (value === "Memory Clear") {
      setMemory(null);
    } else if (value === "Memory Recall" && memory !== null) {
      setDisplay(String(memory));
    } else if (value === "Memory Addition" && memory !== null) {
      setMemory(memory + parseFloat(display));
    } else if (value === "Memory Subtract" && memory !== null) {
      setMemory(memory - parseFloat(display));
    }
  }

  function calculateResult() {
    if (operator && memory !== null) {
      const current = parseFloat(display);
      let result;
      switch (operator) {
        case "+":
          result = memory + current;
          break;
        case "-":
          result = memory - current;
          break;
        case "*":
          result = memory * current;
          break;
        case "/":
          result = memory / current;
          break;
        default:
          return;
      }
      setDisplay(String(result));
      setMemory(null);
      setOperator(null);
      setWaitingForSecondNumber(false);
    }
  }

  function toggleSign() {
    setDisplay(String(parseFloat(display) * -1));
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {calculatorButtons.map((btnData) => (
          <button
            key={btnData.value}
            className={btnData.className}
            onClick={() => handleClick(btnData)}
          >
            {btnData.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
