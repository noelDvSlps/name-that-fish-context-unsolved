import "./styles/game-board.css";
import React from "react";
import {  useState } from "react";
import { useFish } from "./fish.context";
import { FinalScore } from "./FinalScore";

// ! Do not add props to gameboard
export const GameBoard = () => {
  const { initialFishes, handleFishGuess, setCounter, counter } =
    useFish();
  const [guess, setGuess] = useState("");
  const nextFishToName = initialFishes[counter]; //i think i undo this line accidentally and became like this "initialFishes[0]"
 
  if (counter !== initialFishes.length) {
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleFishGuess(guess);
            setGuess("");
            setCounter(counter + 1);
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={guess}
            onChange={(e) => {
              setGuess(e.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  } else {
    return ( <FinalScore />)
  }
};
