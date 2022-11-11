import { useState, useEffect, useRef } from "react";
import './styles.css';

const App = () => {
  const [screenContent, setScreenContent] = useState("0");
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");

  const onChange1 = (event) => {
    setFirstNum(event.target.value);
  };
  
  const onChange2 = (event) => {
    setSecondNum(event.target.value);
  };
  
  const Content = () => {

  };
  
  
  return (
    <div>
      <div className="frame">
        <div className="screen">
          <p className="screenContent">0</p>
        </div>
        <div className="pad">
          <ul className="keyPad keyLine1">
            <button className="gray">AC</button>
            <button className="gray addMinus">+/-</button>
            <button className="gray">%</button>
            <button className="orange operator">÷</button>
          </ul>
          <ul className="keyPad keyLine2">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="orange operator">✕</button>
          </ul>
          <ul className="keyPad keyLine3">
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="orange operator">–</button>
          </ul>
          <ul className="keyPad keyLine4">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="orange operator">+</button>
          </ul>
          <ul className="keyPad keyLine5">
            <button className="zero">0</button>
            <button>.</button>
            <button className="orange">=</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
