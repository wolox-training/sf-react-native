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
      <div className="topBar">
        <Link className="gameLink" to="/game">
          {strings.game}
        </Link>
        <Link className="profileLink" to="/profile">
          {strings.profile}
        </Link>
        <button className="signOutButton" onClick={this.handleClick}>
          {strings.signOut}
        </button>
      </div>
    );
  }
}

export default connect()(TopBar);
