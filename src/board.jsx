import React, { Fragment } from "react";
import Pieces from "./pieces";

const Board = ({ noSquares, boardSizePx, pieces }) => {
  const boardDimensions = { width: boardSizePx, height: boardSizePx };
  const squareDimensions = boardSizePx / noSquares;

  let squareLocations = [];

  for (let x = 0; x < noSquares * squareDimensions; x = x + squareDimensions) {
    for (
      let y = 0;
      y < noSquares * squareDimensions;
      y = y + squareDimensions
    ) {
      squareLocations.push({
        width: squareDimensions,
        height: squareDimensions,
        left: `${x}px`,
        top: `${y}px`
      });
    }
  }

  return (
    <Fragment>
      <div className="board" style={boardDimensions}>
        {squareLocations.map((square, i) => (
          <div className="board-square" key={i} style={square} />
        ))}
        <Pieces squareDimensions={squareDimensions} pieces={pieces} />
      </div>
    </Fragment>
  );
};

export default Board;
