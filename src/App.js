import { useState } from "react";
import "./App.css";
import icon_delete from "./icon_delete.svg";

const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
const operations = ["*", "-", "+", "/"];

function App() {
  const [value, setValue] = useState({
    a: null,
    b: null,
    operation: "",
  });

  const [result, setResult] = useState("");

  function handleClick(button) {
    if (value.operation === "") {
      setValue({ ...value, a: (value.a ?? "") + button });
    } else {
      setValue({ ...value, b: (value.b ?? "") + button });
    }
  }

  function handleOperator(button) {
    if (value.a === null) {
      setValue({ ...value, a: "0", operation: button });
    } else {
      setValue({ ...value, operation: button });
    }
  }

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
      setResult(operators[value.operation](Number(value.a), Number(value.b)));
    }
  }

  function clear() {
    setValue({ a: null, b: null, operation: "" });
    setResult("");
  }

  function trim() {
    if (value.a !== null) {
      setValue({
        ...value,
        a: value.a.slice(0, -1),
        b: value.b,
        operation: value.operation,
      });
    }

    if (value.b !== null) {
      setValue({
        ...value,
        a: value.a,
        b: value.b.slice(0, -1),
        operation: value.operation,
      });
    }
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <div style={{ width: "100%" }}>
          <p className="operation">
            {value.a} {value.operation} {value.b}
          </p>
          <p className="result"> {result}</p>
        </div>
        <div className="buttons-container">
          <button
            className="button button_edit"
            onClick={() => {
              clear();
            }}
          >
            Ac
          </button>
          <button
            className="button button_edit"
            onClick={() => {
              trim();
            }}
          >
            <img className="icon" src={icon_delete} alt="delete-icon" />
          </button>
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

          <button
            className="button button_result"
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
