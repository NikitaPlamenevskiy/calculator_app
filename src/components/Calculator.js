import { useState } from "react";
import calculatorStyels from "./Calculator.module.css";
import icon_delete from "../icon_delete.svg";

const {
  calculator,
  btn,
  button_number,
  button_math,
  button_clear,
  icon,
  calculator__screen,
  calculator__operation,
  calculator__result,
  container_top,
  container,
  container_numbers,
  container_operations,
  button_long,
  button_operation,
} = calculatorStyels;

const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];

function Calculator() {
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
    if (value.b !== null) {
      setValue({
        ...value,
        b: value.b.slice(0, -1),
      });
    } else if (value.a !== null) {
      setValue({
        ...value,
        a: value.a.slice(0, -1),
      });
    }
  }
  return (
    <>
      <div className={calculator}>
        <div className={calculator__screen}>
          <p className={calculator__operation}>
            {value.a} {value.operation} {value.b}
          </p>
          <h1 className={calculator__result}>
            {result}
          </h1>
        </div>
        <div className={container_top}>
          <button className={`${btn} ${button_math}`}>e</button>
          <button className={`${btn} ${button_math}`}>sin</button>
          <button className={`${btn} ${button_math}`}>cos</button>
          <button className={`${btn} ${button_math}`}>deg</button>
          <button
            className={`${btn} ${button_clear}`}
            onClick={() => {
              clear();
            }}
          >
            AC
          </button>
          <button
            className={btn}
            onClick={() => {
              trim();
            }}
          >
            <img className={icon} src={icon_delete} alt="delete-icon" />
          </button>
          <button
            className={`${btn} ${button_operation}`}
            onClick={() => {
              handleOperator("/");
            }}
          >
            /
          </button>
          <button
            className={`${btn} ${button_operation}`}
            onClick={() => {
              handleOperator("*");
            }}
          >
            *
          </button>
          <div className={container}>
            <div className={container_numbers}>
              {buttons.map((button) => {
                return (
                  <button
                    className={`${btn} ${button === 0 ? button_number : ""}`}
                    key={button}
                    onClick={() => {
                      handleClick(button);
                    }}
                  >
                    {button}
                  </button>
                );
              })}
            </div>
            <div className={container_operations}>
              <button
                className={`${btn} ${button_operation}`}
                onClick={() => {
                  handleOperator("-");
                }}
              >
                -
              </button>
              <button
                className={`${btn} ${button_operation} ${button_long}`}
                onClick={() => {
                  handleOperator("+");
                }}
              >
                +
              </button>
              <button
                className={`${btn} ${button_operation} ${button_long}`}
                onClick={() => {
                  getOperation();
                }}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Calculator };
