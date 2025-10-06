import calculatorStyels from "./Calculator.module.css";
import icon_delete from "../icon_delete.svg";

const {
  calculator,
  button,
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

function Calculator() {
  return (
    <>
      <div className={calculator}>
        <div className={calculator__screen}>
          <p className={calculator__operation}>6000/2</p>
          <h1 className={calculator__result}>=12546</h1>
        </div>
        <div className={container_top}>
          <button className={`${button} ${button_math}`}>e</button>
          <button className={`${button} ${button_math}`}>sin</button>
          <button className={`${button} ${button_math}`}>cos</button>
          <button className={`${button} ${button_math}`}>deg</button>
          <button className={`${button} ${button_clear}`}>AC</button>
          <button className={button}>
            <img className={icon} src={icon_delete} alt="delete-icon" />
          </button>
          <button className={`${button} ${button_operation}`}>/</button>
          <button className={`${button} ${button_operation}`}>*</button>
          <div className={container}>
            <div className={container_numbers}>
              <button className={`${button}`}>7</button>
              <button className={`${button}`}>8</button>
              <button className={`${button}`}>9</button>
              <button className={`${button}`}>4</button>
              <button className={`${button}`}>5</button>
              <button className={`${button}`}>6</button>
              <button className={`${button}`}>1</button>
              <button className={`${button}`}>2</button>
              <button className={`${button}`}>3</button>
              <button className={`${button} ${button_number}`}>0</button>
              <button className={`${button}`}>.</button>
            </div>
            <div className={container_operations}>
              <button className={`${button} ${button_operation}`}>-</button>
              <button
                className={`${button} ${button_operation} ${button_long}`}
              >
                +
              </button>
              <button
                className={`${button} ${button_operation} ${button_long}`}
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
