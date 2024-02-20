import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const selectActivePlayerHelper = (turns) => {
    let currentPlayer = "X";
    if (turns.length > 0 && turns[0].player == "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  };
  const activePlayerSymbol = selectActivePlayerHelper(gameTurns);
  let currentGameBoard = initialGameBoard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    currentGameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      currentGameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      currentGameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol =
      currentGameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol == secondSquareSymbol &&
      secondSquareSymbol == thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  console.log(winner);
  const handleSelectActivePlayer = (rowIndex, columnIndex) => {
    setGameTurns((prevTurns) => {
      const p = selectActivePlayerHelper(prevTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: columnIndex },
          player: p,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
            board={currentGameBoard}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
