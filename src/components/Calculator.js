/* 
TODO:
Добавить математические функции 
Добавить проверку деления на ноль 
Добавить обрезание числа при получении длинного результата
Заполнить README
*/

import { useState } from "react";
import styles from "./Calculator.module.css";
import icon_delete from "../icon_delete.svg";

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
      <div className={styles.calculator}>
        <div className={styles.calculator__screen}>
          <p className={styles.calculator__operation}>
            {value.a} {value.operation} {value.b}
          </p>
          <h1 className={styles.calculator__result}>{result}</h1>
        </div>
        <div className={styles.container_top}>
          <button className={`${styles.btn} ${styles.button_math}`}>e</button>
          <button className={`${styles.btn} ${styles.button_math}`}>sin</button>
          <button className={`${styles.btn} ${styles.button_math}`}>cos</button>
          <button className={`${styles.btn} ${styles.button_math}`}>deg</button>
          <button
            className={`${styles.btn} ${styles.button_clear}`}
            onClick={() => {
              clear();
            }}
          >
            AC
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              trim();
            }}
          >
            <img className={styles.icon} src={icon_delete} alt="delete-icon" />
          </button>
          <button
            className={`${styles.btn} ${styles.button_operation}`}
            onClick={() => {
              handleOperator("/");
            }}
          >
            /
          </button>
          <button
            className={`${styles.btn} ${styles.button_operation}`}
            onClick={() => {
              handleOperator("*");
            }}
          >
            *
          </button>
          <div className={styles.container}>
            <div className={styles.container_numbers}>
              {buttons.map((button) => {
                return (
                  <button
                    className={`${styles.btn} ${
                      button === 0 ? styles.button_number : ""
                    }`}
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
            <div className={styles.container_operations}>
              <button
                className={`${styles.btn} ${styles.button_operation}`}
                onClick={() => {
                  handleOperator("-");
                }}
              >
                -
              </button>
              <button
                className={`${styles.btn} ${styles.button_operation} ${styles.button_long}`}
                onClick={() => {
                  handleOperator("+");
                }}
              >
                +
              </button>
              <button
                className={`${styles.btn} ${styles.button_operation} ${styles.button_long}`}
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
