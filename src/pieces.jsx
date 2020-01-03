import React, { Fragment } from "react";

const Pieces = ({ squareDimensions, pieces }) => {
  const convertToLocation = (colour, pieces) => {
    return pieces.map(piece => {
      let x = piece[0] * squareDimensions;
      let y = piece[1] * squareDimensions;

      return {
        colour: colour + "-piece",
        style: {
          left: `${x}px`,
          top: `${y}px`
        }
      };
    });
  };

  let whiteLocations = convertToLocation("white", pieces.white);
  let blackLocations = convertToLocation("black", pieces.black);
  let allLocations = whiteLocations.concat(blackLocations);

  return allLocations.map((square, i) => (
    <div className={square.colour} key={i} style={square.style} />
  ));
};

export default Pieces;
