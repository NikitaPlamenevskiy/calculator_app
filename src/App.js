import { useState } from "react";
import "./App.css";

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = ["*", "-", "+", "/"];

function App() {
  const [value, setValue] = useState({
    a: null,
    b: null,
  });
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState("");

  function handleClick(button) {
    if (value.a === null) {
      setValue({ ...value, a: button });
    } else {
      setValue({ ...value, b: button });
    }
  }

  function handleOperator(operation) {
    setCurrentOperation(operation);
  }

  console.log(value);
  console.log(currentOperation);

  function getOperation() {
    if (currentOperation === "*") {
      setResult(value.a * value.b);
    }
    // if (currentOperation === "+") {
    //   setResult((currentNumber) => ({
    //     ...currentNumber,
    //     result: currentNumber.a + currentNumber.b,
    //   }));
    // }
    // if (currentOperation === "-") {
    //   setResult((currentNumber) => ({
    //     ...currentNumber,
    //     result: currentNumber.a - currentNumber.b,
    //   }));
    // }
    // if (currentOperation === "/") {
    //   if (value.b === 0) {
    //     return setValue({ ...value, res: "Деление на ноль невозможно" });
    //   }

    //   setValue((currentNumber) => ({
    //     ...currentNumber,
    //     result: currentNumber.a / currentNumber.b,
    //   }));
    // }
  }

  function clear() {
    setValue({ a: null, b: null });
    setCurrentOperation("");
    setResult("");
  }

  return (
    <div className="App">
      <div>
        {value.a} {currentOperation} {value.b} {result}
      </div>
      {buttons.map((button) => {
        return (
          <button
            key={button}
            onClick={() => {
              handleClick(button);
            }}
          >
            {button}
          </button>
        );
      })}
      {operations.map((operation) => {
        return (
          <button
            key={operation}
            onClick={() => {
              handleOperator(operation);
            }}
          >
            {operation}
          </button>
        );
      })}
      <button
        onClick={() => {
          clear();
        }}
      >
        C
      </button>
      <button
        onClick={() => {
          getOperation();
        }}
      >
        =
      </button>
    </div>
  );
}

export default App;
