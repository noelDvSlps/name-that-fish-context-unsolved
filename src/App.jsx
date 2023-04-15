import React from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { FishProvider } from "./Components/fish.context";

function App() {
  return (
    <FishProvider>
      <div className="App">
        <header>
          <ScoreBoard />
          <GameBoard />
        </header>
      </div>
    </FishProvider>
  );
}

export default App;
