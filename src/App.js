import "./styles.css";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let [factor, setFactor] = useState(1);

  const handleIncreament = () => {
    setCount(count + factor);
  };

  const handleDecreament = () => {
    setCount(count - factor);
  };

  const handleReset = () => {
    setCount((count = 0));
  };

  let countColor = "black";
  if (count > 0) {
    countColor = "green";
  } else if (count < 0) {
    countColor = "red";
  }

  let countBackground = "white";
  if (count > 0) {
    countBackground = "lightgreen";
  } else if (count < 0) {
    countBackground = "orange";
  }

  return (
    <div className="container">
      <h1
        style={{ color: countColor, backgroundColor: countBackground }}
        className="count"
      >
        {count}
      </h1>
      <div>
        <p className="factor-heading">
          Enter the factor with which you want to increase/decrease the counter
        </p>
        <input
          className="factor-input"
          type="number"
          value={factor}
          onChange={(e) => setFactor(e.target.valueAsNumber)}
        ></input>
        <div className="button">
          <button className="increament-button" onClick={handleIncreament}>
            Increament
          </button>
          <button className="decreament-button" onClick={handleDecreament}>
            Decreament
          </button>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
