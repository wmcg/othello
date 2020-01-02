import React, { Fragment } from "react";

const noSquares = 64;
const boardDimension = 8; // sq root of noSquares
const sizeSquare = 12.5;

const Board = () => {
  let squares = [];

  for (let x = 0; x < boardDimension * sizeSquare; x = x + sizeSquare) {
    for (let y = 0; y < boardDimension * sizeSquare; y = y + sizeSquare) {
      squares.push({
        left: `${x}%`,
        top: `${y}%`
      });
    }
  }

  console.log(squares);

  return (
    <Fragment>
      <div className="board">
        {squares.map((square, i) => (
          <div className="board-square" key={i} style={square} />
        ))}
      </div>
    </Fragment>
  );
};

export default Board;
