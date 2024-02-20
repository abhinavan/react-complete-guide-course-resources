import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectActivePlayer, activePlayer }) => {
  const [currentGameBoard, setCurrentGameBoard] = useState(initialGameBoard);

  const handleUpdateGameBoard = (rowIndex, columnIndex) => {
    setCurrentGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][columnIndex] = activePlayer;
      onSelectActivePlayer();
      return updatedGameBoard;
    });
  };
  return (
    <ol id="game-board">
      {currentGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => {
                    handleUpdateGameBoard(rowIndex, columnIndex);
                  }}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
