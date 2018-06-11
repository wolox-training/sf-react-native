import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/logIn/actions';
import { withLoading } from '../../components/Loading/loading';

import LogInForm from './layout.js';
import './styles.css';

const LogInFormWithLoading = withLoading(LogInForm);

class LogIn extends Component {
  handleSubmit = values => {
    this.props.dispatch(actionCreators.authUser(values.email, values.password));
  };

  render() {
    return (
      <div className="logIn-page">
        <LogInFormWithLoading isLoading={this.props.loading} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

LogIn.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  error: state.auth.err,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(LogIn);
