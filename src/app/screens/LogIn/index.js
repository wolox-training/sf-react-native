import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../redux/logIn/actions';

import { strings } from './strings';
import LogInForm from './layout.js';
import './styles.css';

class LogIn extends Component {
  handleSubmit = values => {
    this.props.dispatch(actionCreators.authUser(values.email, values.password));
  };

  render() {
    return (
      <div className="logIn-page">
        <h2 className="logIn-form-title">{strings.ticTacToeTitle}</h2>
        <LogInForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.err
});

export default connect(mapStateToProps)(LogIn);
