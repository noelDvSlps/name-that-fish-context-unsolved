import { useFish } from "./fish.context";
import "./styles/score-board.css";
import React from "react";

// ! do not add props to scoreboard
export const ScoreBoard = () => {
  const { incorrectCount, correctCount, answersLeft } = useFish();
  
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
