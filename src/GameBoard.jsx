import React from "react";
import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  // let gameBoard = initialGameBoard;

  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // }

  const [gameBoard, setgameBoard] = useState(initialGameBoard);
  function handleSelectSquare(rowIndex, colIndex) {
    setgameBoard((prevGameBoard) => {
      const updatedBoard = prevGameBoard.map((row) => [...row]); // Create a copy of the game board
      if (
        rowIndex >= 0 &&
        rowIndex < updatedBoard.length &&
        colIndex >= 0 &&
        colIndex < updatedBoard[rowIndex].length
      ) {
        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      }
      console.log(activePlayerSymbol);

      return updatedBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((PlayerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={handleSelectSquare}>{PlayerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
