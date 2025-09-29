import { useState } from "react";
import "./App.css";

const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = ["*", "-", "+", "/"];

function App() {
  const [value, setValue] = useState({
    a: null,
    b: null,
    operation: "",
  });

  const [result, setResult] = useState("0");

  function handleClick(button) {
    if (value.operation === "") {
      setValue({ ...value, a: (value.a ?? "") + button });
    } else {
      setValue({ ...value, b: (value.b ?? "") + button });
    }
  }

  function handleOperator(button) {
    setValue({ ...value, operation: button });
  }

  console.log(value);

  function getOperation() {
    const operators = {
      "+": (a, b) => {
        return `=${a + b}`;
      },
      "-": (a, b) => {
        return `=${a - b}`;
      },
      "*": (a, b) => {
        return `=${a * b}`;
      },
      "/": (a, b) => {
        return `=${a / b}`;
      },
    };
    if (operators[value.operation]) {
      setResult(operators[value.operation](value.a, value.b));
    }
  }

  function clear() {
    setValue({ a: null, b: null, operation: "" });
    setResult("0");
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <p className="operation">
          {value.a} {value.operation} {value.b}
        </p>
        <p className="result"> {result}</p>
        <div className="buttons-container">
          {buttons.map((button) => {
            return (
              <button
                className="button button_number"
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
                className="button button_operation"
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
            className="button button_operation"
            onClick={() => {
              clear();
            }}
          >
            Ac
          </button>
          <button
            className="button button_operation"
            onClick={() => {
              getOperation();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
