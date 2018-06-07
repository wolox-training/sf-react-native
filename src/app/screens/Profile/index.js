import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/profile/actions';

import './styles.css';

class Profile extends Component {
  render() {
    this.props.dispatch(actionCreators.getUserProfile());
    const profile = this.props.userProfile;
    const error = this.props.error;
    return (
      <div>
        Email: {profile ? profile.email : ''}
        <br />
        Name: {profile ? profile.name : ''}
        <br />
        Win: {profile ? profile.win : ''}
        <br />
        Loss: {profile ? profile.loss : ''}
        <br />
      </div>
    );
  }
}

Profile.propTypes = {
  userProfile: PropTypes.node,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  error: state.profile.err,
  userProfile: state.profile.userProfile
});

export default connect(mapStateToProps)(Profile);
