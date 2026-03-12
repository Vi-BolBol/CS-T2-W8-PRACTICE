import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState("");
  const [width, setWidth] = useState(0);

  const handleChange = (e) => {
    if(e.target.value === ""){
      setScore("");
      setWidth(0);
      return;
    }

    const v = Math.min(10, Math.max(0, e.target.value));
    setScore(v);
    setWidth(v * 10);
  }

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${width}%`;

    // 2- Compute color (optional)
    let scoreColor1 = `#f3bc47`;
    let scoreColor2 = `#bbf347`;
    let scoreColor3 = `#58f347`;

    // 3 - Return the style object
    if (width < 30){
      return{
        width: scoreWidth,
        backgroundColor: scoreColor1,
      };
    } else if (width < 70){
      return{
        width: scoreWidth,
        backgroundColor: scoreColor2,
      };
    }else{
      return{
        width: scoreWidth,
        backgroundColor: scoreColor3,
      };
    }
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
