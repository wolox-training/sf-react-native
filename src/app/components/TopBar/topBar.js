import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actionCreators } from '../../../redux/logIn/actions';

import { strings } from './strings';
import './styles.css';

class TopBar extends Component {
  handleClick = () => {
    this.props.dispatch(actionCreators.signOut());
  };

  render() {
    return (
      <div className="top-bar">
        <Link className="game-link" to="/game">
          {strings.game}
        </Link>
        <Link className="profile-link" to="/profile">
          {strings.profile}
        </Link>
        <button className="signOut-button" onClick={this.handleClick}>
          {strings.signOut}
        </button>
      </div>
    );
  }
}

export default connect()(TopBar);
