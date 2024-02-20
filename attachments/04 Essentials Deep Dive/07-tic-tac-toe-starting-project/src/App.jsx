import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");
  const [currentPlayerName, setCurrentPlayerName] = useState();
  const handleSelectActivePlayer = () => {
    setActivePlayerSymbol((prevState) => (prevState == "X" ? "O" : "X"));
  };
  const handleSelectPlayerName = (playerName) => {
    setCurrentPlayerName(playerName);
    console.log(currentPlayerName);
  };
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              playerInitialName="abhinav"
              playerSymbol="X"
              isActivePlayer={activePlayerSymbol == "X"}
              onSelectPlayerName={(p) => handleSelectPlayerName(p)}
            ></Player>
            <Player
              playerInitialName="anand"
              playerSymbol="O"
              isActivePlayer={activePlayerSymbol == "O"}
              onSelectPlayerName={(p) => handleSelectPlayerName(p)}
            ></Player>
          </ol>
          <GameBoard
            onSelectActivePlayer={handleSelectActivePlayer}
            activePlayer={activePlayerSymbol}
          />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
