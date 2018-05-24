import React, { Component } from 'react';

import Board from './components/Board/index.js';
import style from './styles.css';

class Game extends Component {
  render() {
    return (
      <div className={style.game}>
        <div className="game-board">
          <Board />
        </div>
        <div className={style.gameInfo}>
          <div>{/* status */}</div>
          <ol className={style.ol}>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
