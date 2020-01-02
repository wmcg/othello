import React from "react";
import Board from "./board";

const boardSizePx = 800;
const noSquares = 8;

function App() {
  return <Board boardSizePx={boardSizePx} noSquares={noSquares} />;
}

export default App;
