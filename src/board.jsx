import React, { Fragment } from "react";

const Board = ({ noSquares, boardSizePx }) => {
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
      </div>
    </Fragment>
  );
};

export default Board;
