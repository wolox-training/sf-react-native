import React, { Component } from 'react';

import Board from './components/Board/index.js';
import './styles.css';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="gameInfo">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
