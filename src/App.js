import { useState, useEffect, useRef } from "react";
import './styles.css';

const App = () => {
  const [screenContent, setScreenContent] = useState("0");
  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState("0");

  const onChange1 = (event) => {
    setFirstNum(event.target.value);
  };
  
  const onChange2 = (event) => {
    setSecondNum(event.target.value);
  };
  
  const Content = () => {

  };
  
  
  return (
    <div className="body">
      <div className="frame">
        <div className="screen">
          <p className="screenContent"></p>
        </div>
        <div className="keys">
          <ul className="keyLine1">
            <li>AC</li>
            <li className="addMinus">+/-</li>
            <li>%</li>
            <li className="operator">÷</li>
          </ul>
          <ul className="keyLine2">
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li className="operator">X</li>
          </ul>
          <ul className="keyLine3">
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li className="operator">-</li>
          </ul>
          <ul className="keyLine4">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li className="operator">+</li>
          </ul>
          <ul className="keyLine5">
            <li>0</li>
            <li>.</li>
            <li>=</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
