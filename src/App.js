import React, { Component, Fragment } from "react";
import Board from "./board";
import Pieces from "./pieces";

const boardSizePx = 800;
const noSquares = 8;

const initalState = {
  pieces: {
    white: [
      [4, 4],
      [3, 3]
    ],
    black: [
      [4, 3],
      [3, 4]
    ]
  }
};

class App extends Component {
  state = initalState;

  render() {
    return (
      <Fragment>
        <Board
          boardSizePx={boardSizePx}
          noSquares={noSquares}
          pieces={this.state.pieces}
        />
      </Fragment>
    );
  }
}

export default App;
