import { useState, useEffect, useRef } from "react";
import "./styles.css";

const App = () => {
  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const reset = (event) => {
    setFirstNum(0);
    setSecondNum("");
    setOperator("");
    setResult("");
  };

  const OnClick = (event) => {
    if (
      typeof Number(event.target.textContent) === "number" &&
      !secondNum &&
      !operator 
    ) {
      setFirstNum(Number(event.target.textContent));
      console.log(firstNum);
    }

    if (
      firstNum &&
      typeof Number(event.target.textContent) === "number" &&
      operator
    ) {
      setSecondNum(Number(event.target.textContent));
      console.log(secondNum);
    }
  };

  const AddMinus = () => {
    if (firstNum !== 0 && !secondNum) {
      setFirstNum((prev) => "-" + prev);
    } else if (secondNum !== 0) {
      setSecondNum((prev) => "(-" + prev +')');
    }
  };

  const operators = ["+", "–", "✕", "÷"];
  const Operator = (event) => {
    for (let i = 0; i < 4; i++) {
      if (event.target.textContent === operators[i]) {
        setOperator(event.target.textContent);
        console.log(operator[i]);
      }
    }
  };

  const Result = (event) => {
    let num1 = Number(firstNum);
    let num2 = Number(secondNum);

    let result;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "–") {
      result = num1 - num2;
    } else if (operator === "✕") {
      result = num1 * num2;
    } else if (operator === "÷") {
      result = num1 / num2;
    }

    setResult(`= ` + result);
  };

  return (
    <div>
      <div className="frame">
        <div className="screen">
          <p className="screenContent">
            {firstNum}
            {operator}
            {secondNum}
            {result}
          </p>
        </div>
        <div className="pad">
          <ul className="keyPad keyLine1">
            <button onClick={reset} className="gray">
              AC
            </button>
            <button onClick={AddMinus} className="gray addMinus">
              +/-
            </button>
            <button onClick={OnClick} className="gray">
              %
            </button>
            <button onClick={Operator} className="orange operator">
              ÷
            </button>
          </ul>
          <ul className="keyPad keyLine2">
            <button onClick={OnClick}>7</button>
            <button onClick={OnClick}>8</button>
            <button onClick={OnClick}>9</button>
            <button onClick={Operator} className="orange operator">
              ✕
            </button>
          </ul>
          <ul className="keyPad keyLine3">
            <button onClick={OnClick}>4</button>
            <button onClick={OnClick}>5</button>
            <button onClick={OnClick}>6</button>
            <button onClick={Operator} className="orange operator">
              –
            </button>
          </ul>
          <ul className="keyPad keyLine4">
            <button onClick={OnClick}>1</button>
            <button onClick={OnClick}>2</button>
            <button onClick={OnClick}>3</button>
            <button onClick={Operator} className="orange operator">
              +
            </button>
          </ul>
          <ul className="keyPad keyLine5">
            <button onClick={OnClick} className="zero">
              0
            </button>
            <button onClick={OnClick}>.</button>
            <button onClick={Result} className="orange">
              =
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
